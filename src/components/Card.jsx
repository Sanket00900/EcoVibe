import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl, componentType }) => {
  return (
    <>
      <div className="max-w-sm bg-card-bg border p-4 border-gray rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform  transition duration-500 hover:scale-105 hover:bg-bg">
        <div href="#">
          <img className="rounded-t-lg" src={imageUrl} alt="" />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-light">
            {description}
          </p>
          <div
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-700 dark:bg-blue-700 dark:hover:bg-blue-400  duration-300"
          >
            {componentType == "Tools" ? (
              <Link to={`/tools/${title.split(" ").join("-").toLowerCase()}`}>
                Learn More
              </Link>
            ) : (
              <Link to={`/guide/${title.split(" ").join("-").toLowerCase()}`}>
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  componentType: PropTypes.string,
};

export default Card;
