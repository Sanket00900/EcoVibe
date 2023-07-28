// import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import renewableEnergySourcesData from "../data.json";

const Guide = () => {
  return (
    <>
      <div className="bg-bg">
        <Navbar />

        <div className="flex flex-wrap m-5 p-2 gap-x-8 gap-y-8 justify-center">
          {renewableEnergySourcesData.renewableEnergySources.map((source) => (
            <Card
              title={source.title}
              description={source.description}
              imageUrl={source.imageUrl}
              key={source.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Guide;
