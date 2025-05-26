import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
import { router } from './route/route'
import AuthContextProvider from './context/AuthContextProvider'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <ToastContainer />
            <RouterProvider router={router}></RouterProvider>
        </AuthContextProvider>
    </StrictMode>,
)
