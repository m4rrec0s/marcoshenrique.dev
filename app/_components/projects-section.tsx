"use client";

import ProjectItem from "./project-item";
import Title from "./title";
import { getProjects } from "../_data";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = getProjects();

  return (
    <section id="projects" className="py-20 w-full">
      <div className="w-full flex justify-center mb-20">
        <Title
          span="Resultados do mundo real"
          title="Projetos em destaque"
          paragraph="Aqui estão alguns dos projetos que realizei ao longo do meu aprendizado, evoluindo a cada novo desafio."
        />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
