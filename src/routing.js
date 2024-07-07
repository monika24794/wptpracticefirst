import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Create from "./Components/Create";

const cutomrouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          path: "Home",
          element: <Home/>,
        },
        {
            path: "Create",
          element: <Create/>
        }
      ]
    
  },
]);
export default cutomrouter;