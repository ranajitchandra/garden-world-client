

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Loading from "./Loading";

export default function BrowseTips() {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://graden-world-server.vercel.app/gardenTips")
            .then((res) => res.json())
            .then((data) => {
                setTips(data.filter(item => item.availability === "Public"))
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto max-w-8/12 mx-auto my-8">
            <table className="table table-zebra shadow-lg">
                <thead className="bg-primary text-white text-lg">
                    <tr className="grid grid-cols-5 items-center">
                        <th className="py-4">Image</th>
                        <th className="py-4">Title</th>
                        <th className="py-4">Category</th>
                        <th className="py-4">User Name</th>
                        <th className="py-4 flex justify-end">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tips.map((tip) => (
                        <tr
                            key={tip._id}
                            className="grid grid-cols-5 items-center hover:bg-primary/5 border-b border-b-gray-300 transition duration-200"
                        >
                            <td>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12 border-1 border-primary">
                                            <img src={tip.imageUrl} alt={tip.title} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="text-gray-700 font-bold">{tip.title}</td>
                            <td className="text-gray-700 font-bold">{tip.category}</td>
                            <td className="text-gray-700 font-bold">{tip.userName}</td>
                            <td className=" flex justify-end">
                                <Link to={`/tips/browse_tips_details/${tip._id}`}
                                    className="btn btn-primary btn-sm text-white flex items-center gap-2 hover:scale-105 hover:brightness-110 transition-transform"
                                >
                                    <FaEye size={18} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
}
