import aboutMeImage from "../../assets/my_profile_character.webp";

const AboutMe = () => {
  return (
    <section className="w-full">
      <div className="w-[90%] z-30 flex justify-center gap-x-6">
        {/* about Me 이미지 영역 */}
        <div className="w-[35%]">
          <img src={aboutMeImage} alt="About Me 이미지" />
        </div>

        {/* title 영역 */}
        <div className="text-white">
          <h2>
            About <span>Me</span>
          </h2>
          <div>
            <p>이름: 박자카</p>
            <p>텍스트 1줄 영역</p>
            <p>텍스트 1줄 영역</p>
            <p>텍스트 1줄 영역</p>
            <p>텍스트 1줄 영역</p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full min-h-dvh bg-black z-20" />
    </section>
  );
};

export default AboutMe;
