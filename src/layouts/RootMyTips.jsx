

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootMyTips() {

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}