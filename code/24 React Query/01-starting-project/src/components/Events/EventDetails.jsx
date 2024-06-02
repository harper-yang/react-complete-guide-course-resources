import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../utils/Http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {

  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {id} = useParams();

  const {data, isLoading, isError, error} = useQuery({
    queryFn: ({signal}) => fetchEvent({id, signal}),
    queryKey: ["event-detail", {
      eventDetailId: id,
    }]
  })

  const {mutate, isPending} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none"
      });
      navigate("/events");
    },
    fetch
  })

  const handleStartDeleting = () => {
    setIsDeleting(true);
  }

  const handleStopDeleting = () => {
    setIsDeleting(false);
  }

  const handleDelete = () => {
    mutate({
      id: id,
    })
  }

  return (
      <>
        {isDeleting &&
            <Modal onClose={handleStopDeleting}>
              <h2>Are you sure?</h2>
              <p>
                Do you really want to delete this event? This action can not be undone?
              </p>
              <div className="form-actions">
                {isPending && "delete event is pending..."}
                {!isPending && <button onClick={handleStopDeleting}
                                       className="text-button">Delete</button>}
                <button onClick={handleDelete} className="button">Confirm</button>
              </div>
            </Modal>
        }
        <Outlet/>
        <Header>
          <Link to="/events" className="nav-item">
            View all Events
          </Link>
        </Header>
        <article id="event-details">
          {isLoading && "event detail is loading..."}
          {isError && <ErrorBlock title="Failed to query event detail"
                                  message={error.info?.message || "Failed to query event detail, Please try again."}/>}
          {data &&
              <>
                <header>
                  <h1>{data.title}</h1>
                  <nav>
                    <button onClick={handleStartDeleting}>Delete</button>
                    <Link to="edit">Edit</Link>
                  </nav>
                </header>
                <div id="event-details-content">
                  <img src={`http://localhost:3000/${data.image}`} alt=""/>
                  <div id="event-details-info">
                    <div>
                      <p id="event-details-location">{data.location}</p>
                      <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} {data.time}</time>
                    </div>
                    <p id="event-details-description">{data.description}</p>
                  </div>
                </div>
              </>

          }

        </article>

      </>
  );
}
