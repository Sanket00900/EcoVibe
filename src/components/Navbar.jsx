import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 z-[1100] w-full backdrop-filter bg-opacity-70  border-gray-200 backdrop-blur font-poppins text-xl text-gray-light flex flex-row justify-center space-x-16 p-5 bg-black ">
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/guide`}>Guide</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/locations`}>Locations</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/tools`}>Tools</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/news`}>News</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/policies`}>Policies</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/feedback`}>Feedback</Link>
        </div>
        <div className="transform transition duration-200 hover:scale-105">
          <Link to={`/about`}>About Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
