// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout";
import {ErrorPage} from "./pages/Error";
import {Homepage} from "./pages/Home";
import {EventLayout} from "./pages/EventLayout";
import {eventLoader, EventsPage} from "./pages/Events";
import {deleteEventAction, eventDetailLoader, EventDetailPage} from "./pages/EventDetail";
import {newEventAction, NewEventPage} from "./pages/NewEvent";
import {EditEventPage} from "./pages/EditEvent";

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
      {index: true, element: <Homepage/>},
      {
        path: "events", element: <EventLayout/>, children: [
          {
            // this loader function will execute when we navigate to this page. not when load this page.
            index: true, element: <EventsPage/>, loader: eventLoader
          },
          {
            path: ":id", loader: eventDetailLoader, id: "event-detail", children: [
              {index: true, element: <EventDetailPage/>, action: deleteEventAction},
              {path: "edit", element: <EditEventPage/>},
            ]
          },
          {path: "new", element: <NewEventPage/>, action: newEventAction},

        ]
      }]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
