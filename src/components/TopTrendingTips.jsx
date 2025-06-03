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
            <h2 className="text-3xl font-bold text-center my-10 text-primary">
                Top Trending Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topTips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-base-100 rounded-xl shadow-md border border-transparent dark:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    >
                        <div className="h-44 overflow-hidden">
                            <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                className="w-full h-full object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-secondary truncate">
                                {tip.title}
                            </h3>
                            <p className="text-sm text-accent line-clamp-2">{tip.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3 text-xs text-accent">
                                <span className="flex items-center gap-1 bg-base-200 px-2 py-1 rounded-full">
                                    <FaTachometerAlt className="text-yellow-500" /> {tip.difficulty}
                                </span>
                                <span className="flex items-center gap-1 bg-base-200 px-2 py-1 rounded-full">
                                    <FaTag className="text-blue-500" /> {tip.category}
                                </span>
                            </div>
                            <div className="mt-3 text-right">
                                <span className="inline-flex items-center gap-1 text-error font-medium text-sm">
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
