"use client";

import HomeEntry from "./_components/home-entry";
import ProjectsSection from "./_components/projects-section";
import AboutPage from "./_components/about-page";
import SkillsSection from "./_components/skills-section";
import ContactForm from "./_components/contact-form";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center">
      <HomeEntry />
      <AboutPage />
      <ProjectsSection />

      <SkillsSection />
      <div className="pb-6">
        <ContactForm />
      </div>
    </main>
  );
}
