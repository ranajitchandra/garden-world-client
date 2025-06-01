import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import RootAuth from "../layouts/RootAuth";
import Register from "../pages/Register";
import ShareGardenTip from "../components/ShareGardenTip";
import Home from "../components/Home";
import BrowseTips from "../components/BrowseTips";
import BrowseTipsDetails from "../pages/BrowseTipsDetails";
import MyTips from "../components/MyTips";
import RootTips from "../layouts/RootTips";
import RootMyTips from "../layouts/RootMyTips";
import UpdateTip from "../components/UpdateTip";
import ErrorPage from "../components/ErrorPage";
import ExploreGardeners from "../pages/ExploreGardeners";
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
                {
                    path: "/explore_gardeners",
                    loader: () => fetch("https://graden-world-server.vercel.app/exploreGardeners"),
                    element: <ExploreGardeners></ExploreGardeners>
                },

            ]
        },
        {
            path: "/my_tips",
            element: <RootMyTips></RootMyTips>,
            children: [
                {
                    path: "/my_tips",
                    loader: ()=> fetch("https://graden-world-server.vercel.app/gardenTips"),
                    element: <MyTips></MyTips>
                },
                {
                    path: '/my_tips/update/:id',
                    loader: ({ params }) => fetch(`https://graden-world-server.vercel.app/gardenTips/${params.id}`),
                    element: <UpdateTip></UpdateTip>
                },
            ]
        },
        {
            path: "/tips",
            element: <RootTips></RootTips>,
            children: [
                {
                    path: "/tips",
                    element: <BrowseTips></BrowseTips>,
                },
                {
                    path: "/tips/browse_tips_details/:id",
                    loader: ({ params }) => fetch(`https://graden-world-server.vercel.app/gardenTips/${params.id}`),
                    element: <BrowseTipsDetails></BrowseTipsDetails>
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
            element: <ErrorPage></ErrorPage>
        }
    ]
)


