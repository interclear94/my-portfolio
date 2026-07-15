import HTML_LOGO from "../../assets/html_icon.png";
import CSS_LOGO from "../../assets/css_icon.png";
import JS_LOGO from "../../assets/js_icon.png";
import TS_LOGO from "../../assets/ts_icon.png";

interface Skills {
  sub: string;
  desc: string[];
  imgSrc?: string;
}

const CORE_OBJ: Skills[] = [
  {
    sub: "HTML5",
    desc: ["시맨틱 마크업 구성"],
    imgSrc: HTML_LOGO,
  },
  {
    sub: "CSS",
    desc: [
      "Flexbox와 Grid 기반 레이아웃",
      "반응형 웹 구현 가능",
      "박스 모델과 Position 이해",
    ],
    imgSrc: CSS_LOGO,
  },
  {
    sub: "JavaScript",
    desc: [
      "ES6 문법 활용",
      "비동기 처리와 Promise 이해",
      "배열·객체 데이터 가공",
      "모듈 기반 코드",
    ],
    imgSrc: JS_LOGO,
  },
  {
    sub: "TypeScript",
    desc: [
      "인터페이스와 타입 별칭 활용",
      "타입 가드를 활용 안전한 데이터 처리",
    ],
    imgSrc: TS_LOGO,
  },
];

const Skills = () => {
  return (
    <section className="w-full bg-main-gray flex flex-col justify-center items-center py-10 gap-10">
      <h2 className="flex justify-center text-title-gray text-3xl font-medium py-5">
        My&nbsp;<span className="text-highlight-color">Skills</span>
      </h2>
      <div className="flex justify-center sm:w-[95%]">
        <ul className="grid grid-rows-2 grid-cols-3 gap-x-5">
          {CORE_OBJ.map((skill, idx) => (
            <li key={idx} className="flex flex-col">
              <h3 className="text-gray-400 font-medium tracking-wider text-center text-xl pb-4">
                {skill.sub}
              </h3>
              <div className="max-w-[280px] aspect-square object-cover bg-gray-100 flex justify-center items-center overflow-hidden rounded-bl-3xl rounded-tr-3xl">
                <img
                  className="w-[90%]"
                  src={skill.imgSrc}
                  alt={`${skill.sub} logo 이미지`}
                />
              </div>
              <ul className="w-full pt-3 text-gray-300 text-md font-medium">
                {skill.desc.map((d, idx) => (
                  <li key={`${idx + 1}`}>- {d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
