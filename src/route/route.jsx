import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import RootAuth from "../layouts/RootAuth";
import Register from "../pages/Register";
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <h1>Home</h1>
                },
                {
                    path: "/auth",
                    element: <Login></Login>
                },
            ]
        },
        {
            path: "/auth",
            element: <RootAuth></RootAuth>,
            children: [
                {
                    index: true,
                    element: <Navigate to="/auth/login" replace />
                },
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        },
        {
            path: "*",
            element: <h1>ee</h1>
        }
    ]
)