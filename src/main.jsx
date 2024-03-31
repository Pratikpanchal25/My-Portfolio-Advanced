import React from "react";
import ReactDOM from "react-dom/client";
import "./App.jsx"

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects/Projects.jsx";
import Education from "./Education/Education.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects/>} />
      <Route path="education" element={<Education/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
