"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Line = {
  text: string;
  delay: number; // ms antes de começar a "digitar" esta linha
  variant?: "command" | "output" | "success";
};

const LINES: Line[] = [
  { text: "$ mvn spring-boot:run", delay: 0, variant: "command" },
  { text: "Starting BackendApplication...", delay: 500, variant: "output" },
  { text: "Tomcat started on port 8080", delay: 900, variant: "output" },
  { text: "64 tests passed, 0 failures", delay: 1300, variant: "output" },
  { text: "BUILD SUCCESS", delay: 1750, variant: "success" },
];

const TOTAL_DURATION_MS = 2600;

/**
 * Roda a sequência de boot uma vez e então chama onDone,
 * momento em que o Hero revela o conteúdo principal.
 */
export function TerminalIntro({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onDone();
      return;
    }

    const timers = LINES.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), LINES[i].delay)
    );
    const finalTimer = setTimeout(onDone, TOTAL_DURATION_MS);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.4 }}
        className="font-mono text-sm sm:text-base"
        role="status"
        aria-live="polite"
      >
        {LINES.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={
              line.variant === "command"
                ? "text-fg-primary"
                : line.variant === "success"
                  ? "text-status"
                  : "text-fg-muted"
            }
          >
            {line.variant === "output" && (
              <span className="text-fg-muted">{"  » "}</span>
            )}
            {line.text}
            {i === visibleCount - 1 && (
              <span className="ml-1 inline-block h-[1em] w-[0.5em] translate-y-[2px] animate-pulse bg-accent align-middle" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
