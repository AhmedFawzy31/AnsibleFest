import { createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventForm from "./pages/EventForm";
import Auth from "./pages/Auth";
import { requireAuth } from "./pages/Auth";
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
        loader: requireAuth,
      },
      {
        path: "auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);
export default router;
