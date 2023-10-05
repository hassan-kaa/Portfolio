import Image from "next/image";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="m-0 flex flex-col items-center justify-center gap-0 p-0">
      <Navbar />
      <Hero />
      <ProjectCard />
      <Footer />
    </div>
  );
}
