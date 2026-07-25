import type { SectionRefs } from "../../App";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Outro from "./Outro";
import Projects from "./Projects";
import Skills from "./Skills";

interface MainProps {
  sectionRefs: SectionRefs;
}

const Main = ({ sectionRefs }: MainProps) => {
  const { homeRef, aboutMeRef, skillsRef, projectsRef } = sectionRefs;
  return (
    <main className="w-full">
      <Hero ref={homeRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Outro />
    </main>
  );
};

export default Main;
