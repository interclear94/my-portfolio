import Html from "../../assets/skills/html_icon.png";
import Css from "../../assets/skills/css_icon.png";
import JS from "../../assets/skills/js_icon.png";
import TS from "../../assets/skills/ts_icon.png";
import React from "../../assets/skills/react_logo.png";
import NodeJs from "../../assets/skills/nodejs_logo.png";
import Express from "../../assets/skills/express_logo.png";
import MongoDB from "../../assets/skills/mongodb_logo.png";

interface SkillType {
  logo: string;
  sub: string;
  desc: string[];
}

const SKILLS: SkillType[] = [
  {
    logo: Html,
    sub: "HTML",
    desc: [
      "시맨틱 태그를 활용한 페이지 구조 설계",
      "폼 요소와 웹 접근성을 고려한 마크업 작성",
    ],
  },
  {
    logo: Css,
    sub: "CSS",
    desc: [
      "Flexbox와 Grid를 활용한 레이아웃 구성",
      "반응형 웹과 모바일 우선 화면 구현",
      "Transition과 Animation을 활용한 인터랙션 구현",
    ],
  },
  {
    logo: JS,
    sub: "JavaScript",
    desc: [
      "배열, 객체, 함수 기반의 데이터 처리",
      "비동기 요청과 예외 처리",
      "DOM 이벤트와 상태 변화에 따른 UI 구현",
    ],
  },
  {
    logo: TS,
    sub: "TypeScript",
    desc: [
      "인터페이스와 타입 별칭을 활용한 데이터 모델링",
      "Union, Omit 등 유틸리티 타입 활용",
      "클라이언트와 서버 데이터 타입 정의",
    ],
  },
  {
    logo: React,
    sub: "React",
    desc: [
      "컴포넌트 단위의 UI 설계 및 재사용",
      "React Hook을 활용한 상태와 생명주기 관리",
      "React Router를 활용한 페이지 라우팅",
      "React Hook Form과 Zod를 활용한 폼 검증",
      "TanStack Query를 활용한 서버 상태 관리",
      "Zustand를 활용한 인증 상태 관리",
    ],
  },
  {
    logo: NodeJs,
    sub: "Node.js",
    desc: [
      "Node.js 기반의 REST API 서버 구현",
      "비동기 로직과 에러 처리 구조 작성",
      "환경 변수를 활용한 실행 환경 분리",
    ],
  },
  {
    logo: Express,
    sub: "Express",
    desc: [
      "라우터, 컨트롤러, 서비스 계층 분리",
      "JWT 기반 로그인 및 인증 미들웨어 구현",
      "Multer와 Cloudinary를 활용한 이미지 업로드",
      "공통 에러 처리 미들웨어 구현",
    ],
  },
  {
    logo: MongoDB,
    sub: "MongoDB",
    desc: [
      "Mongoose를 활용한 스키마와 모델 설계",
      "회원, 게시글, 지역 데이터 저장 및 조회",
      "페이지네이션과 조건별 데이터 조회 구현",
      "MongoDB Atlas를 활용한 데이터베이스 배포",
    ],
  },
];

const Skills = ({ ref }: any) => {
  return (
    <section
      className="w-full bg-gray-800 flex flex-col justify-center items-center py-20 px-10"
      ref={ref}
    >
      <div className="w-full pb-10">
        <div className="relative w-max h-max pb-5">
          <h2 className="relative text-gray-100 text-6xl font-bold tracking-wider px-4 z-10">
            Skills
          </h2>
          <div className="absolute -right-2 bottom-0 bg-yellow-300 w-[65%] h-[0.7rem] z-0" />
        </div>
      </div>
      <div className="">
        <ul className="grid grid-cols-3 grid-rows-2 gap-10">
          {SKILLS.map((skill) => (
            <li
              className="flex flex-col items-center px-3 pb-3 border border-white rounded-2xl bg-white bg"
              key={skill.sub}
            >
              <div className="w-[80%] flex justify-center items-center aspect-square border my-5">
                <img
                  className="w-[90%]"
                  src={skill.logo}
                  alt={`${skill.sub} logo`}
                />
              </div>
              <h3 className="text-[1rem] tracking-wider font-extrabold pb-3">
                {skill.sub}
              </h3>

              <ul className="text-[0.95rem] tracking-normal">
                {skill.desc.map((desc) => (
                  <li key={desc}>- {desc}</li>
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
