import { RouteObject } from "react-router-dom";
import { AboutPage, HomePage, DevDetailPage } from ".";
import { MainLayout } from "../layouts/MainLayout";

export const ROUTES = {
  Home: '/',
  About: '/about/',
  DevDetail: '/dev-detail/',
}

export default [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.Home,
        element: <HomePage />,
      },
      {
        path: ROUTES.DevDetail,
        element: <DevDetailPage />,
      },
      {
        path: ROUTES.About + ':name',
        element: <AboutPage />,
      }
    ]
  },
] as RouteObject[];
