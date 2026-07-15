import { ChevronsDown, MouseIcon } from "lucide-react";
import BackroundImage from "../../assets/hero_background.avif";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackroundImage})`,
      }}
      className="w-full min-h-dvh flex flex-col justify-center items-center bg-center"
    >
      <div>
        <h2 className="font-extrabold text-4xl text-center leading-13">
          <p>Front'And'를 꿈꾸는 사람</p>
          <p>박상철 입니다.</p>
          <p>잘 부탁드립니다.</p>
        </h2>
      </div>
      <div className="absolute bottom-6 flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <MouseIcon className="opacity-70" />
          <ChevronsDown className="opacity-70" />
        </div>
        {/* <i className="opacity-70 text-sm">Scorll Down</i> */}
      </div>
    </section>
  );
};

export default Hero;
