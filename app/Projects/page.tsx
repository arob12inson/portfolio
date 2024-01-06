import React from "react";
import ProjectCard from "../(components)/ProjectCard";

const Projects = () => {
  return (
    <div className="p-6 flex flex-wrap w-full h-full justify-items-start ">
      <ProjectCard title="AI From Scratch" />

      <ProjectCard title="Portfolio Site!" />
      <ProjectCard title="Portfolio Site!" />
    </div>
  );
};

export default Projects;
