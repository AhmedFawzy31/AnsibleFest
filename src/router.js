import { createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventForm from "./pages/EventForm";
const router = createHashRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "event/:id",
        element: <Event></Event>,
      },
      {
        path: "event/new",
        element: <EventForm></EventForm>,
      },
    ],
  },
]);
export default router;
