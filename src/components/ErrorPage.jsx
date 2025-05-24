import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
            <Link
                to="/"
                className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;