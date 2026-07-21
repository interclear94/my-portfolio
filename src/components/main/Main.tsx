import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Outro from "./Outro";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <main className="w-full">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Outro />
    </main>
  );
};

export default Main;
