import { RouteObject } from "react-router-dom";
import { HomePage } from ".";
import { AboutPage } from "./AboutPage/AboutPage";

export const ROUTES = {
  Home: '/',
  About: '/about/',
}

export default [
  {
    path: ROUTES.Home,
    element: <HomePage />,
  },
  {
    path: ROUTES.About + ':name',
    element: <AboutPage />,
  }
] as RouteObject[];
