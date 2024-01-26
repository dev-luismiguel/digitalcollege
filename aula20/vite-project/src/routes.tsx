import { RouteObject } from "react-router-dom";
import App from "./App";
import { AboutPage } from "./pages/AboutPage/AboutPage";

export default [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about/:name",
    element: <AboutPage />,
  },
] as RouteObject[];
