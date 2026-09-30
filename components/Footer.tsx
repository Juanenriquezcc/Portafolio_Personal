import { ArrowUp } from "lucide-react";
import Isotipo from "./Isotipo";
import { site, type Locale } from "@/data/site";

const copy = {
  es: { line: "Ingeniería de Software · Universidad Cooperativa de Colombia", top: "Volver arriba" },
  en: { line: "Software Engineering · Universidad Cooperativa de Colombia", top: "Back to top" },
};

export default function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Isotipo size={40} />
          <div className="flex flex-col gap-1">
            <span className="font-display text-sm font-semibold uppercase tracking-tight text-fg">{site.name}</span>
            <span className="text-xs text-muted">
              © {new Date().getFullYear()} · {t.line}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            LinkedIn
          </a>
          <a href="#home" className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            {t.top}
            <ArrowUp size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
