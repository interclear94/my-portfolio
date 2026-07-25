import { useRef, type RefObject } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export type SectionRef = RefObject<HTMLElement | null>;

export interface SectionRefs {
  homeRef: SectionRef;
  aboutMeRef: SectionRef;
  skillsRef: SectionRef;
  projectsRef: SectionRef;
}

export type ScrollToSection = (ref: SectionRef) => void;

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    aboutMeRef,
    skillsRef,
    projectsRef,
    homeRef,
  };

  const scrollToSection: ScrollToSection = (ref) => {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-main-gray w-full relative">
      <Header sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <Main sectionRefs={sectionRefs} />
      <Footer />
    </div>
  );
}

export default App;
