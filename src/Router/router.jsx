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
import Error from "../Components/error/Error";
import Loader from "../Components/Loader";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children:[
        {
            index:true,
            hydrateFallbackElement: <Loader></Loader>,
            loader:()=>fetch('https://skillbid-server-site.vercel.app/featured-tasks') ,
            Component: Home,
        },
        {
            path: '/browsetask',
            hydrateFallbackElement: <Loader></Loader>,
            loader:()=>fetch('https://skillbid-server-site.vercel.app/tasks') ,
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
            hydrateFallbackElement: <Loader></Loader>,
            element: (<PrivateRoute>
                <TaskDetails></TaskDetails>
            </PrivateRoute>)
        },
        {
          path: '/mytasks',
          hydrateFallbackElement: <Loader></Loader>,
          element: (<PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
            </PrivateRoute>)
        },
        {
            path: 'users',
            hydrateFallbackElement: <Loader></Loader>,
            loader:()=>fetch('https://skillbid-server-site.vercel.app/users'),
            Component: Users
        },
        
        {
            path: 'updateTask/:id',
            hydrateFallbackElement: <Loader></Loader>,
            loader: ({ params }) =>
            fetch(`https://skillbid-server-site.vercel.app/tasks/${params.id}`),
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