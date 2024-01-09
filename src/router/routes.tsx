import { RouteObject } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";

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
