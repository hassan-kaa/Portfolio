import LaunchIcon from '@mui/icons-material/Launch';
import GithubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import React from "react";
import Image from 'next/image';
import projectImage from "../../../public/Kaaprompts.png"
type AppProps = {
  position: string;
};

function ProjectCard({ position }: AppProps) {
  return (
    <div
      id="projects"
      className={`my-4 flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-3 shadow-md ring-2 ring-slate-300 ring-opacity-50 lg:w-3/4  ${
        position == "right" ? "xl:flex-row-reverse" : "xl:flex-row"
      }  xl:p-8 `}
    >
      <div className=" aspect-3/2 relative w-full overflow-hidden rounded-xl xl:w-1/2  ">
        <Image
          
          src={projectImage}
          className=" hover:duration-5000 absolute object-cover transition duration-1000 ease-in-out hover:translate-y-[-40%] hover:scale-110"
          alt="project photo"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 xl:w-1/2">
        <h1 className=" text-center text-xl font-bold">
          KaaPrompts (August 2023) 🚀
        </h1>
        <p className="max-w-sm text-center text-lg">
          A fullstack Next.js 13 CRUD application of an open source AI prompting
          tool for modern world that helps to discover , create and share
          creative prompts .<br />
          User can login or create a new account, can create , explore , save
          and share prompts.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="max-w-12 bg-white p-2 shadow-sm shadow-slate-400">
            Nextjs
          </div>
          <div className="max-w-12 bg-white p-2 shadow-sm shadow-slate-400">
            TailwindCSS
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link
            href={"https://github.com/hassan-kaa/KaaaPrompts"}
            className="flex items-center gap-2 p-2 hover:text-blue-600"
          >
            Code
            <GithubIcon/>
          </Link>
          <Link
            href={"https://kaa-prompts.vercel.app/"}
            className="flex items-center gap-2 p-2 hover:text-blue-600"
          >
            Live demo
            <LaunchIcon/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
