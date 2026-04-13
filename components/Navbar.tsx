"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Locale = "es" | "en";
type ThemeMode = "dark" | "light";

const navItems = {
  es: [
    { label: "INICIO", href: "#home" },
    { label: "PROYECTOS", href: "#projects" },
    { label: "TESTIMONIOS", href: "#testimonios" },
    { label: "EXPERIENCIA", href: "#experiencia" },
    { label: "CONTACTO", href: "#contacto" },
  ],
  en: [
    { label: "HOME", href: "#home" },
    { label: "PROJECTS", href: "#projects" },
    { label: "TESTIMONIALS", href: "#testimonios" },
    { label: "EXPERIENCE", href: "#experiencia" },
    { label: "CONTACT", href: "#contacto" },
  ],
};

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  themeMode: ThemeMode;
  onThemeModeChange: (mode: ThemeMode) => void;
}

export default function Navbar({ locale, onLocaleChange, themeMode, onThemeModeChange }: NavbarProps) {
  const [active, setActive] = useState("#home");
  const currentItems = navItems[locale];

  useEffect(() => {
    // Evita que el navegador restaure anclas al recargar y fuerza estado inicial en INICIO.
    if (window.location.hash && window.location.hash !== "#home") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    const updateActiveByScroll = () => {
      const headerHeight = 96;
      const probeLine = window.scrollY + headerHeight + window.innerHeight * 0.2;
      let current = currentItems[0].href;

      for (const item of currentItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (!section) continue;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (probeLine >= sectionTop && probeLine < sectionBottom) {
          current = item.href;
          break;
        }

        if (probeLine >= sectionTop) {
          current = item.href;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveByScroll);
      window.removeEventListener("resize", updateActiveByScroll);
    };
  }, [currentItems]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur ${
        themeMode === "dark"
          ? "border-[#2ee3c3]/20 bg-[#121a28]/82"
          : "border-cyan-600/20 bg-[#f7fbff]/90"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2.5 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-3.5">
        <a
          href="#home"
          className={`flex flex-row items-center justify-center gap-1.5 md:justify-start ${
            themeMode === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#22e2c2]" aria-hidden="true" />
          <span className="text-base font-semibold tracking-[0.16em] sm:text-lg">DOBLE J</span>
        </a>

        <nav
          className={`flex items-center justify-center text-[11px] sm:text-xs md:text-sm ${
            themeMode === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6 md:gap-x-7">
            {currentItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`group relative flex items-center justify-center px-2 py-1.5 text-center transition-colors duration-300 hover:text-[#22e2c2] ${
                  active === item.href ? "text-[#22e2c2]" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#22e2c2] transition-transform duration-500 group-hover:scale-x-100 ${
                    active === item.href ? "scale-x-100" : ""
                  }`}
                />
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-center gap-2 md:justify-end">
          <button
            type="button"
            onClick={() => onLocaleChange("es")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
              locale === "es"
                ? "border-[#22e2c2] bg-[#22e2c2] text-[#122033] shadow-[0_0_18px_rgba(34,226,194,0.28)]"
                : themeMode === "dark"
                  ? "border-[#2ee3c3]/30 bg-[#17273a] text-slate-200 hover:border-[#22e2c2]"
                  : "border-cyan-500/35 bg-white text-slate-700 hover:border-cyan-600"
            }`}
            aria-label="Cambiar a español"
          >
            ES
          </button>
          <button
            type="button"
            onClick={() => onLocaleChange("en")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
              locale === "en"
                ? "border-[#22e2c2] bg-[#22e2c2] text-[#122033] shadow-[0_0_18px_rgba(34,226,194,0.28)]"
                : themeMode === "dark"
                  ? "border-[#2ee3c3]/30 bg-[#17273a] text-slate-200 hover:border-[#22e2c2]"
                  : "border-cyan-500/35 bg-white text-slate-700 hover:border-cyan-600"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => onThemeModeChange(themeMode === "dark" ? "light" : "dark")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
              themeMode === "dark"
                ? "border-[#2ee3c3]/35 bg-[#17273a] text-[#8ef0df] hover:border-[#22e2c2]"
                : "border-cyan-500/35 bg-white text-cyan-700 hover:border-cyan-600"
            }`}
            aria-label={themeMode === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {themeMode === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
}
