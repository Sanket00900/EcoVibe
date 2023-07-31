import PropTypes from "prop-types";

const HorizontalCard = ({ title, newsUrl, description, imageUrl }) => {
  return (
    <>
      <div className=" transform  transition duration-500 hover:scale-105 hover:bg-bg">
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col p-5 m-4 h-80 bg-card-bg border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={imageUrl}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-light dark:text-gray-400">
              {description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

HorizontalCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string,
};

export default HorizontalCard;
