import React from "react";
import ProjectCard from "../(components)/ProjectCard";

const Projects = () => {
  return (
    <div className="p-6 flex flex-wrap w-full h-auto justify-center items-start">
      <ProjectCard
        title="AI From Scratch"
        description="A neural network that recognizes handwritten images"
        link="ai-from-scratch"
      />
      <ProjectCard title="Portfolio Site!" description="hehe" link="" />
      <ProjectCard title="Portfolio Site 2!" description="hehe" link="" />
      <ProjectCard title="Portfolio Site 3!" description="hehe" link="" />
    </div>
  );
};

export default Projects;
