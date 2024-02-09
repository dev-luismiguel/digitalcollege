import { RouteObject } from "react-router-dom";
import { AboutPage, HomePage } from ".";
import { MainLayout } from "../layouts/MainLayout";

export const ROUTES = {
  Home: "/",
  About: "/about/",
};

export default [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.Home,
        element: <HomePage />,
      },
      {
        path: ROUTES.About + ":name",
        element: <AboutPage />,
      },
    ],
  },
] as RouteObject[];
