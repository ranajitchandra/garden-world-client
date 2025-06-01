
import { FaArrowLeft, FaRegSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">Sorry, the page you’re looking for doesn’t exist.</p>

          <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="Not Found"
            className="w-72 h-auto mx-auto mb-8"
          />

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
            Go Home
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        <div className="text-[200px] font-bold flex items-center justify-center text-pink-400">
          <span>4</span>
          <div className="relative w-[200px] h-[200px] mx-4">
            <div className="absolute inset-0 rounded-full bg-pink-200 flex flex-col items-center justify-center">
              <div className="text-5xl animate-bounce">
                <FaRegSadTear className="text-blue-400" />
              </div>
              <div className="text-3xl mt-2 font-medium text-red-600 animate-pulse">Waaah!</div>
            </div>
          </div>
          <span>4</span>
        </div>
        <p className="text-xl text-gray-600 mt-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-3 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
        >
          Go Home
        </a>
      </div>







    </>
  );
};

export default ErrorPage;
