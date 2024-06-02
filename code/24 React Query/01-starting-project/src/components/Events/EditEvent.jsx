import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../utils/Http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();

  const {id} = useParams();

  const {data, isPending, error, isError} = useQuery({
    queryKey: ["event-detail", {
      eventDetailId: id,
    }],
    queryFn: ({signal}) => fetchEvent({id, signal}),
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({
        queryKey: ["event-detail", {
          eventDetailId: id,
        }],
      });
      const preEvent = queryClient.getQueryData(["event-detail", {
        eventDetailId: id,
      }])

      queryClient.setQueriesData({
        queryKey: ["event-detail", {
          eventDetailId: id,
        }]
      }, newEvent)

      return {preEvent}
    },
    onError: (error, data, context) => {
      queryClient.setQueriesData({
        queryKey: ["event-detail", {
          eventDetailId: id,
        }]
      }, context.preEvent)
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["event-detail", {
          eventDetailId: id,
        }]
      })
    }
  })

  function handleSubmit(formData) {
    mutate({
      id: id, event: formData
    });
    navigate('../')
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = <LoadingIndicator/>;
  }
  if (isError) {
    content = <>
      <ErrorBlock title="Failed to fetch event detail" message="Failed to fetch event ddetail, Please try again"/>
      <div className="form-actions">
        <Link to="../" className="button">Ok</Link>
      </div>
    </>;
  }

  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
  }


  return (
      <Modal onClose={handleClose}>
        {content}
      </Modal>
  );
}
