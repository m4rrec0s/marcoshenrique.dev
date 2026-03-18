"use client";

import HomeEntry from "./_components/home-entry";
import HomeToAboutTransition from "./_components/home-to-about-transition";
import ProjectsSection from "./_components/projects-section";
import AboutPage from "./_components/about-page";
import SkillsSection from "./_components/skills-section";
import ContactForm from "./_components/contact-form";
import SiteHeader from "./_components/site-header";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center">
      <SiteHeader />
      <HomeEntry />
      <HomeToAboutTransition />
      <AboutPage />
      <ProjectsSection />

      <SkillsSection />
      <section id="contact" className="w-full scroll-mt-24 pb-6">
        <ContactForm />
      </section>
    </main>
  );
}
