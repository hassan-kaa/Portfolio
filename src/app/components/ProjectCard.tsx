import { faNewspaper, faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProjectCard() {
  return (
    <div
      id="projects"
      className="my-4 flex w-2/3 flex-col items-center justify-center gap-4 rounded-2xl bg-white p-3 shadow-md shadow-slate-500  lg:justify-between xl:flex-row  xl:p-8 "
    >
      <div className=" aspect-3/2 overflow-hidden rounded-xl">
        <img src="/photo.png" className="object-cover" alt="project photo" />
      </div>
      <div className="flex h-full flex-col items-center justify-end gap-4 ">
        <h1 className=" text-center text-xl font-bold">
          Project Name (Date 2023) 🚀
        </h1>
        <p className="max-w-sm text-center text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          dolores placeat saepe, officiis veritatis voluptas, asperiores eaque
          quo ullam consequuntur, pariatur id voluptatibus ab voluptatem ut
          minus quasi illo repudiandae!
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="max-w-12 bg-white p-2 shadow-sm shadow-slate-400">
            React
          </div>
          <div className="max-w-12 bg-white p-2 shadow-sm shadow-slate-400">
            Technology
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            Code
            <FontAwesomeIcon height={16} width={16} icon={faSadCry} />
          </div>
          <div className="flex items-center gap-1">
            Live demo
            <FontAwesomeIcon height={16} width={16} icon={faNewspaper} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
