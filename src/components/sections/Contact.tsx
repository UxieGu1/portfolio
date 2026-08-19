"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Phone, Link2, FolderGit2, ArrowUpRight } from "lucide-react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

const CHANNELS = [
  {
    icon: Mail,
    label: "E-mail",
    value: "guilhermefreires10@gmail.com",
    href: "mailto:guilhermefreires10@gmail.com",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/guilhermeefreires",
    href: "https://linkedin.com/in/guilhermeefreires",
  },
  {
    icon: FolderGit2,
    label: "GitHub",
    value: "github.com/UxieGu1",
    href: "https://github.com/UxieGu1",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 85 98432-6937",
    href: "tel:+5585984326937",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-accent">05</span>
          <span className="h-px flex-1 max-w-16 bg-border-subtle" />
          <h2 className="font-display text-2xl font-semibold text-fg-primary sm:text-3xl">
            Contato
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-4"
        >
          <h3 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-fg-primary sm:text-4xl">
            Aberto a conversar sobre oportunidades em desenvolvimento
            backend.
          </h3>
          <p className="max-w-xl text-fg-secondary">
            Se meu perfil fizer sentido pra alguma vaga, ou se você só quiser
            trocar uma ideia sobre algum dos projetos, os canais abaixo
            respondem rápido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: EASE_OUT_EXPO,
                  },
                }),
              }}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border-subtle bg-bg-card/60 p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle text-accent">
                  <channel.icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-fg-muted">
                    {channel.label}
                  </span>
                  <span className="break-all text-sm text-fg-primary">
                    {channel.value}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-muted transition-colors group-hover:text-accent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
