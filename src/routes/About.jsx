import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const About = ({ data }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap m-5 p-2 gap-x-8 gap-y-8 justify-center">
        {data.about.map((about) => (
          <Card
            title={about.title}
            description={about.description}
            imageUrl={about.imageUrl}
          />
        ))}
      </div>
      <p className="text-3xl text-center text-pink">
        Made with &#9829; by Sanket
      </p>
    </>
  );
};

export default About;
