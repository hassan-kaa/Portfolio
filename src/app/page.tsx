import Image from "next/image";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="p-0 m-0 flex flex-col justify-center items-center gap-8">
      <Hero />
      <ProjectCard />
    </div>
  );
}
