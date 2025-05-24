import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
import { router } from './route/route'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <AuthContextProvider>
        </AuthContextProvider> */}
            <ToastContainer />
            <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
)
