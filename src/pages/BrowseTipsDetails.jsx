import { Link, useLoaderData } from "react-router";
import Loading from "../components/Loading";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";
import ErrorPage from "../components/ErrorPage";

export default function BrowseTipsDetails() {
    const tip = useLoaderData();

    console.log(tip.error);

    if (tip.error) {
        return (
            <>


                <div className="h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
                    <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        Your tip could not be found
                    </h2>
                    <p className="text-gray-600 mb-6">Please check the URL or go back to the homepage.</p>
                    <Link
                        to="/"

                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Go Home
                    </Link>
                </div>
            </>
        )
    }


    const [likeCount, setLikeCount] = useState(tip?.totalLike || 0);

    function handleLikeTip(id) {
        fetch(`https://graden-world-server.vercel.app/gardenTips/like/${id}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {

                    setLikeCount(prev => prev + 1);
                } else {
                    console.error("Like failed:", data.message);
                }
            })
    }

    if (!tip) return <Loading />;

    return (
        <>
            <h2 className="text-center text-4xl text-primary font-semibold my-10">Details</h2>
            <div data-aos="zoom-in" className="max-w-sm mx-auto my-10 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow  dark:bg-gray-800 dark:border-gray-700">
                <img
                    className="w-full h-52 object-cover"
                    src={tip.imageUrl}
                    alt={tip.title}
                />

                <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {tip.title}
                        </h5>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            {tip.category}
                        </span>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {tip.description}
                    </p>

                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                        <p><strong>Plant Type:</strong> {tip.plantType}</p>
                        <p><strong>Difficulty:</strong> {tip.difficulty}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleLikeTip(tip._id)} className="px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded-md hover:scale-110 hover:bg-gray-700 transition">
                                <AiFillLike size={20} />
                            </button>
                            <p className="text-lg font-semibold">{likeCount}</p>
                        </div>
                        <span>Posted By  {tip.userName}</span>
                    </div>
                </div>
            </div>


        </>
    );
}
