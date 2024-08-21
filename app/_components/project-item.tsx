import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { EyeIcon, GithubIcon } from "lucide-react";

import ProjectTechnologies from "./technologies";

type ProjectStatus = "In Progress" | "Completed";
type ProjectTechnologies = React.ReactNode[];

export interface ProjectItemProps {
  props: {
    name: string;
    category: string;
    description: string;
    images: string[];
    status: ProjectStatus;
    tecnologies: string[];
    github: string;
    project: string;
  };
}

export default function ProjectItem({ props }: ProjectItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:max-w-[90%]">
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {props.images.map((image, index) => (
          <Image
            key={index}
            src={
              image ||
              "https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
            }
            alt="Project Thumbnail"
            width={250}
            height={250}
            quality={100}
            className={`w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg aspect-square ${index > 0 ? 'max-sm:hidden' : ''
              }`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-white">{props.name}</h2>
            <div className="flex gap-2">
              <span className="text-gray-400">{props.category}</span>
            </div>
          </div>
        </div>
        <div className="prose max-w-none">
          <p className="opacity-70">{props.description}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Project Status</h3>
          {props.status === "Completed" ? (
            <Badge className="w-fit bg-green-900 text-green-300 hover:bg-green-800">
              Completed
            </Badge>
          ) : (
            <Badge className="w-fit bg-yellow-800 text-yellow-300 hover:bg-yellow-700">
              In Progress
            </Badge>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Used Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {props.tecnologies.map((tecnology, index) => (
              <ProjectTechnologies key={index} technologies={[tecnology]} />
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 border border-white p-3 rounded-md hover:bg-white hover:text-black transition-colors"
          >
            <GithubIcon width={20} height={20} />
            <p className="text-sm font-extralight">GitHub</p>
          </Link>
          {props.project != "" && (
            <Link
              href={props.project}
              className="flex gap-1 border border-white p-3 rounded-md hover:bg-white hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon width={20} height={20} />
              <p className="text-sm font-extralight">View Project</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
