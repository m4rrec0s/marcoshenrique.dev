"use client";

import { getProjectBySlug, getProjects } from "@/app/_data";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, EyeIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";
import ProjectTechnologies from "@/app/_components/technologies";
import { motion } from "framer-motion";

type Props = {
  params: {
    slug: string;
  };
};

const ProjectPage = ({ params }: Props) => {
  const project = getProjectBySlug(params.slug);

  return (
    <section className="container mx-auto py-10">
      <div>
        <Link
          href="/projects"
          className="flex items-center text-gray-400 hover:text-gray-200 mb-6"
        >
          <ArrowLeft className="mr-2" />
          Voltar para projetos
        </Link>
      </div>

      <div>
        <motion.div
          className="bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project?.images && project.images.length > 1 ? (
            <div className="relative overflow-hidden aspect-video">
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.name} Thumbnail ${index + 1}`}
                  width={600}
                  height={400}
                  quality={90}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                    index === 0 ? "block" : "hidden"
                  }`}
                />
              ))}
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
          ) : (
            <div className="relative overflow-hidden aspect-video">
              <Image
                src="https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
                alt={`${project?.name} Thumbnail`}
                width={600}
                height={400}
                quality={90}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          )}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-2">Project Name</h1>
            <p className="text-gray-400 mb-4">Project description goes here.</p>
            <ProjectTechnologies technologies={project?.technologies || []} />
            <div className="mt-4 flex gap-4">
              <Link
                href={`/projects/${project?.project}`}
                className="flex items-center text-blue-500 hover:text-blue-400"
              >
                <EyeIcon className="mr-2" />
                Ver Projeto
              </Link>
              <Link
                href={`/projects/${project?.github}`}
                className="flex items-center text-gray-400 hover:text-gray-200"
              >
                <GithubIcon className="mr-2" />
                Ver no GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
