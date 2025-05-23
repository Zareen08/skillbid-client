import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import FreeTasks from './components/FreeTasks';
import UpdateTask from './components/UpdateTask';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    Children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'freetask',
        Component: FreeTasks

      },
      {
        path: 'updatetask',
        Component: UpdateTask

      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
