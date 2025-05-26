import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import RootAuth from "../layouts/RootAuth";
import Register from "../pages/Register";
import ShareGardenTip from "../components/ShareGardenTip";
import Home from "../components/Home";
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/share_garden_tip",
                    element: <ShareGardenTip></ShareGardenTip>
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