import { ChevronsDown, MouseIcon } from "lucide-react";
import BackroundImage from "../../assets/hero_section_background.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackroundImage})`,
      }}
      className="relative w-full min-h-dvh flex flex-col justify-center items-center bg-right"
    >
      <div className="absolute z-20">
        <h2 className="font-extrabold text-center leading-16 text-white/40 ">
          <p className="text-[3.2rem]">'End'가 아닌 'And'</p>
          <p className="text-[3.2rem]">Front'And' 를 꿈꾸는 사람</p>
          <p className="text-[2.8rem] pt-3">잘 부탁드립니다</p>
        </h2>
      </div>
      <div className="absolute bottom-6 flex justify-center z-30 text-white/40 animate-[scrollGuideMove_1s_linear_infinite]">
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
