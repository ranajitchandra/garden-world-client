import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children:[
                {
                    path: "/",
                    element: <h1>Home</h1>
                }
            ]
        }
    ]
)