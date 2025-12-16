import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
