import EventsList from '../components/EventsList';
import {json, useLoaderData} from "react-router-dom";

export function EventsPage() {

  const data = useLoaderData();

  const events = data.events;

  return <EventsList events={events}/>;
}

export const eventLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: "An unexpected error occurred.",}), {
    //   status: 500
    // });
    throw json({message: "An unexpected error occurred.",}, {status: 500})
  } else {
    return response;
  }
}
