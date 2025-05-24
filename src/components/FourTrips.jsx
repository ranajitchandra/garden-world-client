
import { FaLeaf, FaHardHat, FaBroom, FaBullseye } from 'react-icons/fa';

export default function FourTrips() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">Our Work</p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-10">
          We Treat Your Paradise Garden<br />Just 4 Step
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="border border-gray-600 rounded-lg p-6 bg-black/20 hover:bg-white/10 transition">
            <div className="flex justify-center mb-4 text-green-400">
              <FaLeaf size={40} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Maintaining Grass</h3>
            <p className="text-sm text-gray-400">Providing the right amount of water is vital.</p>
            <div className="mt-4 text-gray-500">...</div>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-600 rounded-lg p-6 bg-black/20 hover:bg-white/10 transition">
            <div className="flex justify-center mb-4 text-green-400">
              <FaHardHat size={40} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Creating a Hardscape</h3>
            <p className="text-sm text-gray-400">Providing the right amount of water is vital.</p>
            <div className="mt-4 text-gray-500">...</div>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-600 rounded-lg p-6 bg-black/20 hover:bg-white/10 transition">
            <div className="flex justify-center mb-4 text-green-400">
              <FaBroom size={40} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Time of year cleanup</h3>
            <p className="text-sm text-gray-400">Providing the right amount of water is vital.</p>
            <div className="mt-4 text-gray-500">...</div>
          </div>

          {/* Step 4 */}
          <div className="border border-gray-600 rounded-lg p-6 bg-black/20 hover:bg-white/10 transition">
            <div className="flex justify-center mb-4 text-green-400">
              <FaBullseye size={40} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Targeted Services</h3>
            <p className="text-sm text-gray-400">Providing the right amount of water is vital.</p>
            <div className="mt-4 text-gray-500">...</div>
          </div>

        </div>
      </div>
    </section>
  );
}
