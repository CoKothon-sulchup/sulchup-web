import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, theme } from "./components";
import * as pages from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <pages.Home />,
//     errorElement: <pages.NotFound />,
//   },
//   {
//     path: "/list",
//     element: <pages.List />,
//   },
//   {
//     path: "/view",
//     element: <pages.View />,
//   },
//   {
//     path: "/write",
//     element: <pages.Write />,
//   },
//   {
//     path: "/search",
//     element: <pages.Search />,
//   },
//   {
//     path: '/search/list',
//     element: <pages.SearchList />,
//   }
// ]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<pages.Home />} />
            <Route path="/list" element={<pages.List />} />
            <Route path="/write" element={<pages.Write />} />
            <Route path="/View" element={<pages.View />} />
            <Route path="/search" element={<pages.Search />} />
            <Route path="/search/result" element={<pages.SearchResult />} />
            <Route errorElement element={<pages.NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
};
