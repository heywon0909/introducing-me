import { RouteObject } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/main/Home";
import Info from '../pages/info/Info';
import Skills from 'pages/skills/Skills';
import Resume from 'pages/resume/Resume';
import Project from 'pages/project/Project';

// import Insert from 'pages/insert/Insert';

const paths: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: '/skills',
        element:<Skills/>
      },
      {
        path: '/resume',
        element:<Resume/>
      },
      {
        path: '/project',
        element:<Project/>
      }
    
    ],
  },
];

export default paths;
