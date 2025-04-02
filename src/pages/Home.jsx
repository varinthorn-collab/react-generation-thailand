import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Generation Thailand Home</h1>

      
      <button
        onClick={handleNavigate}
        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
      >
        Go to About
      </button>
      <br />
      <br />
      <Link
        to="/contact"
        className="text-teal-600 underline hover:text-teal-800"
      >
        Go to Contact
      </Link>
    </div>
  );
};

export default Home;
