import React, { useEffect, useRef } from 'react';
import router from './router'
import './App.css';
import { RouterProvider } from 'react-router';
import * as S from 'pages/main/styled'



function App() {
  return (
    <RouterProvider router={router} />
    )
}

export default App;
