"use client";

import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="fixed right-3 top-3 z-50 max-w-[calc(100vw-1.5rem)] overflow-x-auto">
      <nav className="flex w-max items-center gap-1 rounded-full border border-white/10 bg-transparent p-1.5 backdrop-blur-xl shadow-2xl shadow-black/20">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:text-xs"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
