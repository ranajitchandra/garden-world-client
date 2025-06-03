

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Loading from "./Loading";

export default function BrowseTips() {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [difficulty, setDifficulty] = useState("All");
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

            <div className="mb-4 text-right">
                <div className="form-control">
                    <label className="label justify-end">
                        <span className="label-text text-primary mr-2">Filter by Difficulty:</span>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="select select-bordered select-sm w-36 bg-base-100"
                        >
                            <option className="font-bold" value="All">All</option>
                            <option className="font-bold" value="Easy">Easy</option>
                            <option className="font-bold" value="Medium">Medium</option>
                            <option className="font-bold" value="Hard">Hard</option>
                        </select>
                    </label>
                </div>
            </div>



            <table className="table table-zebra shadow-lg">
                <thead className="bg-primary text-white text-lg">
                    <tr className="grid grid-cols-5 items-center">
                        <th className="py-4">Image</th>
                        <th className="py-4">Title</th>
                        <th className="py-4">Difficulty</th>
                        <th className="py-4">User Name</th>
                        <th className="py-4 flex justify-end">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tips.filter((tip) => difficulty === "All" ? true : tip.difficulty === difficulty)
                        .map((tip) => (
                            <tr data-aos="fade-right"
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

                                <td className="text-accent font-bold">{tip.title}</td>
                                <td className="text-accent font-bold">{tip.difficulty}</td>
                                <td className="text-accent font-bold">{tip.userName}</td>
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
