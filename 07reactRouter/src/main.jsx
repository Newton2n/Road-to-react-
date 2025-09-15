import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Contact, User, Layout, Github } from "./components";
import GithubResponse from "./components/Github/githubApiCall";
import GithubError from "./components/Github/githubError";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        loader: GithubResponse,
        path: "Github",
        element: <Github />,
        errorElement: <GithubError/> 
      },
      { path: "User/:UserId", element: <User /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
