import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { CSSTransition } from "react-transition-group";
import "../styles/AnimationStyles.css";

const Details = ({ data }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  });

  //to access the id of the energy source that was clicked on
  const { id } = useParams();

  //to access the data of the energy source that was clicked on
  const energySourceData = data.energySourcesDetails.find(
    (source) => source.title.toLowerCase() === id.split("-").join(" ")
  );

  if (!energySourceData) {
    return <h1>404 : Source Not Found</h1>;
  }

  const { title, imageUrl, description, sections } = energySourceData;

  return (
    <div className="bg-bg">
      <Navbar />
      <CSSTransition
        in={showAnimation}
        timeout={300}
        classNames="zoom-in"
        unmountOnExit
      >
        <div className="bg-card-bg">
          <div className="max-w-5xl mx-auto py-8 px-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white mb-4">
                {title}
              </h1>
              <img
                width={500}
                src={imageUrl}
                alt="Image"
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
            </div>
            <div className="bg-bg rounded-lg shadow-md p-6 m-2">
              <p className="text-gray-600 mb-4 text-gray-light">
                {description}
              </p>
            </div>
            <div className="bg-bg rounded-lg shadow-md p-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-card-bg rounded-lg shadow-md m-2 p-6"
                >
                  <h2 className=" text-2xl text-gray-600 mb-4 text-gray-light">
                    {section.title}
                  </h2>
                  <p className="text-gray-light">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Details;
