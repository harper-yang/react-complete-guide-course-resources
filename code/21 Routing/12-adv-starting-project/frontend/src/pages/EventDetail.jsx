import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  const event = data.event;

  return <EventItem event={event}/>
}

export const eventDetailLoader = async ({request, params}) => {

  const id = params.id;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({message: "An unexpected error occurred.",}, {status: 500})
  } else {
    return response;
  }
}

export const deleteEventAction = async ({request, params}) => {
  const id = params.id;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({message: "Can not delete event.",}, {status: 500})
  } else {
    return redirect("/events");
  }
}
