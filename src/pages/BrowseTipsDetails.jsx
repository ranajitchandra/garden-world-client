import { useLoaderData } from "react-router";
import Loading from "../components/Loading";

export default function BrowseTipsDetails() {
    const tip = useLoaderData();

    if (!tip) return <Loading />;

    return (
        <>
            
            <h2 className="text-center text-4xl text-primary font-semibold my-10">Details</h2>
            <div className="max-w-sm mx-auto my-10 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800 dark:border-gray-700">
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
                        <span>Posted By  {tip.userName}</span>
                        <button className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full hover:bg-green-700 transition">
                            Like
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}
