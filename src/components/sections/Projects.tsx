"use client";

import { motion, type Variants } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export function Projects() {
  return (
    <section
      id="projetos"
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
          <span className="font-mono text-sm text-accent">04</span>

          <span className="h-px flex-1 max-w-16 bg-border-subtle" />

          <h2 className="font-display text-2xl font-semibold text-fg-primary sm:text-3xl">
            Projetos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProjectCard
            index={0}
            title="Moto Stock"
            status="production"
            description="Aplicação full-stack para gestão de estoque de peças automobilísticas, desenvolvida com arquitetura separada entre frontend e backend."
            highlights={[
              "39 endpoints REST desenvolvidos com Java e Spring Boot, incluindo autenticação e autorização utilizando JWT",
              "Integração com PostgreSQL para gerenciamento de produtos, usuários, fornecedores e categorias",
              "Frontend desenvolvido com React, TypeScript, Vite e Tailwind CSS, com 8 telas dinâmicas consumindo a API",
            ]}
            tech={[
              "Java",
              "Spring Boot",
              "Spring Security",
              "JWT",
              "PostgreSQL",
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
            ]}
            repoUrl="https://github.com/UxieGu1/moto-stock"
          />

          <ProjectCard
            index={1}
            title="Gopportunities"
            status="production"
            description="Uma API de oportunidades de emprego desenvolvida em Golang. A API utiliza Go-Gin como roteador, 
            SQLite como banco de dados e GoORM para a comunicação com o banco. Também inclui Swagger para documentação e testes, 
            além de uma estrutura de pacotes bem organizada."
            highlights={[
              "Cadastro de oportunidades de emprego",
              "Consulta de oportunidades",
              "Busca de oportunidades por diferentes critérios",
            ]}
            tech={[
              "Go",
              "Gin",
              "GoORM",
              "SQLite",
              "Swagger",
              "Docker",
              "Clean Architecture",
              "SOLID",
            ]}
            repoUrl="https://github.com/UxieGu1/gopportunities-api"
          />

          <ProjectCard
            index={2}
            title="Desafios Backend"
            status="production"
            description="Conjunto de desafios técnicos inspirados em problemas reais do mercado, com foco em desenvolvimento backend e processamento de dados."
            highlights={[
              "8 desafios técnicos envolvendo construção de APIs REST com Java e Spring Boot",
              "Processamento de transações financeiras e parsing de arquivos CNAB",
              "Aplicação de arquitetura em camadas e geração de estatísticas a partir dos dados processados",
            ]}
            tech={[
              "Java",
              "Spring Boot",
              "REST API",
              "Arquitetura em Camadas",
              "CNAB",
            ]}
            repoUrl="https://github.com/UxieGu1"
          />
        </div>
      </div>
    </section>
  );
}