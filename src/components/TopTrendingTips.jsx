import { useEffect, useState } from "react";
import { FaHeart, FaLeaf, FaTag, FaTachometerAlt } from "react-icons/fa";

const TopTrendingTips = () => {
    const [topTips, setTopTips] = useState([]);

    useEffect(() => {
        fetch("https://graden-world-server.vercel.app/top-like")
            .then((response) => response.json())
            .then((data) => setTopTips(data));
    }, []);

    return (
        <div className="px-4 py-5 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-10">
                Top Trending Tips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {topTips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    >
                        <div className="h-44 overflow-hidden">
                            <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                className="w-full h-full object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-gray-800 truncate">{tip.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{tip.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-600">
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                    <FaTachometerAlt className="text-yellow-500" /> {tip.difficulty}
                                </span>
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                    <FaTag className="text-blue-500" /> {tip.category}
                                </span>
                            </div>
                            <div className="mt-3 text-right">
                                <span className="inline-flex items-center gap-1 text-red-500 font-medium text-sm">
                                    Liked: {tip.totalLike}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTrendingTips;
