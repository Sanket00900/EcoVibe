import React from "react";
import HorizontalCard from "../components/HorizontalCard";
import Navbar from "../components/Navbar";

function Policies({ data }) {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-blue-300 text-center m-8">Policies</h1>
      <div className="mx-auto w-300 m-4">
        {data.policies.map((data) => (
          <HorizontalCard
            key={data.title}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            newsUrl={data.newsUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Policies;
