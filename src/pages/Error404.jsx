import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-950 text-gray-200 px-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold text-indigo-400 drop-shadow-md">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold">
          Oops! Page not found.
        </p>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          The page you're looking for doesn’t exist or might have been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full transition duration-300 ease-in-out"
        >
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
