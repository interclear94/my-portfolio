import Dolbomi from "../../assets/projects/doblomi_main.png";
import Poketmon from "../../assets/projects/poketmon_portfolio.png";
import Html from "../../assets/skills/html_icon.png";
import Css from "../../assets/skills/css_icon.png";
import JavaScript from "../../assets/skills/js_icon.png";

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

  subtitle: string;

  description: string;

  thumbnail: {
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

const Projects = () => {
  return (
    <section className="w-full bg-main-gray flex flex-col justify-center items-center py-20 px-5">
      <div className="w-full">
        <div className="relative w-max h-max py-5">
          <h2 className="relative text-gray-100 text-6xl font-bold tracking-wider px-4 z-10">
            Projects
          </h2>
          <div className="absolute -right-2 bottom-0 bg-yellow-300 w-[65%] h-[0.7rem] z-0" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Projects;
