import React from 'react';
import 'normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import Store from './components/store';
import ShowInvents from './components/show-invents';
import ShowGuests from './components/show-guests';
import {
  createBrowserRouter,
  RouterProvider,
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
  {
    path: "/show-invent",
    element:<ShowInvents />,
  },
  {
    path: "/show-invent/:id/guests-list",
    element:<ShowGuests />,
  },
],{
  basename: process.env.PUBLIC_URL,
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
