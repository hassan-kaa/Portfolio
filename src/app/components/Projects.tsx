import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="lg:px-custom flex w-full flex-col items-center gap-8 px-20  py-10">
      <ProjectCard position={"right"} />
      <ProjectCard position={"left"} />
    </div>
  );
}

export default Projects;
