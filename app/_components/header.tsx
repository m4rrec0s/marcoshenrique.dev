import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-[100vw] flex justify-center py-2 border-b border-gray-800 bg-background bg-opacity-30"
    >
      <div className="flex justify-between items-center h-full px-2 max-w-[1000px] w-full">
        <Link href="/">
          <div className="text-xl font-bold">@marcos</div>
        </Link>
        <nav className="max-sm:hidden">
          <motion.ul id="underline" className="flex items-center space-x-4">
            <motion.li className="text-sm">
              <Link
                href="#home"
                className="hover:text-primary transition-colors"
              >
                Início
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#home"
                className="hover:text-primary transition-colors"
              >
                Sobre mim
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#home"
                className="hover:text-primary transition-colors"
              >
                Tecnologias
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#home"
                className="hover:text-primary transition-colors"
              >
                Projetos
              </Link>
            </motion.li>
            <motion.li>
              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950">
                  Contato
                </span>
              </button>
            </motion.li>
          </motion.ul>
        </nav>
        <button
          type="submit"
          className="sm:hidden relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950">
            Contato
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
