import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import FreeTasks from './components/FreeTasks';
import UpdateTask from './components/UpdateTask';
import AuthProvider from './Provider/AuthProvider';
import AuthLay from './layouts/AuthLay';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './Private/PrivateRoute';
import MyPostedTask from './components/MyPostedTask';
import AddTask from './components/AddTask';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/tasks',
        Component: FreeTasks

      },
      {
        path: 'updatetask',
        Component: UpdateTask

      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-tasks",
        element: (
          <PrivateRoute>
            <MyPostedTask></MyPostedTask>
          </PrivateRoute>
        ),
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLay />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
