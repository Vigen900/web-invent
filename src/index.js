import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Store from './components/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import InventParent from './components/invent-parent';

const router = createBrowserRouter([
  {
    path: "/invent-parent/:id",
    element: (
      <InventParent></InventParent>
    ),
  },
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/store",
    element:<Store />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
