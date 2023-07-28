import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
import Home from "./routes/Home";
import ErrorPage from "./ErrorPage.jsx";
import Guide from "./routes/Guide.jsx";
import Locations from "./routes/Locations.jsx";
import News from "./routes/News.jsx";
import Tools from "./routes/Tools.jsx";
import About from "./routes/About.jsx";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    name: "Guide",
    path: "/guide",
    element: <Guide />,
  },
  {
    name: "News",
    path: "/news",
    element: <News />,
  },
  {
    name: "Locations",
    path: "/locations",
    element: <Locations />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Tools",
    path: "/tools",
    element: <Tools />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
