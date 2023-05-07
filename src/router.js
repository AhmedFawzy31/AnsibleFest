import { createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
const router = createHashRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
