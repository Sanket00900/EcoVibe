import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const Locations = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  });

  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <h1 className="text-3xl text-center text-blue-300 m-4">
          Explore Power Stations Near You !!
        </h1>
        <CSSTransition
          in={showAnimation}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Map />
        </CSSTransition>
      </div>
    </>
  );
};

export default Locations;
