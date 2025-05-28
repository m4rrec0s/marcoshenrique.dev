import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 sm:items-center justify-center min-h-screen p-4 py-20 sm:py-0">
      <div className="w-full max-w-md px-3">
        <h1 className="text-4xl font-bold">Um pouco sobre mim</h1>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Olá! Meu nome é Marcos e sou desenvolvedor a cerca de 2 anos. Tenho
          experiência em diversas tecnologias e adoro aprender coisas novas,
          sempre esperando a melhor experiência do usuário.
        </p>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Estou cursando Análise e Desenvolvimento de Sistemas a mais de 1 ano,
          onde pude aprender fundamentos de programação, estruturas de dados,
          algoritmos e muito mais. Durante esse tempo, tive a oportunidade de
          trabalhar em projetos acadêmicos e pessoais, o que me ajudou a
          aprimorar minhas habilidades e ganhar experiência prática.
        </p>
        <p className="mt-4 font-medium font-mono text-gray-700 dark:text-gray-300">
          Meu foco principal no momento é desenvolvimento web full stack com
          <span className="text-green-600 hover:font-bold hover:text-green-400 transition-colors">
            {" "}
            Next.js
          </span>{" "}
          e{" "}
          <span className="text-green-600 hover:font-bold hover:text-green-400 transition-colors">
            Node.js
          </span>{" "}
          utilizando Typescript para tipage. Mas também tenho interesse em
          outras áreas, como inteligência artificial e desenvolvimento de
          aplicativos móveis.
        </p>
        <p></p>
      </div>
      <div className="flex items-center justify-center mt-8 sm:mt-0">
        <Image
          src="https://6c8fb3gvzm.ufs.sh/f/dac21f19-0421-440b-b20a-5550364fd045-hvsas7.png"
          alt="Marcos"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default AboutPage;
