import { ChevronsDown, MouseIcon } from "lucide-react";
import BackroundImage from "../../assets/hero_section_background.png";
import { useEffect, useRef, useState } from "react";

const Hero = ({ ref }: any) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = textRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${BackroundImage})`,
      }}
      className="relative w-full min-h-dvh flex flex-col justify-center items-center bg-right"
      ref={ref}
    >
      <div className="absolute z-20">
        <h2
          ref={textRef}
          className={`font-extrabold text-center leading-16 text-white transition-opacity duration-1800 ${isVisible ? "opacity-40" : "opacity-0"}`}
        >
          <p className="text-[3.2rem]">'End'가 아닌 'And'</p>
          <p className="text-[3.2rem]">Front'And' 를 꿈꾸는 사람</p>
          <p className="text-[2.8rem] pt-3">잘 부탁드립니다</p>
        </h2>
      </div>
      <div className="absolute bottom-6 flex justify-center z-30 text-white/40 animate-[scrollGuideMove_1s_linear_infinite]">
        {/* 마우스 스크롤 아이콘 애니메이션 처리 */}
        <div className="flex flex-col justify-center items-center">
          <MouseIcon className="opacity-70" />
          <ChevronsDown className="opacity-70" />
        </div>
        {/* <i className="opacity-70 text-sm">Scorll Down</i> */}
      </div>
      <div className="absolute w-full h-full bg-black/80 z-10" />
    </section>
  );
};

export default Hero;
