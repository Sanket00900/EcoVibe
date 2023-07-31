import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl, componentType, route }) => {
  return (
    <>
      <div className="max-w-sm bg-card-bg border border-gray rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform  transition duration-500 hover:scale-105 hover:bg-bg">
        <a href="#">
          <img className="rounded-t-lg" src={imageUrl} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-light">
            {description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-700 dark:bg-blue-700 dark:hover:bg-blue-400 dark:focus:ring-blue-300 duration-300"
          >
            {componentType == "Tools" ? (
              <Link to={`/tools/${route}`}>Calculate </Link>
            ) : (
              <Link to={`/guide/${route}`}>Read More</Link>
            )}
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
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
