import Navbar from "../components/Navbar";
import ToolsData from "../data.json";
import Card from "../components/Card";

const Tools = () => {
  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <h1>Tools </h1>
        <div className="flex flex-row m-5 p-2 gap-x-8 gap-y-8 justify-center">
          {ToolsData.tools.map((tool) => (
            <Card
              title={tool.title}
              description={tool.description}
              imageUrl={tool.imageUrl}
              key={tool.title}
              componentType={tool.componentType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;
