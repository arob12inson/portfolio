import React from "react";
import ProjectCard from "../(components)/ProjectCard";

const Projects = () => {
  return (
    <div className="p-6 flex flex-wrap w-full h-auto justify-center items-start">
      <ProjectCard
        title="AI From Scratch"
        description="A neural network that recognizes handwritten images"
      />
      <ProjectCard title="Portfolio Site!" description="hehe" />
      <ProjectCard title="Portfolio Site 2!" description="hehe" />
      <ProjectCard title="Portfolio Site 3!" description="hehe" />
    </div>
  );
};

export default Projects;
