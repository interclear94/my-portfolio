import type { ReactNode } from "react";
import Dolbomi from "../../assets/projects/doblomi_main.png";
import Poketmon from "../../assets/projects/poketmon_portfolio.png";
import HtmlIcon from "../../assets/skills/html_icon.png";
import CssIcon from "../../assets/skills/css_icon.png";
import JavaScriptIcon from "../../assets/skills/js_icon.png";
import TypeScriptIcon from "../../assets/skills/ts_icon.png";
import ReactIcon from "../../assets/skills/react_logo.png";
import NodeIcon from "../../assets/skills/nodejs_logo.png";
import MongoDBIcon from "../../assets/skills/mongodb_logo.png";
import ExpressIcon from "../../assets/skills/express_logo.png";

export interface ProjectSkill {
  name: string;
  icon: ReactNode;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };

  period: string;
  type: string;
  skills: ProjectSkill[];
  features: string[];
  highlights: string[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    id: "dolbomi",
    title: "DOLBOMI",
    description:
      "돌봄이 필요한 사용자와 돌봄을 제공할 사용자를 지역과 일정 기준으로 연결하는 풀스택 프로젝트입니다.",

    image: {
      src: Dolbomi,
      alt: "돌보미 메인 화면",
    },

    period: "2026.01 ~ 2026.07",
    type: "개인 풀스택 프로젝트",

    skills: [
      {
        name: "React",
        icon: <img className="h-full" src={ReactIcon} alt="React 아이콘" />,
      },
      {
        name: "TypeScript",
        icon: (
          <img
            className="h-full"
            src={TypeScriptIcon}
            alt="TypeScript 아이콘"
          />
        ),
      },
      {
        name: "Node.js",
        icon: <img className="h-full" src={NodeIcon} alt="NodeJS 아이콘" />,
      },
      {
        name: "Express",
        icon: <img className="h-full" src={ExpressIcon} alt="Express 아이콘" />,
      },
      {
        name: "MongoDB",
        icon: <img className="h-full" src={MongoDBIcon} alt="MongoDB 아이콘" />,
      },
    ],

    features: [
      "JWT 기반 회원가입 및 로그인",
      "게시글 작성·조회·수정·삭제",
      "프로필 및 게시글 이미지 업로드",
    ],

    highlights: [
      "Access Token 재발급과 인증 요청 재실행 흐름 구현",
      "Zustand와 TanStack Query의 역할을 분리해 상태 관리",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/interclear94/dolbomi-project",
      },
      {
        label: "Demo",
        href: "https://interclear94.vercel.app",
      },
    ],
  },

  {
    id: "pokemon-card-game",
    title: "카드 뒤집기 게임",
    description:
      "같은 포켓몬 카드를 찾아 짝을 맞추는 게임으로, 라이브러리 없이 HTML, CSS, JavaScript만으로 구현했습니다.",

    image: {
      src: Poketmon,
      alt: "포켓몬 카드 뒤집기 게임 화면",
    },

    period: "2025.4.1 ~ 4.8 (1주)",
    type: "개인 프로젝트",

    skills: [
      { name: "HTML", icon: <img src={HtmlIcon} alt="" /> },
      { name: "CSS", icon: <img src={CssIcon} alt="" /> },
      { name: "JavaScript", icon: <img src={JavaScriptIcon} alt="" /> },
    ],

    features: [
      "카드 무작위 배치",
      "두 카드의 이미지 비교",
      "모든 카드 매칭 시 게임 종료",
    ],

    highlights: [
      "카드의 뒤집힘과 매칭 상태를 객체로 관리",
      "카드 비교 중 추가 클릭을 제한해 상태 오류 방지",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/사용자명/pokemon-card-game",
      },
      {
        label: "Demo",
        href: "https://배포주소.vercel.app",
      },
    ],
  },
];

const Projects = ({ ref }: any) => {
  return (
    <section
      className="w-full bg-main-gray flex flex-col justify-center items-center py-20 px-10"
      ref={ref}
    >
      <div className="w-full">
        <div className="relative w-max h-max py-5">
          <h2 className="relative text-gray-100 text-6xl font-bold tracking-wider px-4 z-10">
            Projects
          </h2>
          <div className="absolute -right-2 bottom-0 bg-yellow-300 w-[65%] h-[0.7rem] z-0" />
        </div>
      </div>
      <div className="grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] w-full pt-15">
        <ul>
          {PROJECTS.map((project, _idx) => (
            /**
             * 프로젝트 리스트
             */
            <li
              key={project.title}
              className="max-xl bg-[#3b3b3b] rounded-xl px-10 pt-10 mb-6 flex gap-12"
            >
              {/* 프로젝트 썸네일 이미지 */}
              <div className="relative w-[60%] h-max rounded-2xl overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="object-cover z-30"
                />

                {/* Dimmed */}
                <div className="w-full h-full absolute left-0 top-0 bg-black/30" />
              </div>

              {/* 프로젝트 설명 */}
              <div className="text-gray-100">
                <h3 className="text-6xl font-bold tracking-wider pb-5">
                  {project.title}
                </h3>
                <p className="text-[1.5rem] font-normal tracking-normal text-gray-400 pb-2">
                  {project.period}
                </p>
                <div className="pb-6">
                  <p className="w-[70%] text-xl font-medium  text-gray-100">
                    {project.description}
                  </p>
                </div>
                <div className="pb-5">
                  <div className="pb-4">
                    <h4 className="text-2xl font-semibold mb-2">기능</h4>
                    <ul className="text-[1.1rem] font-medium">
                      {project.features.map((feat, _idx) => (
                        <li key={feat} className="pb-1 tracking-wide">
                          - {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">핵심구현</h4>
                    <ul className="text-[1.1rem] font-medium">
                      {project.highlights.map((high, _idx) => (
                        <li key={high} className="pb-1 tracking-wide">
                          - {high}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">기술 스택</h4>
                  <ul className="flex flex-wrap gap-x-5">
                    {project.skills.map((skill, _idx) => (
                      <li key={skill.name} className="">
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
