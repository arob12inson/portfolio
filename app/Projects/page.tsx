import React from "react";
import ProjectCard from "../(components)/ProjectCard";

const Projects = () => {
  return (
    <div className="p-6 lg:grid grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center items-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Projects;
