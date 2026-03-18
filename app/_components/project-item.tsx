import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ArrowUpRight, EyeIcon, GithubIcon } from "lucide-react";

import ProjectTechnologies from "./technologies";
import { Project } from "../_data";

export interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group">
      <div className="relative overflow-hidden aspect-video">
        <Link href={`/projects/${project.slug}`} className="block">
          <Image
            src={
              project.images[0] ||
              "https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
            }
            alt={`${project.name} Thumbnail`}
            width={600}
            height={400}
            quality={90}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <Badge
            className={
              project.status === "Completed"
                ? "bg-green-600 text-white"
                : "bg-yellow-600 text-white"
            }
          >
            {project.status}
          </Badge>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{project.category}</p>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:underline">
                {project.name}
              </h2>
            </div>
            <ArrowUpRight className="text-gray-400 dark:text-gray-500" size={16} />
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {project.description}
          </p>
        </Link>

        <div>
          <h3 className="text-xs font-semibold mb-2 text-gray-600 dark:text-gray-400">
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology, index) => (
              <ProjectTechnologies key={index} technologies={[technology]} />
            ))}
            {project.technologies.length > 4 && (
              <Badge className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <GithubIcon width={16} height={16} />
              <span>GitHub</span>
            </a>
          )}
          {project.project && (
            <a
              href={project.project}
              className="flex gap-1 items-center text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon width={16} height={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
