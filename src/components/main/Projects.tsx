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

  url: string;
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

    url: "https://dolbomi-project-client.vercel.app/",
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
        href: "https://dolbomi-project-client-sepia.vercel.app/home",
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
    url: "https://interclear94.github.io/memory_game/",
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
      className="w-full bg-main-gray flex flex-col justify-center items-center py-10 sm:py-20 px-10"
      ref={ref}
    >
      <div className="w-full">
        <div className="relative w-max h-max py-5">
          <h2 className="relative text-gray-100 text-5xl font-bold tracking-wider px-4 z-10 sm:text-6xl">
            Projects
          </h2>
          <div className="absolute -right-2 bottom-2 bg-yellow-300 w-[65%] h-[0.35rem] sm:h-[0.7rem] sm:bottom-0 z-0" />
        </div>
      </div>
      <div className="w-full pt-10 sm:pt-15">
        <ul className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <li
              key={project.id}
              className="
          grid
          grid-cols-1
          items-start
          gap-7
          rounded-xl
          bg-[#3b3b3b]
          px-5
          py-6

          md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
          md:gap-10
          md:px-8
          md:py-8

          xl:gap-12
          xl:px-10
          xl:py-10
        "
            >
              {/* 프로젝트 썸네일 이미지 */}
              <div className="relative min-w-0 overflow-hidden rounded-2xl">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="block h-auto w-full object-contain"
                />

                {/* Dimmed */}
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
              </div>

              {/* 프로젝트 설명 */}
              <article className="min-w-0 text-gray-100">
                <h3
                  className="
              wrap-break-word
              text-3xl
              font-bold
              tracking-wider

              sm:text-4xl
              md:text-5xl
              xl:text-6xl
            "
                >
                  {project.title}
                </h3>

                <p
                  className="
              mt-4
              text-base
              font-normal
              tracking-normal
              text-gray-400

              md:text-lg
              xl:text-[1.5rem]
            "
                >
                  {project.period}
                </p>

                <p
                  className="
              mt-3
              break-keep
              text-base
              font-medium
              leading-7
              text-gray-100

              md:text-lg
              xl:text-xl
            "
                >
                  {project.description}
                </p>

                {/* 기능 */}
                <div className="mt-6">
                  <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                    기능
                  </h4>

                  <ul className="space-y-1 text-base font-medium md:text-[1.1rem]">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="break-keep leading-7 tracking-wide"
                      >
                        - {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 핵심 구현 */}
                <div className="mt-6">
                  <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                    핵심 구현
                  </h4>

                  <ul className="space-y-1 text-base font-medium md:text-[1.1rem]">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="break-keep leading-7 tracking-wide"
                      >
                        - {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 기술 스택 */}
                <div className="mt-6">
                  <h4 className="mb-2 text-lg font-semibold md:text-xl">
                    기술 스택
                  </h4>

                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.skills.map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>

                {/* 배포 주소 */}
                <div className="mt-8">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} 배포 페이지 열기`}
                    className="
                inline-flex
                items-center
                justify-center
                rounded-md
                bg-yellow-300
                px-5
                py-3
                text-base
                font-semibold
                text-gray-900
                transition-colors
                duration-200

                hover:bg-yellow-200
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-300
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#3b3b3b]
              "
                  >
                    배포 페이지 보기
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
