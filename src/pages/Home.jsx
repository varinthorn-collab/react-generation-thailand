import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateHomeUser = () => {
    navigate("/home-user");
  };
  const handleNavigateHomeAdmin = () => {
    navigate("/home-admin");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Generation Thailand Home</h1>


      <button
        onClick={handleNavigateHomeUser}
        className="px-4 py-2 mx-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
      >
        User Home Section
      </button>

      <button
        onClick={handleNavigateHomeAdmin}
        className="px-4 py-2 mx-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
      >
        Admin Home Section
      </button>



      {/* <br />
      <br />
      <Link
        to="/contact"
        className="text-teal-600 underline hover:text-teal-800"
      >
        Go to Contact
      </Link> */}
    </div>
  );
};

export default Home;
