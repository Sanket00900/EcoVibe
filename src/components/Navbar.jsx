import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`guide`}>Guide</Link>
            </li>
            <li>
              <Link to={`locations`}>Locations</Link>
            </li>
            <li>
              <Link to={`/news`}>News</Link>
            </li>
            <li>
              <Link to={`/about`}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
