import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="lg:px-custom flex w-full flex-col items-center gap-8 px-20  py-10">
      <h2 className=" text-start font-2xl font-bold  uppercase text-blue-500">PORTFOLIO
</h2>
      <h1 className="text-start text-2xl font-bold">
Each project is a unique piece of development 🧩</h1>
      <ProjectCard position={"right"} />
      <ProjectCard position={"left"} />
    </div>
  );
}

export default Projects;
