import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ArrowUpRight, EyeIcon, GithubIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import ProjectTechnologies from "./technologies";
import { type Project } from "../_actions/projects";

export interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <CardContainer
      className="group w-full h-full"
      containerClassName="w-full h-full py-0"
    >
      <CardBody className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <CardItem translateZ={60} className="relative block overflow-hidden">
          <Image
            src={
              project.images[0] ||
              "https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
            }
            alt={`${project.name} Thumbnail`}
            width={800}
            height={520}
            quality={100}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-4 top-4">
            <Badge
              className={
                project.status === "Completed"
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-gray-200"
              }
            >
              {project.status}
            </Badge>
          </div>
        </CardItem>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <CardItem
            translateZ={40}
            className="flex items-start justify-between gap-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                {project.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white group-hover:underline">
                {project.name}
              </h2>
            </div>
            <ArrowUpRight className="mt-1 text-white/40" size={18} />
          </CardItem>

          <CardItem translateZ={30} className="flex-1">
            <Link href={`/projects/${project.slug}`} className="block">
              <p className="line-clamp-3 text-sm leading-7 text-gray-300">
                {project.description}
              </p>
            </Link>
          </CardItem>

          <CardItem translateZ={20}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology, index) => (
                <ProjectTechnologies key={index} technologies={[technology]} />
              ))}
              {project.technologies.length > 4 && (
                <Badge className="border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </CardItem>

          <CardItem translateZ={10} className="mt-1 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-300 transition-colors hover:text-white"
              >
                <GithubIcon width={16} height={16} />
                <span>GitHub</span>
              </a>
            )}
            {project.project && (
              <a
                href={project.project}
                className="flex items-center gap-2 text-xs text-gray-300 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EyeIcon width={16} height={16} />
                <span>Live Demo</span>
              </a>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
