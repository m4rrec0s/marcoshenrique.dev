"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
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

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-[100vw] flex justify-center py-2 border-b border-gray-800 bg-background bg-opacity-30"
    >
      <div className="flex justify-between items-center h-full px-5 max-w-[1000px] w-full">
        <Link href="/">
          <div className="text-xl font-bold">@marcos</div>
        </Link>
        <nav className="max-sm:hidden">
          <motion.ul id="underline" className="flex items-center space-x-4">
            <motion.li className="text-sm">
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="hover:text-primary transition-colors"
              >
                About me
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#technologies"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("technologies");
                }}
                className="hover:text-primary transition-colors"
              >
                Technologies
              </Link>
            </motion.li>
            <motion.li className="text-sm">
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </motion.li>
            <motion.li>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950">
                  Contact
                </span>
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
        <div className="sm:hidden flex gap-3 items-center">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950">
              Contact
            </span>
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