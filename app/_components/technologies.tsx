import { ReactNode } from 'react';
import { JavaScriptIcon, NextJsIcon, PostgreesIcon, PrismaIcon, ReactIcon, TailwindIcon, TypeScriptIcon, DockerIcon } from '../icons/technologies-icons';

interface ProjectTechnologiesProps {
  technologies: string[];
}

const technologyIcons: { [key: string]: ReactNode } = {
  'React': <ReactIcon height={20} width={20} />,
  'JavaScript': <JavaScriptIcon height={20} width={20} />,
  'TypeScript': <TypeScriptIcon height={20} width={20} />,
  'Next.js': <NextJsIcon height={20} width={20} />,
  'Tailwind': <TailwindIcon height={20} width={20} />,
  'Prisma': <PrismaIcon height={20} width={20} />,
  'PostgreeSQL': <PostgreesIcon height={20} width={20} />,
  'Docker': <DockerIcon height={25} width={25} />,
};

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="flex">
      {technologies.map((tech) => (
        <div key={tech} className="flex items-center">
          {technologyIcons[tech] || <span>{tech}</span>}
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;