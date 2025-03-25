"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  HomeIcon,
  PresentationIcon,
  PhoneIcon,
  BrainIcon,
  MenuIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const Header = () => {
  const links = useMemo(
    () => [
      { id: "home", name: "Início" },
      { id: "projects", name: "Projetos" },
      { id: "skills", name: "Habilidades" },
      { id: "contact", name: "Contato" },
    ],
    []
  );

  const [selected, setSelected] = useState(links[0].id);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setSelected(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full flex justify-center px-2 py-4 bg-white/10 rounded-full backdrop-blur-sm shadow-md max-md:px-10 max-md:py-6 max-md:rounded-none max-md:shadow-none max-md:w-screen max-md:bg-black/10 max-md:border-b border-white/10"
    >
      <div className="flex items-center h-full w-full max-md:justify-end">
        <nav className="max-sm:hidden">
          <motion.ul
            id="underline"
            className="flex items-center space-x-5 relative"
          >
            {links.map((link) => (
              <motion.li key={link.id} className="relative">
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`text-sm font-bold relative px-5 py-3 rounded-full z-10 ${
                    selected === link.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {link.name}
                  {/* {selected === link.id && (
                    <motion.span
                      layoutId="pill-tab"
                      className="absolute w-full inset-0 bg-black/60 rounded-full z-0"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )} */}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className="sm:hidden flex gap-3 items-center">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>

          <Button
            variant="ghost"
            className="hover:bg-transparent"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon size={20} />
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left font-bold">Menu</SheetTitle>
              </SheetHeader>
              <motion.ul className="mt-12 flex flex-col gap-6">
                {links.map((link) => (
                  <motion.li
                    key={link.id}
                    className="hover:bg-muted-foreground rounded-lg"
                  >
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => {
                        setIsSheetOpen(false);
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                      className="w-full px-3 py-3 text-sm flex gap-2"
                    >
                      {link.id === "home" && <HomeIcon size={20} />}
                      {link.id === "projects" && <PresentationIcon size={20} />}
                      {link.id === "skills" && <BrainIcon size={20} />}
                      {link.id === "contact" && <PhoneIcon size={20} />}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
