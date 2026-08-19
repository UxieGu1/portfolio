"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "Sobre", href: "#sobre" },
  { number: "03", label: "Skills", href: "#skills" },
  { number: "04", label: "Projetos", href: "#projetos" },
  { number: "05", label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.6 }}
      className="fixed top-0 z-50 w-full border-b border-border-subtle bg-bg-base/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-wide text-fg-primary"
        >
          GFS<span className="text-accent">.</span>
        </a>

        <nav className="hidden gap-8 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 font-mono text-xs text-fg-secondary transition-colors hover:text-fg-primary"
            >
              <span className="text-accent">{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-fg-primary transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-fg-primary transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border-subtle px-6 py-4 sm:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-2 font-mono text-sm text-fg-secondary"
            >
              <span className="text-accent">{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
