import { RouteObject } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/main/Home";

const paths: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default paths;
