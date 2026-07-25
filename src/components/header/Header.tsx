import { useEffect, useRef, useState } from "react";
import type { ScrollToSection, SectionRefs } from "../../App";
import logo from "../../assets/profile/sc_logo.png";

interface HeaderProps {
  sectionRefs: SectionRefs;
  scrollToSection: ScrollToSection;
}

const Header = ({ sectionRefs, scrollToSection }: HeaderProps) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerOpacity, setHeaderOpacity] = useState<boolean>(false);

  const { homeRef, aboutMeRef, skillsRef, projectsRef } = sectionRefs;

  useEffect(() => {
    const scrollInit = () => {
      if (!headerRef.current) return;

      const headerHeight = headerRef.current?.clientHeight;

      if (window.pageXOffset > headerHeight) {
        setHeaderOpacity(true);
      } else {
        setHeaderOpacity(false);
      }
    };

    const handleScroll = () => {
      if (!headerRef.current) return;

      const headerHeight = headerRef.current?.clientHeight;

      if (window.scrollY > headerHeight) {
        setHeaderOpacity(true);
      } else {
        setHeaderOpacity(false);
      }
    };

    scrollInit();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`{ w-dvw fixed left-0 top-0 z-50 transition-all duration-400 ${headerOpacity ? "bg-main-gray" : "bg-black/0"}`}
      ref={headerRef}
    >
      <div className="w-full h-max flex justify-between items-center px-4 py-1">
        <h1 className="w-20 aspect-square flex items-center justify-center">
          <img className="w-[95%]" src={logo} alt="My Portfolio logo" />
        </h1>
        <nav className="mr-5">
          <ul className="flex gap-x-6 text-gray-300 text-xl font-bold tracking-wider">
            <li>
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => scrollToSection(homeRef)}
              >
                Home
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => scrollToSection(aboutMeRef)}
              >
                About Me
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>

            <li>
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => scrollToSection(skillsRef)}
              >
                Skills
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>

            <li>
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
