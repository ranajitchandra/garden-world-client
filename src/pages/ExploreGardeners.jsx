import { useLoaderData } from "react-router";


const ExploreGardeners = () => {

    const gardeners = useLoaderData()


  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Explore Gardeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gardeners.map((gardener, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{gardener.name}</h3>
              <p className="text-sm text-gray-600">{gardener.location}</p>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><strong>Age:</strong> {gardener.age}</li>
                <li><strong>Gender:</strong> {gardener.gender}</li>
                <li><strong>Status:</strong> {gardener.status}</li>
                <li><strong>Tips Shared:</strong> {gardener.totalSharedTips}</li>
                <li><strong>Experience:</strong> {gardener.experiences}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;