import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as pages from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <pages.Home />,
    errorElement: <pages.NotFound />,
  }
])

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
