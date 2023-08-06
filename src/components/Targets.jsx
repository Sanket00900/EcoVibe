import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import data from "../dat.json";

const Targets = ({ data }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h1 className="text-center text-3xl m-4 text-blue-300">Targets</h1>

      <div className="flex flex-row m-4">
        <Accordion open={open === 1}>
          <AccordionHeader className="text-3xl" onClick={() => handleOpen(1)}>
            GOAL
          </AccordionHeader>
          <AccordionBody>
            Ensure access to affordable, reliable, sustainable and modern energy
            for all
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader className="text-3xl" onClick={() => handleOpen(2)}>
            TARGET
          </AccordionHeader>
          <AccordionBody>
            To be the go-to platform for individuals, businesses, and
            policymakers seeking comprehensive and user-friendly information and
            solutions in the renewable energy sector. Our target audience
            includes environmentally conscious individuals, renewable energy
            enthusiasts, industry professionals, clean energy companies, and
            policymakers.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader className="text-3xl" onClick={() => handleOpen(3)}>
            MISSION
          </AccordionHeader>
          <AccordionBody>
            Our mission is to accelerate the global transition to clean,
            renewable energy by providing a user-friendly and all-encompassing
            platform. We aim to empower users with knowledge, insights, and
            resources to make informed decisions, embrace sustainable practices,
            and actively contribute to achieving UN Sustainable Development Goal
            7 - Affordable and Clean Energy.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
          <AccordionHeader className="text-3xl" onClick={() => handleOpen(4)}>
            VISION
          </AccordionHeader>
          <AccordionBody>
            Our vision is to create a world where clean, renewable energy is
            readily accessible, adopted widely, and plays a significant role in
            powering a sustainable future. We envision a global community
            empowered with the knowledge and tools to harness renewable energy
            sources efficiently, reducing reliance on fossil fuels, and making
            positive contributions to the environment and society at large.
            Through our platform, we aspire to be a catalyst for transformative
            change, inspiring a greener and more harmonious world for
            generations to come.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

export default Targets;
