import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddTask from "../Components/AddTask";
import UpdateTask from "../components/UpdateTask";
import TaskDetails from "../Components/TaskDetails";





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
            path: 'addTask',
            Component:AddTask,
        },
        {
            path: 'task/:id',
            Component: TaskDetails
        },
        {
            path: 'updateTask/:id',
            loader: ({ params }) =>
            fetch(`http://localhost:4000/tasks/${params.id}`),
            Component:UpdateTask,
        },
    ]
  },
]);

export default router