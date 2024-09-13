import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col h-screen bg-gray-100 pt-12">
      <div className="flex flex-col items-center">
        <FaExclamationTriangle className="text-yellow-400 text-5xl mb-4" />
        <h1 className="text-4xl font-bold text-red-600 mt-6">404 Oops! Page not found.</h1>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;
