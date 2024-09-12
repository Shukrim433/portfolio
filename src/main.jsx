import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all pages
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactMePage from "./pages/ContactMePage";
import LandingPage from "./pages/LandingPage";
import MoreProjects from "./pages/MoreProjects";

const router = createBrowserRouter([
  // define all the accessible routes, and which component(page) responds to which URL
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      /*  {
        index: true,
        element: <LandingPage />,
      }, */
      {
        index: true,
        element: <ProjectsPage />,
      },
      {
        path: "more-projects",
        element: <MoreProjects />,
      },
      {
        path: "contact",
        element: <ContactMePage />,
      },
      {
        path: "about",
        element: <AboutMePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
