import React from "react";
import { useParams } from "react-router-dom";

const SourceDetailsPage = ({ sourcesData }) => {
  const { source } = useParams();

  const { title, image, description } = sourcesData[source] || {};

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default SourceDetailsPage;
