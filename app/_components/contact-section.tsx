"use client";

import Title from "./title";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 w-full overflow-x-hidden">
      <div className="w-full flex justify-center">
        <Title
          span="Vamos trabalhar juntos"
          title="Contato"
          paragraph="Estou atualmente disponível para novos projetos. Se você tem uma ideia em mente, adoraria saber mais sobre ela."
        />
      </div>
      <div className="w-full flex justify-center items-center mt-10 px-5">
        <ContactForm />
      </div>
    </section>
  );
}
