import { RouteObject } from 'react-router-dom';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <div>hi</div>,
    children: [
      {
        path: '/',
        element: <div>sdf</div>,
      },
    ],
  }
]

    export default paths;