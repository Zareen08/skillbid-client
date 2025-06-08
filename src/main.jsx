import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from "react-router";

import router from './Router/Router';

import AuthProvider from './Components/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    
    
  </StrictMode>
)
