import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddTask from "../Components/AddTask";
import UpdateTask from "../components/UpdateTask";
import TaskDetails from "../Components/TaskDetails";
import BrowseTasks from "../Components/BrowseTasks";
import AboutUs from "../Components/AboutUs";
import Terms from "../Components/Terms";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import Users from "../Components/Users";
import AuthLayout from "../Components/AuthLayout";
import MyPostedTasks from "../Components/MyPostedTask";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            loader:()=>fetch('http://localhost:4000/tasks') ,
            Component: Home,
        },
        {
            path: '/browsetask',
            loader:()=>fetch('http://localhost:4000/tasks') ,
            Component: BrowseTasks,
        },
        {
            path: 'addTask',
            element: (<PrivateRoute>
                <AddTask></AddTask>
            </PrivateRoute>)
        },
        {
            path: 'about',
            Component:AboutUs,
        },
        {
            path: 'terms',
            Component:Terms,
        },
        {
            path: 'task/:id',
            element: (<PrivateRoute>
                <TaskDetails></TaskDetails>
            </PrivateRoute>)
        },
        {
          path: '/mytasks',
          element: (<PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
            </PrivateRoute>)
        },
        {
            path: 'users',
            loader:()=>fetch('http://localhost:4000/users'),
            Component: Users
        },
        
        {
            path: 'updateTask/:id',
            loader: ({ params }) =>
            fetch(`http://localhost:4000/tasks/${params.id}`),
            Component:UpdateTask,
        },
    ]
  },
  {
    path:'/auth',
    Component: AuthLayout,
    children:[
        {
            path: '/auth/signup',
            Component: SignUp,
        },
        {
            path: '/auth/login',
            Component: Login
        },
    ]
  }
]);

export default router