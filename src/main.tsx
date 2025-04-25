import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import WebProvider from "./context/WebProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={router} />
    </WebProvider>
  </StrictMode>
);
