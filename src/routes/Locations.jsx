import Navbar from "../components/Navbar";
import Map from "../components/Map";

const Locations = () => {
  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <h1 className="text-3xl text-center text-blue-300 m-4">
          Explore Power Stations Near You !!
        </h1>
        <Map />
      </div>
    </>
  );
};

export default Locations;
