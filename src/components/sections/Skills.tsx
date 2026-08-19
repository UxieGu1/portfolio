"use client";

import { motion, type Variants } from "framer-motion";
import {
  Server,
  Database,
  ShieldCheck,
  Wrench,
  LayoutTemplate,
  Languages,
} from "lucide-react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

type SkillCategory = {
  icon: typeof Server;
  title: string;
  items: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    icon: Server,
    title: "Backend",
    items: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "APIs REST",
      "Lombok",
      "JWT",
      "MapStruct",
      "Golang"
    ],
  },
  {
    icon: Database,
    title: "Dados & Persistência",
  items: ["SQL", "PostgreSQL", "Flyway"],
  },
  {
    icon: ShieldCheck,
    title: "Qualidade & Testes",
    items: ["JUnit", "Mockito", "Testcontainers", "SOLID", "Clean Code"],
  },
  {
    icon: Wrench,
    title: "DevOps & Ferramentas",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "Maven",
      "Postman",
      "Swagger/OpenAPI",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend (complementar)",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Shadcn"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b border-border-subtle px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-sm text-accent">03</span>
          <span className="h-px flex-1 max-w-16 bg-border-subtle" />
          <h2 className="font-display text-2xl font-semibold text-fg-primary sm:text-3xl">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
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
              className="rounded-lg border border-border-subtle bg-bg-card/60 p-5"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <category.icon className="h-4 w-4 text-accent" />
                <h3 className="font-display text-base font-medium text-fg-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-subtle px-3 py-1 font-mono text-xs text-fg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            custom={CATEGORIES.length}
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
            className="rounded-lg border border-border-subtle bg-bg-card/60 p-5"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <Languages className="h-4 w-4 text-accent" />
              <h3 className="font-display text-base font-medium text-fg-primary">
                Idiomas
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-border-subtle px-3 py-1 font-mono text-xs text-fg-secondary">
                Português — Nativo
              </span>
              <span className="rounded-full border border-border-subtle px-3 py-1 font-mono text-xs text-fg-secondary">
                Inglês — Intermediário
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
