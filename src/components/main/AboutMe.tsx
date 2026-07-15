import profile from "../../assets/my_profile_character.webp";

const AboutMe = () => {
  return (
    <section className="w-full bg-main-gray flex flex-col justify-center items-center py-10">
      <div className="max-w-[1024px] flex flex-col justify-center px-5">
        <h2 className="text-title-gray text-3xl font-medium py-5">
          About&nbsp;<span className="text-highlight-color">Me</span>
        </h2>
        <div className="w-full flex gap-x-7">
          <div className="max-w-[35%] aspect-square rounded-3xl overflow-hidden">
            <img src={profile} alt="프로필 이미지" />
          </div>
          <div className="text-aboutMe-text">
            <h3 className="text-2xl font-semibold tracking-widest">
              Front'And'를 꿈꾸는 사람
            </h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
