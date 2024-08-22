"use client";

import Image from "next/image";
import Header from "./_components/header";
import ScrollCarrossel from "./_components/scroll-carrousel";
import Link from "next/link";
import { Github, Instagram, Linkedin, TwitterIcon } from "lucide-react";
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
import ContactForm from "./_components/contact-form";

const projects: ProjectItemProps[] = [
  {
    props: {
      name: "MH food",
      category: "Aplicação de Delivery de alimentos",
      description:
        "O projeto é uma aplicação web de um serviço de entrega de alimentos, desenvolvida utilizando o framework Next.js",
      images: [
        "https://utfs.io/f/93d839e0-1605-4683-b726-f8ac3c2c2c4f-z8uvbx.png",
        "https://utfs.io/f/961f4e66-a786-46db-a04f-9b02985dfb98-zb7k90.png",
        "https://utfs.io/f/16fab9bd-c6dc-4900-ae5b-cdb592dffe39-yu5xut.png",
        "https://utfs.io/f/87c866da-d460-4cba-ae42-c50fc9307179-yd4bgm.png",
      ],
      status: "Completed",
      tecnologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
        "Docker",
      ],
      github: "",
      project: "https://mh-food.vercel.app/",
    },
  },
  {
    props: {
      name: "TaskList",
      category: "Aplicativo web de treinamento",
      description:
        "O projeto é uma aplicação web desenvolvida com Next.js, que é um gerenciador de exercícios e treinos. Ele inclui funcionalidades para autenticação de usuários, pesquisa de exercícios, visualização de detalhes de exercícios e treinos, e integração com o banco de dados Prisma.",
      images: [
        "https://utfs.io/f/25330adf-d6f9-42b6-bac8-eaae4d1215f7-1ri2lq.png",
        "https://utfs.io/f/d44082a6-67d0-45c0-8952-77cd6922a5cd-1ri2lr.png",
        "https://utfs.io/f/e69b67b2-fbd6-487a-a57a-9f0f414e8fbf-1ri2ls.png",
        "https://utfs.io/f/8ff323e1-58f4-4fe3-808a-1d61e637b82f-1ri2lt.png",
      ],
      status: "In Progress",
      tecnologies: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Prisma",
        "PostgreeSQL",
      ],
      github: "",
      project: "https://tasklist-app-eight.vercel.app/",
    },
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <div className="fixed top-0 z-50">
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
                <p className="opacity-60 text-sm max-w-[800px] mt-3">
                  Desenvolvedor Fullstack com experiência em desenvolvimento de
                  aplicações web modernas e eficientes utilizando tecnologias
                  como Next.js e Node.js.
                </p>

                <div className="w-full flex justify-center mt-6 items-center z-10 gap-5 max-sm:gap-3">
                  <button
                    type="submit"
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950">
                      Baixar CV
                    </span>
                  </button>

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
                  <Link
                    className="hover:text-primary border hover:border-primary border-white rounded-full p-2"
                    href="https://twitter.com/Marrecos_"
                  >
                    <TwitterIcon size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          className="flex flex-col gap-4 py-6 px-5 bg-inherit w-full items-center mb-6"
        >
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            exit={{ x: -50, opacity: 0 }}
            className="text-xl font-mono max-sm:text-center"
          >
            &quot;Programadores e artistas são os únicos profissionais que tem
            como hobby a própria profissão.&quot;
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ x: -50, opacity: 0 }}
            className="text-md font-semibold"
          >
            Rafael Lain
          </motion.p>
        </section>

        <section className="py-10 px-5 bg-background w-full flex justify-center">
          <div className="w-full max-w-[1300px] grid grid-cols-2 justify-between px-5 max-sm:grid-cols-1 max-sm:gap-4">
            <h2 className="text-4xl font-semibold max-sm:text-center max-sm:mb-5">
              About me
            </h2>
            <div className="flex flex-col gap-4 border-l">
              <div className="pl-4">
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ x: -50, opacity: 0 }}
                  className="text-xl font-semibold"
                >
                  Who am I? 🤓
                </motion.h3>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  exit={{ x: -50, opacity: 0 }}
                  className="text-base font-normal opacity-70"
                >
                  Nice to meet you! Im a web developer passionate about creating{" "}
                  <strong className="underline">
                    amazing online experiences
                  </strong>
                  . My journey involves exploring a variety of technologies,
                  from TypeScript to Java, including Next.js, React, Prisma, and
                  Tailwind. With a keen eye for design and usability, I strive
                  to deliver high-quality and impactful projects. Feel free to
                  explore my portfolio and learn more about my journey.
                </motion.p>
              </div>
              <div className="pl-4">
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ x: -50, opacity: 0 }}
                  className="text-xl font-semibold"
                >
                  My goals ✅
                </motion.h3>
                <div className="flex flex-col gap-3">
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="text-base font-normal opacity-70"
                  >
                    • <strong className="underline"> Professional Goal:</strong>{" "}
                    To work as a web developer within a dynamic team,
                    contributing to innovative and impactful projects. My focus
                    is on creating exceptional user experiences, and I`m
                    committed to staying up-to-date with the latest
                    technological trends.
                  </motion.p>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="text-base font-normal opacity-70"
                  >
                    • <strong className="underline"> Specialization:</strong> I
                    aim to specialize in front-end development, exploring
                    frameworks like React and Next.js. Additionally, I have a
                    keen interest in deepening my knowledge of interface design
                    and accessibility.
                  </motion.p>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="text-base font-normal opacity-70"
                  >
                    •{" "}
                    <strong className="underline">
                      Collaboration and Continuous Learning:
                    </strong>{" "}
                    I seek to be part of a collaborative environment where I can
                    learn from experienced colleagues and share my own
                    discoveries. Web development, to me, is an ongoing journey
                    of growth.
                  </motion.p>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="text-base font-normal opacity-70"
                  >
                    •{" "}
                    <strong className="underline"> Impact and Quality:</strong>{" "}
                    My goal is to deliver clean, optimized, and high-quality
                    code. I want to create products that truly make a difference
                    in people`s lives.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="w-full my-6 text-center">
          <h2 className="text-3xl font-semibold mt-6">Minha Stack</h2>
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <ScrollCarrossel />
          </div>
        </section>

        <section id="projects" className="my-6">
          <div className="w-full h-full flex justify-center items-center flex-col">
            {/* <h2 className="text-3xl font-semibold ">Projetos</h2> */}
            <div className="flex mt-6 max-md:hidden mx-auto w-[80%] max-md:w-[80%] mb-14">
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
                      className="w-full flex justify-center md:px-6"
                      key={index}
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
        <section
          id="contact"
          className="py-10 px-5 w-full flex justify-center bg-gradient-to-b from-background to-muted-foreground"
        >
          <div className="w-full max-w-[1300px] flex justify-center">
            <div className="w-full px-5 flex-1 flex-col items-center">
              <div className="w-full flex gap-6 items-center lg:justify-center">
                <div className="flex-1 max-w-[500px]">
                  <div className="mb-6 flex flex-col">
                    <motion.span
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      exit={{ x: -50, opacity: 0 }}
                      className="text-2xl font-normal"
                    >
                      Entre em
                    </motion.span>
                    <motion.h2
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      exit={{ x: -50, opacity: 0 }}
                      className="text-4xl font-bold"
                    >
                      Contato
                    </motion.h2>
                  </div>
                  <ContactForm />
                </div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="flex flex-col gap-2 w-fit pt-16"
                >
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
                  <Link
                    className="hover:text-primary border hover:border-primary border-white rounded-full p-2"
                    href="https://twitter.com/Marrecos_"
                  >
                    <TwitterIcon size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
