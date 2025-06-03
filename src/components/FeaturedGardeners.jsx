


import React, { useEffect, useState } from "react";

const FeaturedGardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch("https://graden-world-server.vercel.app/featuredGardeners")
            .then((res) => res.json())
            .then((data) => setGardeners(data));
    }, []);

    return (
        <section className="px-4 py-15 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-10">Featured Gardeners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {gardeners.map((gardener, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 hover:scale-102"
                    >
                        <img
                            src={gardener.image}
                            alt={gardener.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex justify-between gap-4 p-4">
                            <div>
                                <h3 className="text-xl font-semibold">{gardener.name}</h3>
                                <p className="text-gray-600">{gardener.location}</p>
                                <p className="text-sm text-green-600 mt-2 font-medium">{gardener.experiences}</p>

                            </div>
                            <div>
                                <p className="font-bold text-primary">{gardener.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedGardeners;
