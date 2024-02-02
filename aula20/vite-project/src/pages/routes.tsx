import { RouteObject } from "react-router-dom";
import { AboutPage, HomePage } from ".";

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
