import { useEffect, useRef, useState } from "react";
import aboutMeImage from "../../assets/my_profile_character.webp";
import { Cake, GraduationCap, MailIcon, MapPinned, User } from "lucide-react";

const AboutMe = ({ ref }: any) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = targetRef.current;

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;

      const viewportHeight = window.innerHeight;

      // 두 번째 section의 절반이 화면에 들어온 시점
      if (sectionTop <= viewportHeight / 2) {
        setIsVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full" ref={ref}>
      <div
        className={`{ w-full flex flex-col justify-center items-center py-30 transition-opacity duration-1200 ease-out ${isVisible ? "opacity-100" : "opacity-0"} `}
        ref={targetRef}
      >
        <div className="w-[95%] md:w-[80%] flex gap-x-10 flex-col justify-center items-center md:flex-row md:gap-x-20">
          {/* about Me 이미지 영역 */}
          <div className="w-[65%] md:w-[50%] aspect-square relative">
            <div className="absolute z-20 group w-full overflow-hidden rounded-full">
              <img
                src={aboutMeImage}
                alt="About Me 프로필 이미지"
                className="rounded-full border-2"
              />
              <div className="absolute inset-0 text-3xl font-extrabold flex flex-col items-center justify-center bg-black/60 text-center text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                1994.08.22
                <br />
                박상철
              </div>
            </div>
            <div className="w-full h-full bg-yellow-500 scale-105 rounded-full" />
          </div>

          {/* title 영역 */}
          <div className="w-full pb-1 pt-10">
            <div className="relative w-max h-max pb-5 mb-8">
              <h2 className="relative text-gray-100 text-5xl font-bold tracking-wider px-4 z-10 sm:text-6xl">
                About Me
              </h2>
              <div className="absolute -right-2 bottom-2 bg-yellow-300 w-[65%] h-[0.35rem] sm:h-[0.7rem] sm:bottom-0 z-0" />
            </div>
            <div className="text-[1.2rem] text-white bg-gray-700 py-6 sm:px-8 sm:py-7 rounded-xl">
              <ul className="grid gap-y-4 pl-6 sm:grid-rows-3 sm:grid-cols-2 sm:text-[0.95rem] sm:font-semibold">
                <li className="flex gap-x-6">
                  <User className="size-10 stroke-2" />
                  <div className="flex flex-col">
                    <span>이름</span>
                    <span>박상철</span>
                  </div>
                </li>
                <li className="flex gap-x-6">
                  <Cake className="size-10 stroke-2" />
                  <div className="flex flex-col">
                    <span>생년월일</span>
                    <span>1994.08.22</span>
                  </div>
                </li>
                <li className="flex gap-x-6">
                  <MapPinned className="size-10 stroke-2" />
                  <div className="flex flex-col">
                    <span>사는 곳</span>
                    <span>서울시 은평구</span>
                  </div>
                </li>
                <li className="flex gap-x-6">
                  <GraduationCap className="size-10 stroke-2" />
                  <div className="flex flex-col">
                    <span>학력</span>
                    <span>
                      동양미래대학교
                      <br />
                      (반도체 전자과)
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-6">
                  <MailIcon className="size-10 stroke-2" />
                  <div className="flex flex-col">
                    <span>이메일</span>
                    <span>jakapark94@naver.com</span>
                  </div>
                </li>
              </ul>
              <ul className="border-gray-500 flex border-t-2 mt-4 pt-4">
                <li className="w-1/2 flex gap-x-2 justify-center">
                  <a
                    className="flex justify-center items-center gap-x-4 text-[#cdcdcd] group hover:text-highlight-color transition-colors duration-200"
                    href="https://github.com/interclear94"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="2.5rem"
                      height="2.5rem"
                      className="fill-[#cecece] group-hover:fill-highlight-color duration-200"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                    {/* <span className="sm:hidden">
                      https://github.com/interclear94
                    </span> */}
                  </a>
                </li>
                <li className="w-1/2 flex gap-x-2 justify-center">
                  <a
                    className="flex justify-center items-center gap-x-4 text-[#cdcdcd] group hover:text-highlight-color transition-colors duration-200"
                    href="https://jakapark.tistory.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="2.5rem"
                      height="2.5rem"
                      className="fill-[#cdcdcd]  group-hover:fill-highlight-color duration-200"
                    >
                      <path d="M 9 4 C 6.239 4 4 6.239 4 9 L 4 41 C 4 43.761 6.239 46 9 46 L 41 46 C 43.761 46 46 43.761 46 41 L 46 9 C 46 6.239 43.761 4 41 4 L 9 4 z M 20 12 L 25 12 C 29.42 12 33.033 15.632547 33 20.060547 C 32.991 21.141547 33.919 22 35 22 L 36 22 C 37.105 22 38 22.895 38 24 L 38 30 C 38 34.4 34.4 38 30 38 L 20 38 C 15.6 38 12 34.4 12 30 L 12 25 L 12 20 C 12 15.6 15.6 12 20 12 z M 20 18 C 18.9 18 18 18.9 18 20 C 18 21.1 18.9 22 20 22 L 25 22 C 26.1 22 27 21.1 27 20 C 27 18.9 26.1 18 25 18 L 20 18 z M 20 28 C 18.9 28 18 28.9 18 30 C 18 31.1 18.9 32 20 32 L 30 32 C 31.1 32 32 31.1 32 30 C 32 28.9 31.1 28 30 28 L 20 28 z" />
                    </svg>
                    {/* <span className="sm:hidden">
                      https://jakapark.tistory.com/
                    </span> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <div className="left-0 top-0 w-full min-h-dvh bg-black z-20" /> */}
    </section>
  );
};

export default AboutMe;
