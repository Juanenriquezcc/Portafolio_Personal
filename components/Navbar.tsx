"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Isotipo from "./Isotipo";
import { sections, type Locale } from "@/data/site";
import { setTheme, useTheme } from "@/lib/theme";

const copy = {
  es: { cta: "Hablemos", tagline: "Ingeniería de Software", open: "Abrir menú", close: "Cerrar menú", theme: "Tema", light: "Claro", dark: "Oscuro" },
  en: { cta: "Get in touch", tagline: "Software Engineering", open: "Open menu", close: "Close menu", theme: "Theme", light: "Light", dark: "Dark" },
};

export default function Navbar({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const t = copy[locale];

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["home", ...sections.map((section) => section.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const segment = (selected: boolean) =>
    `flex h-7 items-center justify-center rounded-md px-2 text-xs font-medium transition-colors duration-200 ${
      selected ? "bg-raised text-fg shadow-card" : "text-muted hover:text-fg"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-canvas/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-12">
        <a href="#home" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="Juan José Enríquez Córdoba — inicio">
          <Isotipo
            size={36}
            className="transition-[transform,filter] duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
          />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-fg sm:text-base md:text-lg">
              JUAN JOSÉ <span className="font-medium text-muted">/</span> DEV
            </span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:block xl:hidden 2xl:block">{t.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              className={`whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-200 ${
                active === section.id ? "bg-elevated text-accent" : "text-muted hover:bg-elevated/70 hover:text-fg"
              }`}
            >
              <span className="font-mono text-[11px] opacity-60">0{index + 1}.</span> {section.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-line bg-elevated p-0.5" role="group" aria-label="Idioma / Language">
            {(["es", "en"] as const).map((code) => (
              <button key={code} type="button" onClick={() => onLocaleChange(code)} aria-pressed={locale === code} className={`${segment(locale === code)} uppercase`}>
                {code}
              </button>
            ))}
          </div>

          <div className="flex rounded-lg border border-line bg-elevated p-0.5" role="group" aria-label={t.theme}>
            <button type="button" onClick={() => setTheme("light")} aria-pressed={theme === "light"} aria-label={t.light} title={t.light} className={segment(theme === "light")}>
              <Sun size={14} className="transition-transform duration-500 hover:rotate-45" />
            </button>
            <button type="button" onClick={() => setTheme("dark")} aria-pressed={theme === "dark"} aria-label={t.dark} title={t.dark} className={segment(theme === "dark")}>
              <Moon size={14} className="transition-transform duration-500 hover:-rotate-12" />
            </button>
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-fg px-4 py-2 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent-strong sm:inline-flex"
          >
            {t.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg xl:hidden"
            aria-label={menuOpen ? t.close : t.open}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Móvil"
        className={`grid border-line bg-canvas/95 transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden ${
          menuOpen ? "grid-rows-[1fr] border-t opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden px-4 sm:px-6">
          {sections.map((section, index) => (
            <li key={section.id} className="border-b border-line last:border-0">
              <a
                href={`#${section.id}`}
                tabIndex={menuOpen ? undefined : -1}
                onClick={() => setMenuOpen(false)}
                className={`flex items-baseline gap-4 py-4 font-display text-xl font-semibold tracking-tight transition-colors ${
                  active === section.id ? "text-accent" : "text-fg hover:text-accent"
                }`}
              >
                <span className="font-mono text-xs font-normal text-muted">0{index + 1}</span>
                {section.label[locale]}
              </a>
            </li>
          ))}
          <li className="py-4 sm:hidden">
            <a
              href="#contact"
              tabIndex={menuOpen ? undefined : -1}
              onClick={() => setMenuOpen(false)}
              className="flex justify-center rounded-lg bg-fg py-3 text-sm font-semibold text-canvas"
            >
              {t.cta}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
