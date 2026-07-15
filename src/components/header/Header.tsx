import { useEffect, useState } from "react";

export const MENU_BAR = ["About Me", "Skills", "Projects", "Contacts"] as const;

const HEADER_HEIGHT = 80;

const Header = () => {
  const [isFixedHeaderVisible, setIsFixedHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixedHeaderVisible(window.scrollY >= HEADER_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 처음 화면에 보이는 일반 헤더 */}
      <header className="w-full h-20 flex flex-col justify-center bg-main-gray">
        <div className="flex items-center justify-between px-5">
          <h1 className="text-title-gray font-extralight text-3xl">
            SangCheol
          </h1>
          <div>
            <ul className="flex gap-x-4 text-title-gray">
              {MENU_BAR.map((menu, idx) => (
                <li key={idx}>
                  <button className="px-2 py-1 box-border cursor-pointer border-b border-transparent hover:border-highlight-color transition-colors duration-200">
                    {menu}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <header
        className={`fixed left-0 top-0 z-50 h-20 flex flex-col justify-center w-full border-b bg-main-gray backdrop-opacity-60 transition-transform duration-500 ease-in-out ${isFixedHeaderVisible ? "translate-y-0" : "-translate-y-full"}
`}
      >
        <div className="flex items-center justify-between px-5">
          <h1 className="text-title-gray font-extralight text-3xl">
            SangCheol
          </h1>
          <div>
            <ul className="flex gap-x-4 text-title-gray">
              {MENU_BAR.map((menu, idx) => (
                <li key={idx}>
                  <button className="px-2 py-1 box-border cursor-pointer border-b border-transparent hover:border-highlight-color transition-colors duration-200">
                    {menu}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
