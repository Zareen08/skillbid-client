import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from "react-router";

import router from './Router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    
      <RouterProvider router={router}></RouterProvider>
    
    
  </StrictMode>
)
