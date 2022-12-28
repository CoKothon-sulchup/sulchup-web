import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout, theme } from './components';
import * as pages from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <pages.Home />,
    errorElement: <pages.NotFound />,
  },
  {
    path: '/write',
    element: <pages.Write />,
  }
])

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  );
}
