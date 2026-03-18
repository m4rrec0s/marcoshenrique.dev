"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectItem from "./project-item";
import Title from "./title";
import { getProjects, type Project } from "../_actions/projects";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    let mounted = true;

    async function loadProjects() {
      setLoading(true);
      const response = await getProjects();

      if (mounted && response.success && response.data) {
        setProjects(response.data);
      }

      if (mounted) {
        setLoading(false);
      }
    }

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="relative isolate w-full overflow-hidden px-4 py-24 sm:px-8 lg:py-32"
    >
      <motion.div
        aria-hidden
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[-10rem] top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14">
        <motion.div
          style={{ y: contentY }}
          className="flex w-full justify-center"
        >
          <Title
            span="Resultados do mundo real"
            title="Projetos em destaque"
            paragraph="Aqui estão alguns dos projetos que realizei ao longo do meu aprendizado, evoluindo a cada novo desafio."
          />
        </motion.div>

        {loading && (
          <p className="text-center text-sm text-gray-400">
            Carregando projetos...
          </p>
        )}

        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="h-full"
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
