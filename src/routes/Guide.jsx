// import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const Guide = ({ data }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  });

  return (
    <>
      <div className="bg-bg">
        <Navbar />
        <CSSTransition
          in={showAnimation}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex flex-wrap m-5 p-2 gap-x-8 gap-y-8 justify-center">
            {data.renewableEnergySources.map((source) => (
              <Card
                title={source.title}
                description={source.description}
                imageUrl={source.imageUrl}
                key={source.title}
              />
            ))}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Guide;
