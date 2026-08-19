export function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-fg-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Guilherme Freires de Sousa</span>
        <span>Construído com Next.js, Tailwind CSS e Framer Motion</span>
      </div>
    </footer>
  );
}
