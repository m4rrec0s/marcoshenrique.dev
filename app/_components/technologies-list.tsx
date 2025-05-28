import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface TechnologiesListProps {
  names: string[];
  categories?: {
    [key: string]: string[];
  };
}

const TechnologiesList = ({ names, categories }: TechnologiesListProps) => {
  if (!categories) {
    return (
      <motion.div
        className="mx-auto mt-14 max-w-4xl space-y-8 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {names.map((name, index) => (
            <motion.div
              key={index}
              className="inline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Badge
                variant="outline"
                className="text-md font-medium border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm"
              >
                {name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mx-auto mt-14 max-w-5xl space-y-12 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(categories).map(([category, techs], categoryIndex) => (
        <motion.div
          key={category}
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: categoryIndex * 0.2,
            ease: "easeOut",
          }}
        >
          <motion.h3
            className="text-xl font-semibold text-center text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.2 }}
          >
            {category}
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                className="inline"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + categoryIndex * 0.2 + techIndex * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Badge
                  variant="outline"
                  className="text-md font-medium border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/15 hover:border-white/40 transition-all duration-300 shadow-sm"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechnologiesList;
