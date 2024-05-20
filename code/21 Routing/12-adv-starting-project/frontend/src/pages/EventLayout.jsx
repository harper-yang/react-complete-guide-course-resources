import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export const EventLayout = () => {
  return <>
    <EventsNavigation/>
    <main>
      <Outlet/>
    </main>
  </>
}
