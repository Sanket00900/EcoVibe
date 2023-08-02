import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
const Details = ({ data }) => {
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
      <div className="bg-card-bg">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white mb-4">{title}</h1>
            <img
              width={500}
              src={imageUrl}
              alt="Image"
              className="rounded-lg shadow-lg mx-auto mb-6"
            />
          </div>
          <div className="bg-bg rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4 text-gray-light">{description}</p>
          </div>
          {sections.map((section) => (
            <div className="bg-blue rounded-lg shadow-md p-6">
              <h4 className="bg-blue text-gray-600 mb-4 text-gray-light">
                {section.title}
              </h4>
              <p className="text-gray-light">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
