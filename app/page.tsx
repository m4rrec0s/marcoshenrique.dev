"use client";

import Image from "next/image";
import Header from "./_components/header";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import ProjectItem, { ProjectItemProps } from "./_components/project-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Separator } from "./_components/ui/separator";
import Title from "./_components/title";
import TechnologiesList from "./_components/technologies-list";
import ContactForm from "./_components/contact-form";

const projects: ProjectItemProps[] = [
  {
    props: {
      name: "MH food",
      category: "Food Delivery Application",
      description:
        "The project is a web application for a food delivery service, developed using the Next.js framework.",
      images: [
        "https://utfs.io/f/93d839e0-1605-4683-b726-f8ac3c2c2c4f-z8uvbx.png",
        "https://utfs.io/f/961f4e66-a786-46db-a04f-9b02985dfb98-zb7k90.png",
        "https://utfs.io/f/16fab9bd-c6dc-4900-ae5b-cdb592dffe39-yu5xut.png",
        "https://utfs.io/f/87c866da-d460-4cba-ae42-c50fc9307179-yd4bgm.png",
      ],
      status: "Completed",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
        "Docker",
      ],
      github: "https://github.com/m4rrec0s/mh-food",
      project: "https://mh-food.vercel.app/",
    },
  },
  {
    props: {
      name: "TaskList",
      category: "Training web application",
      description:
        "The project is a web application developed with Next.js, which is an exercise and workout manager. It includes features for user authentication, exercise search, viewing exercise and workout details, and integration with the Prisma database.",
      images: [
        "https://utfs.io/f/25330adf-d6f9-42b6-bac8-eaae4d1215f7-1ri2lq.png",
        "https://utfs.io/f/d44082a6-67d0-45c0-8952-77cd6922a5cd-1ri2lr.png",
        "https://utfs.io/f/e69b67b2-fbd6-487a-a57a-9f0f414e8fbf-1ri2ls.png",
        "https://utfs.io/f/8ff323e1-58f4-4fe3-808a-1d61e637b82f-1ri2lt.png",
      ],
      status: "In Progress",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
      ],
      github: "https://github.com/m4rrec0s/tasklist-app",
      project: "https://tasklist-app-eight.vercel.app/",
    },
  },
  {
    props: {
      name: "TrackEquip",
      category: "Equipment Tracking Application",
      description:
        "The project is a web application for tracking equipment. It includes equipment search, viewing equipment details and status of the equipment.",
      images: [
        "https://utfs.io/f/BhegMacQdV7xNcxa3uiz7tOwskcNBrnaZFPo8AL0fDgSvGpx",
        "https://utfs.io/f/BhegMacQdV7xKZRQVwI6lV3f4Om0EpTCUB1gb5GdviQNrWuI",
        "https://utfs.io/f/BhegMacQdV7xBtt7dgcQdV7xfrowZajygGJIS9ilU238kNcH",
        "https://utfs.io/f/BhegMacQdV7xXprFsF67MsQUymfzwLBAFi46cetaKRITGxho",
      ],
      status: "Completed",
      technologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
      ],
      github: "https://github.com/m4rrec0s/TrackEquip",
      project: "https://track-equip.vercel.app/",
    },
  },
];

const names = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Python",
  "Django",
  "Nuxt",
  "Vue",
  "Angular",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Styled Components",
  "Material UI",
  "Git",
  "GitHub",
  "REST API",
  "Jest",
  "Testing Library",
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <div className="fixed top-5 z-50 max-md:top-0">
        <Header />
      </div>

      <div className="z-10 w-full">
        <section id="home" className="h-[100vh] pt-[180px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full flex-col px-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              exit={{ opacity: 0, y: -50 }}
              className="w-full flex justify-center mb-6"
            >
              <Image
                src="https://utfs.io/f/dac21f19-0421-440b-b20a-5550364fd045-hvsas7.png"
                alt="Marcos Henrique"
                className="border border-primary rounded-full p-1"
                width={120}
                height={120}
              />
            </motion.div>

            <div className="flex flex-col items-center w-full">
              <div className="text-center">
                <h1 className="text-4xl font-semibold">
                  Hello, Im{" "}
                  <strong className="text-primary">Marcos Henrique</strong>
                </h1>
                <p className="text-xl font-semibold">
                  <strong className="text-primary font-normal">Web</strong>{" "}
                  Developer
                </p>
                <p className="opacity-60 text-lg max-w-[600px] mt-3">
                  Developer of modern and efficient web applications using
                  technologies such as Next.js and Node.js.
                </p>

                <div className="w-full flex justify-center mt-6 items-center z-10 gap-5 max-sm:gap-3">
                  <Link
                    target="_blank"
                    href={
                      "https://drive.google.com/file/d/17gyYLCQsvaZUceGxuFR-IkMgQ8ajlz6j/view?usp=drive_link"
                    }
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium backdrop-blur-3xl hover:bg-slate-950">
                      Download CV
                    </span>
                  </Link>

                  <Link
                    href="https://github.com/m4rrec0s"
                    target="_blank"
                    className="hover:text-primary hover:border-primary border border-white rounded-full p-2"
                  >
                    <Github size={18} />
                  </Link>
                  <Link
                    className="hover:text-primary hover:border-primary border border-white rounded-full p-2"
                    href="https://www.instagram.com/marcos_henrique_eu/"
                  >
                    <Instagram size={18} />
                  </Link>
                  <Link
                    className="hover:text-primary hover:border-primary border border-white rounded-full p-2"
                    href="https://www.linkedin.com/in/marcos-henrique-ara%C3%BAjo-7a641a242/"
                  >
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-6 mb-28">
          <div className="w-full flex justify-center mb-20">
            <Title
              span="Resultados do mundo real"
              title="Pejetos em destaque"
              paragraph="Aqui estão alguns dos projetos que realizei ao longo do meu aprendizado, evoluindo a cada novo desafio."
            />
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="flex mt-6 max-md:hidden mx-auto w-[80%] max-md:w-[80%]">
              <Carousel
                className="w-full relative"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent className="relative flex items-center">
                  {projects.map((project, index) => (
                    <CarouselItem
                      key={index}
                      className="w-full flex justify-center md:px-6"
                    >
                      <ProjectItem props={project.props} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0" />
                <CarouselNext className="absolute right-0" />
              </Carousel>
            </div>
            <div className="max-md:grid grid-cols-1 gap-20 px-10 hidden mt-6 mb-6">
              {projects.map((project, index) => (
                <ProjectItem key={index} props={project.props} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="w-full flex justify-center">
            <Title
              span="Lista de tecnologias"
              title="Habilidades"
              paragraph="Aqui estão alguns das tecnologias que tenho experiência e que utilizo em meus projetos."
            />
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-8">
            <TechnologiesList names={names} />
          </div>
        </section>

        <section id="contact" className="my-20">
          <div className="w-full flex justify-center">
            <Title
              span="Vamos trabalhar juntos"
              title="Contato"
              paragraph="Estou atualmente disponível para novos projetos. Se você tem uma ideia em mente, adoraria saber mais sobre ela."
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <ContactForm />
          </div>
        </section>
      </div>
      <Separator className="opacity-50" />
      <footer className="w-full flex justify-center items-center py-6">
        <p className="text-xs font-semibold text-center">
          © 2024 Marcos Henrique Araújo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
