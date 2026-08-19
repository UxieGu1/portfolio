"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Download,
  Briefcase,
  ServerCog,
  Network,
  Infinity as InfinityIcon,
} from "lucide-react";
import { NodeNetwork } from "@/components/effects/NodeNetwork";
import { TerminalIntro } from "@/components/effects/TerminalIntro";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: EASE_OUT_EXPO },
  }),
};

const BADGES = [
  { icon: Briefcase, label: "Aberto a novas oportunidades" },
  { icon: ServerCog, label: "Foco em Backend Java" },
  { icon: Network, label: "Arquitetura de sistemas" },
  { icon: InfinityIcon, label: "Aprendizado contínuo" },
];

const STATS = [
  { value: "+2", label: "Projetos em destaque" },
  { value: "Java", label: "Backend focado" },
  { value: "Software Engineer", label: "Do planejamento até aplicações escaláveis" },
  { value: "∞", label: "Sempre aprendendo" },
];

export function Hero() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border-subtle"
    >
      <NodeNetwork />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/40 via-bg-base/70 to-bg-base" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-32 text-center">
        {!introDone && (
          <div className="flex min-h-[140px] items-center justify-center">
            <TerminalIntro onDone={() => setIntroDone(true)} />
          </div>
        )}

        {introDone && (
          <div className="flex flex-col items-center gap-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="flex items-center gap-2 font-mono text-xs text-status"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
              </span>
              Disponível para oportunidades
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted"
            >
              Guilherme Freires <span className="text-accent">/</span> 20 anos
            </motion.p>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="font-display text-4xl font-semibold leading-[1.1] text-fg-primary sm:text-6xl"
            >
              Desenvolvedor
              <br />
              Backend
            </motion.h1>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="max-w-lg text-base text-fg-primary sm:text-lg"
            >
              Da arquitetura ao deploy: construindo backend que funciona de
              verdade.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="max-w-xl font-mono text-sm text-fg-secondary sm:text-base"
            >
              Ciência da Computação, com foco em backend Java, engenharia de software,
              arquitetura de sistemas e construção de soluções escaláveis.
            </motion.p>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2"
            >
              {BADGES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-card/60 px-3.5 py-1.5 font-mono text-xs text-fg-secondary"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="mt-2 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#projetos"
                className="group flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg-base transition-transform hover:scale-[1.02]"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contato"
                className="flex items-center gap-2 rounded-md border border-border-subtle px-5 py-3 font-mono text-sm font-medium text-fg-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                Entrar em contato
              </a>
              <a
                href="/GUILHERME-FREIRES-B.pdf"
                download
                className="flex items-center gap-2 rounded-md border border-border-subtle px-5 py-3 font-mono text-sm font-medium text-fg-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              custom={7}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-xl font-semibold text-fg-primary sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-fg-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
