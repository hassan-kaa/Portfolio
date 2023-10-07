
import Hero from "./components/Hero";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="m-0 flex flex-col items-center justify-center gap-8 p-0">
      
      <Hero />
      <About />
      <Projects />
      <Contact/>
      

    </div>
  );
}
