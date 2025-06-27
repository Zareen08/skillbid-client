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
import { homeLoader } from "../Components/homeLoader";
import FindByTaskCategory from "../Components/FindByTaskCategory";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Components/DashBoard";
import Profile from "../Components/Profile";
import Contact from "../Components/Contact";





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children:[
        {
            index:true,
            hydrateFallbackElement: <Loader></Loader>,
            loader: homeLoader ,
            Component: Home,
        },
        {
            path: '/browsetask',
            hydrateFallbackElement: <Loader></Loader>,
            loader:()=>fetch('https://skillbid-server-site.vercel.app/tasks') ,
            Component: BrowseTasks,
        },
        {
            path: 'about',
            Component:AboutUs,
        },
        {
            path: 'contact',
            Component: Contact,
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

        {
        path: 'tasks/category/:category',
        Component: FindByTaskCategory 
        }
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
  },
 {
    path: "/dashboard",
    Component: DashboardLayout,
     children: [
    { index: true, element: <PrivateRoute>
        <Dashboard></Dashboard>
        </PrivateRoute> }, 
    { path: 'profile', element: <PrivateRoute>
        <Profile></Profile>
    </PrivateRoute> },
    {
      path: "mytasks",
      element: (
        <PrivateRoute>
          <MyPostedTasks />
        </PrivateRoute>
      ),
    }, 
    {
      path: "addtasks",
      element: (
        <PrivateRoute>
          <AddTask/>
        </PrivateRoute>
      ),
    }, 
  ],
      

 }
]);

export default router