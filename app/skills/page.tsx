"use client";

import SkillsSection from "../_components/skills-section";
import SkillProgress from "../_components/skill-progress";
import SkillHighlight from "../_components/ui/skill-highlight";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div className="min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <SkillsSection />

        <motion.div
          className="max-w-5xl mx-auto mt-24 px-4 space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">Nível de Experiência</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Um panorama visual do meu nível de conhecimento em algumas das
              principais tecnologias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            <div>
              <SkillProgress
                name="React / Next.js"
                percentage={90}
                delay={0.1}
              />
              <SkillProgress name="TypeScript" percentage={85} delay={0.2} />
              <SkillProgress name="Tailwind CSS" percentage={95} delay={0.3} />
              <SkillProgress name="Node.js" percentage={80} delay={0.4} />
              <SkillProgress name="React Native" percentage={75} delay={0.5} />
            </div>
            <div>
              <SkillProgress name="PostgreSQL" percentage={80} delay={0.1} />
              <SkillProgress name="Prisma" percentage={85} delay={0.2} />
              <SkillProgress
                name="Python / Django"
                percentage={70}
                delay={0.3}
              />
              <SkillProgress name="Docker" percentage={65} delay={0.4} />
              <SkillProgress name="UI/UX Design" percentage={75} delay={0.5} />
            </div>
          </div>

          <motion.div
            className="mt-24 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <SkillHighlight>
              <div className="text-center px-4 py-2">
                <h2 className="text-xl font-semibold mb-3">
                  Desenvolvimento Profissional
                </h2>
                <p className="text-gray-300">
                  Estou constantemente aprendendo e atualizando minhas
                  habilidades para acompanhar as últimas tendências e
                  tecnologias no desenvolvimento web e mobile.
                </p>
              </div>
            </SkillHighlight>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3">Metodologia</h3>
              <p className="text-gray-300 text-sm">
                Desenvolvimento ágil, trabalho em equipe, resolução de problemas
                e comunicação eficiente.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)",
              }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Aprendizado</h3>
              <p className="text-gray-300 text-sm">
                Comprometido com o aprendizado contínuo e a exploração de novas
                tecnologias e metodologias.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)",
              }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Foco</h3>
              <p className="text-gray-300 text-sm">
                Desenvolvimento web fullstack com foco em performance,
                acessibilidade e experiência do usuário.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
