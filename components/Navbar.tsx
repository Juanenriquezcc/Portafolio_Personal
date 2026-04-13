"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    const closeMenuOnLarge = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnLarge);
    return () => window.removeEventListener("resize", closeMenuOnLarge);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur ${
        themeMode === "dark"
          ? "border-[#2ee3c3]/20 bg-[#121a28]/82"
          : "border-cyan-600/20 bg-[#f7fbff]/90"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6 md:px-8 lg:px-10 lg:py-3.5">
        <a
          href="#home"
          className={`flex flex-row items-center justify-center gap-1.5 md:justify-start ${
            themeMode === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#22e2c2]" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-[0.16em] sm:text-base lg:text-lg">DOBLE J</span>
        </a>

        <div className="mt-2.5 flex items-center justify-between gap-2 xl:hidden">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onLocaleChange("es")}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
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
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
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
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                themeMode === "dark"
                  ? "border-[#2ee3c3]/35 bg-[#17273a] text-[#8ef0df] hover:border-[#22e2c2]"
                  : "border-cyan-500/35 bg-white text-cyan-700 hover:border-cyan-600"
              }`}
              aria-label={themeMode === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {themeMode === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
              themeMode === "dark"
                ? "border-[#2ee3c3]/35 bg-[#17273a] text-[#8ef0df] hover:border-[#22e2c2]"
                : "border-cyan-500/35 bg-white text-cyan-700 hover:border-cyan-600"
            }`}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 xl:hidden ${menuOpen ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav
            className={`rounded-2xl border p-2 ${
              themeMode === "dark"
                ? "border-[#2ee3c3]/20 bg-[#162334]/85"
                : "border-cyan-600/20 bg-white/95"
            }`}
          >
            <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
              {currentItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center justify-center rounded-xl border px-2 py-2 text-center transition-colors duration-300 ${
                    active === item.href
                      ? "border-[#22e2c2] bg-[#22e2c2]/15 text-[#22e2c2]"
                      : themeMode === "dark"
                        ? "border-[#2ee3c3]/20 bg-[#17273a]/70 text-slate-200 hover:border-[#22e2c2] hover:text-[#22e2c2]"
                        : "border-cyan-600/20 bg-cyan-50/70 text-slate-700 hover:border-cyan-600 hover:text-cyan-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <nav
          className={`hidden items-center justify-center text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:flex ${
            themeMode === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-x-5 md:gap-x-5 lg:gap-x-7">
            {currentItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`group relative flex items-center justify-center px-1.5 py-1 text-center transition-colors duration-300 hover:text-[#22e2c2] ${
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

        <div className="hidden items-center justify-center gap-1.5 md:justify-end xl:flex">
          <button
            type="button"
            onClick={() => onLocaleChange("es")}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 lg:h-9 lg:w-9 ${
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
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 lg:h-9 lg:w-9 ${
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
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 lg:h-9 lg:w-9 ${
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
