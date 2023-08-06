import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ToolsData from "../data.json";
import Card from "../components/Card";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const Tools = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  });

  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <h1 className="text-3xl m-1 text-center text-blue-300">Tools </h1>
        <CSSTransition
          in={showAnimation}
          timeout={500}
          classNames="zoom-in"
          unmountOnExit
        >
          <div className="flex flex-row m-1 p-8 gap-x-8 gap-y-8 justify-center">
            {ToolsData.tools.map((tool) => (
              <Card
                title={tool.title}
                description={tool.description}
                imageUrl={tool.imageUrl}
                key={tool.title}
                componentType={tool.componentType}
              />
            ))}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Tools;
