"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  DockerIcon,
  GitHubIcon,
  GitIcon,
  NextJsIcon,
  NodeJsIcon,
  PrismaIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../icons/technologies-icons";

const stackIcons = [
  { label: "React", Icon: ReactIcon },
  { label: "Next.js", Icon: NextJsIcon },
  { label: "TypeScript", Icon: TypeScriptIcon },
  { label: "Node.js", Icon: NodeJsIcon },
  { label: "Prisma", Icon: PrismaIcon },
  { label: "Tailwind", Icon: TailwindIcon },
  { label: "Docker", Icon: DockerIcon },
  { label: "Git", Icon: GitIcon },
  { label: "GitHub", Icon: GitHubIcon },
];

const AboutPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const iconInView = useInView(iconRef, { amount: 0.7, once: false });
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const [nextIconIndex, setNextIconIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    if (!iconInView) {
      return;
    }

    const interval = window.setInterval(() => {
      const upcomingIndex = (activeIconIndex + 1) % stackIcons.length;

      setNextIconIndex(upcomingIndex);
      setIsTransitioning(true);

      window.setTimeout(() => {
        setActiveIconIndex(upcomingIndex);
        setIsTransitioning(false);
      }, 240);
    }, 2200);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeIconIndex, iconInView]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative isolate flex w-full overflow-hidden px-4 py-24 scroll-mt-24 sm:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-1 left-0 z-10 h-[10rem] w-full bg-gradient-to-t from-transparent to-background" />
      <motion.div
        aria-hidden
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          style={{ y: contentY }}
          className="relative max-w-2xl"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 backdrop-blur">
            Sobre mim
          </span>

          <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Um desenvolvedor que mistura técnica, curiosidade e produto.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Olá! Eu sou o Marcos, desenvolvedor há cerca de 2 anos. Gosto
            bastante do que faço, adoro experimentar tecnologias novas e sempre
            busco entregar a melhor experiência possível para quem vai usar o
            projeto. Além disso, estou concluindo o curso de Análise e
            Desenvolvimento de Sistemas. Foi nessa trajetória que aprofundei
            bastante os fundamentos de programação, estruturas de dados,
            algoritmos e vários outros conceitos importantes.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Durante esse período, participei de vários projetos — tanto os da
            faculdade quanto alguns pessoais — e isso me ajudou muito a colocar
            a mão na massa e evoluir na prática. Hoje tenho experiencia em
            várias stacks e adiquiri skills importantes no desenvolvimento de
            software.
          </p>
        </motion.div>

        <motion.div
          style={{ y: contentY }}
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/20 sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Foco atual
            </p>
            <p className="mt-4 text-xl font-semibold text-white">
              Construir experiências web rápidas, bonitas e consistentes.
            </p>
          </div>

          <div
            ref={iconRef}
            className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Stack
            </p>

            <div className="mt-5 flex min-h-[120px] items-center justify-center">
              <div className="relative flex min-h-[120px] w-full items-center justify-center">
                <motion.div
                  key={`current-${stackIcons[activeIconIndex].label}`}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  initial={false}
                  animate={
                    isTransitioning
                      ? { opacity: 0, y: -8, scale: 0.98 }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                >
                  {(() => {
                    const ActiveIcon = stackIcons[activeIconIndex].Icon;

                    return <ActiveIcon height={54} width={54} />;
                  })()}

                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                    {stackIcons[activeIconIndex].label}
                  </p>
                </motion.div>

                <motion.div
                  key={`next-${stackIcons[nextIconIndex].label}`}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={
                    isTransitioning
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 8, scale: 0.98 }
                  }
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                >
                  {(() => {
                    const NextIcon = stackIcons[nextIconIndex].Icon;

                    return <NextIcon height={54} width={54} />;
                  })()}

                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                    {stackIcons[nextIconIndex].label}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Interesse
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Aprendizado de Máquina, Dev. Full-Stack e Dev. Mobile.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-xl sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
              Trajetória
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Conhecimento; Prática, Evolução.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
