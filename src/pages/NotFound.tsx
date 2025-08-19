import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">Page not found</p>
        <p className="mt-6 text-sm text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Go to landing page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
