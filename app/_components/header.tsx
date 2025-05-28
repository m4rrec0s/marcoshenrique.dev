"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const links = useMemo(
    () => [
      { url: "/", name: "Início" },
      { url: "/about", name: "Eu" },
      { url: "/projects", name: "Projetos" },
      { url: "/skills", name: "Habilidades" },
      { url: "/contact", name: "Contato" },
    ],
    []
  );

  const pathname = usePathname();

  const activeLink = useMemo(() => {
    if (pathname === "/") {
      return "/";
    }

    const matchingLink = links
      .filter((link) => link.url !== "/")
      .find((link) => pathname.startsWith(link.url));

    return matchingLink?.url || "/";
  }, [pathname, links]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center px-4 py-2 bg-black shadow-md max-md:px-6 max-md:py-3 max-md:border-b max-md:border-gray-700"
    >
      <div className="flex items-center h-full w-full max-w-screen-lg justify-between md:justify-center">
        <nav className="w-full flex justify-center">
          <motion.ul
            id="desktop-nav-links"
            className="flex items-center space-x-2 relative"
          >
            {links.map((link) => {
              const isActive = link.url === activeLink;
              return (
                <motion.li key={link.url} className="relative">
                  <Link
                    href={link.url}
                    className={`text-sm font-medium relative px-3 py-2 rounded-md z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="active-link-underline"
                        className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-white rounded-full"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
