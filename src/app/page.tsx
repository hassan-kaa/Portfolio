import Image from "next/image";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="m-0 flex flex-col items-center justify-center gap-8 p-0">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer />

    </div>
  );
}
