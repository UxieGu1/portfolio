"use client";

import { motion, type Variants } from "framer-motion";
import {
  GraduationCap,
  School,
  Server,
  Coffee,
  Code2,
  Database,
  Container,
  Rocket,
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

type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  icon: typeof GraduationCap;
};

const TIMELINE: TimelineItem[] = [
  {
    period: "02/2022 — 12/2024",
    title: "Técnico em Informática",
    org: "EEEP Maria Môsa da Silva",
    description:
      "Minha primeira formação na área de tecnologia, onde construí minha base em informática, programação e desenvolvimento de sistemas e tive contato com diferentes áreas da computação.",
    icon: School,
  },
  {
    period: "02/2025 — atual",
    title: "Ciência da Computação",
    org: "Universidade Federal do Ceará — UFC",
    description:
      "Formação acadêmica em Ciência da Computação, aprofundando conhecimentos em algoritmos, estruturas de dados, engenharia de software, bancos de dados, arquitetura e fundamentos da computação.",
    icon: GraduationCap,
  },
  {
    period: "2025 — atual",
    title: "Java & Spring Boot",
    org: "Estudo e projetos pessoais",
    description:
      "Aprofundamento no ecossistema Java com foco em desenvolvimento backend, utilizando Spring Boot, Spring Security, APIs REST, JWT, JPA/Hibernate e arquitetura em camadas.",
    icon: Coffee,
  },
  {
    period: "2025 — atual",
    title: "Desenvolvimento Backend",
    org: "Java, Go & Python",
    description:
      "Construção de APIs REST utilizando Java/Spring Boot, Go/Gin e Python/FastAPI, aplicando princípios como SOLID, Clean Code, separação de responsabilidades e arquitetura em camadas.",
    icon: Server,
  },
  {
    period: "04/2026 — atual",
    title: "Desenvolvedor Backend",
    org: "Universidade Federal do Ceará — Bolsista",
    description:
      "Atuação no backend do Aplicativo de Gestão e Mentoria da UFC. Implementei 15 funcionalidades utilizando Python e FastAPI, além de atuar em validação de dados, correção de bugs, regras de negócio e integração com banco de dados.",
    icon: Code2,
  },
  {
    period: "2026 — atual",
    title: "Banco de Dados",
    org: "PostgreSQL & MongoDB",
    description:
      "Experiência prática com bancos relacionais e NoSQL, trabalhando com PostgreSQL e MongoDB em aplicações backend, persistência de dados e integração com APIs.",
    icon: Database,
  },
  {
    period: "2026 — atual",
    title: "Projetos Full Stack",
    org: "React, TypeScript & Spring Boot",
    description:
      "Desenvolvimento de aplicações completas conectando APIs backend a interfaces React. No projeto Moto Stock, construí 39 endpoints REST com autenticação JWT e um frontend com telas de gestão de produtos, usuários, fornecedores e categorias.",
    icon: Rocket,
  },
  {
    period: "2026 — atual",
    title: "Docker & DevOps",
    org: "Docker, GitHub Actions & CI/CD",
    description:
      "Estudo e aplicação de containers, ambientes de desenvolvimento, integração contínua e automação de pipelines, buscando aproximar meus projetos de ambientes reais de produção.",
    icon: Container,
  },
];

export function About() {
  return (
    <section
      id="sobre"
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
          <span className="font-mono text-sm text-accent">02</span>

          <span className="h-px flex-1 max-w-16 bg-border-subtle" />

          <h2 className="font-display text-2xl font-semibold text-fg-primary sm:text-3xl">
            Sobre
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col gap-5 text-base leading-relaxed text-fg-secondary"
          >
            <p>
              Sou estudante de Ciência da Computação na Universidade Federal
              do Ceará e desenvolvedor backend em formação, com experiência
              prática no desenvolvimento de APIs e aplicações web.
            </p>

            <p>
              Minha trajetória na tecnologia começou com o curso Técnico em
              Informática e evoluiu para a graduação em Ciência da Computação.
              Ao longo desse caminho, concentrei meus estudos principalmente
              em desenvolvimento backend, trabalhando com Java, Spring Boot e Go.
            </p>

            <p>
              Atualmente, atuo como Desenvolvedor Backend bolsista na UFC,
              trabalhando no backend do Aplicativo de Gestão e Mentoria com
              Python e FastAPI. Nesse projeto, já implementei funcionalidades,
              corrigi bugs, trabalhei com regras de negócio e integração com
              banco de dados.
            </p>

            <p>
              Paralelamente, desenvolvo projetos próprios para aprofundar meus
              conhecimentos. Tenho experiência com React e TypeScript no
              frontend, PostgreSQL e MongoDB no armazenamento de dados, além
              de Docker, Git/GitHub, CI/CD, SOLID e Clean Code.
            </p>

            <p>
              Meu objetivo é continuar evoluindo como desenvolvedor backend,
              construir software bem estruturado e transformar conhecimento
              teórico em soluções reais, mantendo sempre uma mentalidade de
              aprendizado contínuo.
            </p>
          </motion.div>

          <div className="relative flex flex-col gap-10 border-l border-border-subtle pl-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  visible: (idx: number) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: EASE_OUT_EXPO,
                    },
                  }),
                }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <p className="font-mono text-xs uppercase tracking-wide text-fg-muted">
                  {item.period}
                </p>

                <div className="mt-1.5 flex items-center gap-2">
                  <item.icon className="h-4 w-4 shrink-0 text-accent" />

                  <h3 className="font-display text-base font-medium text-fg-primary sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-0.5 font-mono text-sm text-fg-secondary">
                  {item.org}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}