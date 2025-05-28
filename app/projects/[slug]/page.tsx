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
    <section className="container mx-auto py-10 px-4 md:px-6">
      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 mb-8 transition-colors duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para projetos
        </Link>
      </div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project?.name || "Projeto"}
            </h1>
            <p className="text-gray-400 text-lg">{project?.category || ""}</p>
          </div>
          <Badge
            className={
              project?.status === "Completed"
                ? "bg-green-900/70 text-green-300 hover:bg-green-800 mt-2 md:mt-0"
                : "bg-yellow-800/70 text-yellow-300 hover:bg-yellow-700 mt-2 md:mt-0"
            }
          >
            {project?.status || "Em Progresso"}
          </Badge>
        </div>

        {/* Grid de imagens */}
        {project?.images && project.images.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Primeira imagem maior (principal) */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <Image
                src={project.images[0]}
                alt={`${project.name} - Imagem principal`}
                width={1200}
                height={800}
                quality={90}
                className="w-full h-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Imagens secundárias em grid */}
            {project.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg"
              >
                <Image
                  src={image}
                  alt={`${project.name} - Imagem ${index + 2}`}
                  width={600}
                  height={600}
                  quality={80}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-xl mb-8">
            <Image
              src="https://utfs.io/f/8b675edc-f21a-4e20-a69b-48fbd5f93195-9pcde4.png"
              alt={`${project?.name || "Projeto"} - Imagem padrão`}
              width={1200}
              height={800}
              quality={90}
              className="w-full h-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Conteúdo do projeto */}
        <motion.div
          className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">Descrição</h2>
            <p className="text-gray-300 leading-relaxed">
              {project?.description || "Descrição do projeto não disponível."}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Tecnologias
            </h2>
            <div className="flex flex-wrap gap-3">
              <ProjectTechnologies technologies={project?.technologies || []} />
            </div>
          </div>{" "}
          <div className="flex flex-col sm:flex-row gap-4">
            {project?.project && (
              <Link
                href={project.project}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600/80 hover:bg-blue-500/80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                <EyeIcon className="h-5 w-5" />
                Ver Projeto
              </Link>
            )}
            {project?.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                <GithubIcon className="h-5 w-5" />
                Ver no GitHub
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectPage;
