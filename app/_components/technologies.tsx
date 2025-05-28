import { ReactNode } from "react";
import {
  JavaScriptIcon,
  NextJsIcon,
  PostgreesIcon,
  PrismaIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  DockerIcon,
  NodeJsIcon,
  ExpressIcon,
  AxiosIcon,
} from "../icons/technologies-icons";

interface ProjectTechnologiesProps {
  technologies: string[];
}

const technologyIcons: { [key: string]: ReactNode } = {
  React: <ReactIcon height={20} width={20} />,
  JavaScript: <JavaScriptIcon height={20} width={20} />,
  TypeScript: <TypeScriptIcon height={20} width={20} />,
  "Next.js": <NextJsIcon height={20} width={20} />,
  Tailwind: <TailwindIcon height={20} width={20} />,
  Prisma: <PrismaIcon height={20} width={20} />,
  PostgreeSQL: <PostgreesIcon height={20} width={20} />,
  Docker: <DockerIcon height={25} width={25} />,
  NodeJs: <NodeJsIcon height={20} width={20} />,
  Express: <ExpressIcon height={20} width={20} />,
  Axios: <AxiosIcon height={20} width={20} />,
};

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="flex items-center bg-gray-800/70 px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <span className="mr-2">{technologyIcons[tech]}</span>
          <span className="text-sm font-medium text-gray-200">{tech}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
