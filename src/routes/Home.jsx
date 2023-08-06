import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  });
  return (
    <>
      <div className="text-center bg-[url(./assets/bg/hero-bg.jpg)] bg-cover bg-no-repeat min-h-screen">
        <Navbar />
        <CSSTransition
          in={showAnimation}
          timeout={500}
          classNames="zoom-in"
          unmountOnExit
        >
          <div>
            <h1 className="text-green mt-16 mb-8 text-8xl font-bold">
              ECOVIBE
            </h1>
            <h1 className="text-transparent text-5xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 uppercase text-underline">
              Navigating the Path to Sustainable & Clean Energy
            </h1>{" "}
            <br />
            <button
              type="button"
              className="text-white bg-gradient-to-br from-forestgreen to-blue-400 m-4 p-8 uppercase font-semibold hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-lime rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <a href="/guide">Enter into the portal</a>
            </button>
          </div>
        </CSSTransition>
      </div>

      <CSSTransition
        in={showAnimation}
        timeout={500}
        classNames="slide-in"
        unmountOnExit
      >
        <Carousel />
      </CSSTransition>
    </>
  );
};

export default Home;
