'use client';

import ProjectItem from './project-item';
import Title from './title';
import { getProjects } from '../_data';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
