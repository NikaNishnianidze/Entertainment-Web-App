import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import WebProvider from "./context/WebProvider";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import BookMark from "./components/BookMark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
      },
      {
        path: "/book-mark",
        element: <BookMark />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={router} />
    </WebProvider>
  </StrictMode>
);
