import { useEffect, useRef, useState } from "react";
import type { ScrollToSection, SectionRefs } from "../../App";
import logo from "../../assets/profile/sc_logo.png";

interface HeaderProps {
  sectionRefs: SectionRefs;
  scrollToSection: ScrollToSection;
}

const Header = ({ sectionRefs, scrollToSection }: HeaderProps) => {
  const headerRef = useRef<HTMLElement | null>(null);
  // 스크롤 시 헤더의 색상 적용 (투명도) 상태
  const [headerOpacity, setHeaderOpacity] = useState<boolean>(false);
  // 모바일 메뉴 열림/닫힘 상태
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
      className={`{ w-full fixed left-0 top-0 z-50 transition-all duration-400 ${headerOpacity ? "bg-main-gray" : "bg-black/0"}`}
      ref={headerRef}
    >
      <div className="w-full h-max flex justify-between items-center px-4 py-1">
        <h1 className="w-20 aspect-square flex items-center justify-center">
          <img className="w-[95%]" src={logo} alt="My Portfolio logo" />
        </h1>

        {/* 모바일 메뉴버튼 */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer relative w-8 h-8 rounded-sm border-2 bg-black md:hidden"
        >
          <span
            className={`absolute left-1/2 w-[60%] h-0.5 bg-gray-500 transition-all duration-200 ${
              openMenu
                ? "top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                : "top-2 -translate-x-1/2"
            }`}
          />

          <span
            className={`absolute left-1/2 w-[60%] h-0.5 bg-gray-500 transition-all duration-200 ${
              openMenu
                ? "top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                : "bottom-2 -translate-x-1/2"
            }`}
          />
        </button>
        {/* 데스크탑 */}
        <nav className="mr-5 hidden md:block">
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

      {/* 모바일 메뉴 */}
      <div
        className={`{ absolute left-0 top-0 w-screen h-screen ${openMenu ? "block" : "hidden"} }`}
      >
        <nav className="w-[90%] absolute z-30 top-10 left-1/2 -translate-x-1/2 bg-gray-900 rounded-xl py-10">
          <ul className="flex flex-col gap-y-10 text-gray-300 text-xl font-bold tracking-wider">
            <li className="flex justify-center">
              <button
                className="cursor-pointer w-max h-max relative group my-1.5"
                type="button"
                onClick={() => {
                  scrollToSection(homeRef);
                  setOpenMenu(false);
                }}
              >
                Home
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>
            <li className="flex justify-center">
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => {
                  scrollToSection(aboutMeRef);
                  setOpenMenu(false);
                }}
              >
                About Me
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>

            <li className="flex justify-center">
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => {
                  scrollToSection(skillsRef);
                  setOpenMenu(false);
                }}
              >
                Skills
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>

            <li className="flex justify-center">
              <button
                className="cursor-pointer w-max h-max relative group"
                type="button"
                onClick={() => {
                  scrollToSection(projectsRef);
                  setOpenMenu(false);
                }}
              >
                Projects
                <div className="w-full h-1 bg-highlight-color absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            </li>
          </ul>
        </nav>
        <div
          className="absolute left-0 top-0 w-full h-full bg-black/50"
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </header>
  );
};

export default Header;
