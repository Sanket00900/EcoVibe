// import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <h1 className="text-green text-3xl text-center font-poppins">
          EcoVibe
        </h1>

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Better Data
          </span>{" "}
          Scalable AI.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
    </>
  );
};

export default Home;
