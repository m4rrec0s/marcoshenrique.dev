import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ArrowUpRight, EyeIcon, GithubIcon } from "lucide-react";
import { motion } from "framer-motion";

import ProjectTechnologies from "./technologies";
import { Project } from "../_data";

export interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      className="bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
      whileHover={{
        y: -8,
        boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.2)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={
              project.images[0] ||
              "https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
            }
            alt={`${project.name} Thumbnail`}
            width={600}
            height={400}
            quality={90}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge
              className={
                project.status === "Completed"
                  ? "bg-green-900/70 text-green-300 hover:bg-green-800"
                  : "bg-yellow-800/70 text-yellow-300 hover:bg-yellow-700"
              }
            >
              {project.status}
            </Badge>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400 mb-1">{project.category}</p>
              <h2
                className="text-xl font-bold text-white group-hover:text-primary transition-colors"
                translate="no"
              >
                {project.name}
              </h2>
            </div>
            <motion.div
              className="bg-white/10 p-2 rounded-full"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="text-white" size={16} />
            </motion.div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-300 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-2 text-gray-400">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology, index) => (
                <ProjectTechnologies key={index} technologies={[technology]} />
              ))}
              {project.technologies.length > 4 && (
                <Badge className="bg-white/10 text-gray-300 hover:bg-white/20">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center text-xs text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon width={16} height={16} />
                <span>GitHub</span>
              </Link>
            )}
            {project.project && (
              <Link
                href={project.project}
                className="flex gap-1 items-center text-xs text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <EyeIcon width={16} height={16} />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
