"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Construction, Check } from "lucide-react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export type ProjectStatus = "production" | "development";

type ProjectCardProps = {
  title: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  image?: { src: string; alt: string };
  index: number;
};

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; dotClass: string; textClass: string }
> = {
  production: {
    label: "Em produção",
    dotClass: "bg-status",
    textClass: "text-status",
  },
  development: {
    label: "Em desenvolvimento",
    dotClass: "bg-amber-400",
    textClass: "text-amber-400",
  },
};

export function ProjectCard({
  title,
  status,
  description,
  highlights,
  tech,
  repoUrl,
  liveUrl,
  image,
  index,
}: ProjectCardProps) {
  const statusConfig = STATUS_CONFIG[status];
  const urlLabel = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "")
    : "preview em breve";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: i * 0.12, ease: EASE_OUT_EXPO },
        }),
      }}
      className="flex flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-card/60"
    >
      <div className="border-b border-border-subtle">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
          <span className="ml-2 truncate font-mono text-xs text-fg-muted">
            {urlLabel}
          </span>
        </div>

        <div className="relative aspect-video w-full bg-bg-elevated">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-border-subtle/60">
              <Construction className="h-6 w-6 text-fg-muted" />
              <span className="font-mono text-xs text-fg-muted">
                Preview em breve
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-fg-primary">
            {title}
          </h3>
          <span
            className={`flex items-center gap-1.5 whitespace-nowrap font-mono text-xs ${statusConfig.textClass}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dotClass}`} />
            {statusConfig.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-fg-secondary">
          {description}
        </p>

        <ul className="flex flex-col gap-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-fg-secondary"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[11px] text-fg-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-3">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-fg-primary transition-colors hover:text-accent"
          >
            <FolderGit2 className="h-4 w-4" />
            Repositório
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-fg-primary transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
              Ver ao vivo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
