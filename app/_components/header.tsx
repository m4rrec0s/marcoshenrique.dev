"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import {
  BrainIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
  PresentationIcon,
  User2Icon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "about",
      name: "About me",
    },
    {
      id: "technologies",
      name: "Technologies",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full flex justify-center px-5 py-4 bg-white/10 rounded-full backdrop-blur-sm shadow-md max-md:px-10 max-md:py-6 max-md:rounded-none max-md:shadow-none max-md:w-screen max-md:bg-black/10"
    >
      <div className="flex items-center h-full w-full">
        <nav className="max-sm:hidden">
          <motion.ul id="underline" className="flex items-center space-x-10">
            {links.map((link) => {
              return (
                <motion.li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-sm font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
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

          {/* Modal para celulares */}

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left font-bold">Menu</SheetTitle>
              </SheetHeader>
              <motion.ul id="underline" className="mt-12 flex flex-col gap-6">
                <motion.li className="hover:bg-muted-foreground rounded-lg">
                  <Link
                    href="#home"
                    onClick={(e) => {
                      setIsSheetOpen(false);
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                    className="w-full px-3 py-3 text-sm flex gap-2"
                  >
                    <HomeIcon size={20} />
                    Home
                  </Link>
                </motion.li>
                <motion.li className="hover:bg-muted-foreground rounded-lg">
                  <Link
                    href="#about"
                    onClick={(e) => {
                      setIsSheetOpen(false);
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                    className="w-full px-3 py-3 text-sm flex gap-2"
                  >
                    <User2Icon size={20} />
                    About me
                  </Link>
                </motion.li>
                <motion.li className="hover:bg-muted-foreground rounded-lg">
                  <Link
                    href="#technologies"
                    onClick={(e) => {
                      setIsSheetOpen(false);
                      e.preventDefault();
                      scrollToSection("technologies");
                    }}
                    className="w-full px-3 py-3 text-sm flex gap-2"
                  >
                    <BrainIcon size={20} />
                    Technologies
                  </Link>
                </motion.li>
                <motion.li className="hover:bg-muted-foreground rounded-lg">
                  <Link
                    href="#projects"
                    onClick={(e) => {
                      setIsSheetOpen(false);
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                    className="w-full px-3 py-3 text-sm flex gap-2"
                  >
                    <PresentationIcon size={20} />
                    Projects
                  </Link>
                </motion.li>
                <motion.li className="hover:bg-muted-foreground rounded-lg">
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      setIsSheetOpen(false);
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    className="w-full px-3 py-3 text-sm flex gap-2"
                  >
                    <PhoneIcon size={20} />
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
