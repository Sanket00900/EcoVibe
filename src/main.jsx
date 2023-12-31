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
import energySourcesData from "./data.json";
import Details from "./components/Details";
import Feedback from "./routes/Feedback";
import Policies from "./routes/Policies";

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
    element: <Guide data={energySourcesData} />,
  },
  {
    name: "Details",
    path: "/guide/:id",
    element: <Details data={energySourcesData} />,
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
    element: <About data={energySourcesData} />,
  },
  {
    name: "Tools",
    path: "/tools",
    element: <Tools />,
  },
  {
    name: "Policies",
    path: "/policies",
    element: <Policies data={energySourcesData} />,
  },
  {
    name: "Feedback",
    path: "/feedback",
    element: <Feedback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
