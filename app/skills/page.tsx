"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SkillsSection from "../_components/skills-section";
import SkillProgress from "../_components/skill-progress";
import { Card, CardContent } from "../_components/ui/card";
import { Badge } from "../_components/ui/badge";
import { getSkills, type Skill } from "../_actions/skills";

function skillLevelToPercentage(level: number) {
  return Math.min(100, Math.max(0, Math.round((level / 5) * 100)));
}

function sortCategories(categories: string[]) {
  return [...categories].sort((left, right) =>
    left.localeCompare(right, "pt-BR"),
  );
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadSkills() {
      setLoading(true);
      const response = await getSkills();

      if (mounted && response.success && response.data) {
        setSkills(response.data);
      }

      if (mounted) {
        setLoading(false);
      }
    }

    loadSkills();

    return () => {
      mounted = false;
    };
  }, []);

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
      if (!accumulator[skill.category]) {
        accumulator[skill.category] = [];
      }

      accumulator[skill.category].push(skill);
      return accumulator;
    }, {});
  }, [skills]);

  const categories = sortCategories(Object.keys(groupedSkills));

  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <SkillsSection />

        <motion.div
          className="max-w-6xl mx-auto mt-24 px-4 space-y-12"
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
              Um panorama visual das skills cadastradas no banco de dados e
              mantidas pelo painel administrativo.
            </p>
          </motion.div>

          {loading ? (
            <p className="text-center text-sm text-gray-400">
              Carregando skills...
            </p>
          ) : categories.length > 0 ? (
            <div className="grid gap-6">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                >
                  <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {category}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {groupedSkills[category].length} habilidade(s)
                          </p>
                        </div>
                        <Badge className="bg-white/10 text-gray-200">
                          Banco de dados
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                        {groupedSkills[category].map((skill, skillIndex) => (
                          <SkillProgress
                            key={skill.id}
                            name={skill.name}
                            percentage={skillLevelToPercentage(skill.level)}
                            delay={0.05 * skillIndex}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-300 backdrop-blur-xl">
              Nenhuma skill cadastrada no momento.
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
