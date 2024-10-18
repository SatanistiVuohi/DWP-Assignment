import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Structure from "./ComponentUI";
import Trivia from "./OpenData";

const router = createBrowserRouter([
  { path: "/", element: <Structure /> },
  { path: "/trivia", element: <Trivia /> }
]);

function NavigationBar() {
  return <RouterProvider router={router} />;
}

export default NavigationBar;