import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
import { router } from './route/route'
import AuthContextProvider, { AuthContext } from './context/AuthContextProvider'
import { useContext } from 'react'

// Wrapper component to use the context
function AppWithTheme() {
    const { theTheme } = useContext(AuthContext)

    return (
        <div data-theme={theTheme ? "light" : "dark"}>
            <ToastContainer />
            <RouterProvider router={router} />
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <AppWithTheme />
        </AuthContextProvider>
    </StrictMode>,
)
