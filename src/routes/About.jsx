import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Get back to growth with{" "}
        <span className="text-blue-600 dark:text-blue-500">the world's #1</span>{" "}
        CRM.
      </h1>
    </>
  );
};

export default About;
