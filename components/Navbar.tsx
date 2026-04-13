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

  const goToSection = (href: string) => {
    const section = document.querySelector(href) as HTMLElement | null;
    if (!section) {
      window.history.replaceState(null, "", href);
      setActive(href);
      setMenuOpen(false);
      return;
    }

    const headerOffset = 92;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    setActive(href);
    setMenuOpen(false);
  };

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:gap-4 md:px-8 md:py-3.5 lg:gap-6 lg:px-10 lg:py-4">
        <a
          href="#home"
          className={`flex flex-row items-center gap-1.5 ${
            themeMode === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#22e2c2]" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-[0.16em] sm:text-base md:text-lg lg:text-xl">DOBLE J</span>
        </a>

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

        <div className="relative flex items-center justify-end gap-1.5">
          <button
            type="button"
            onClick={() => onLocaleChange("es")}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 md:h-9 md:w-9 lg:h-10 lg:w-10 ${
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
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 md:h-9 md:w-9 lg:h-10 lg:w-10 ${
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
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 md:h-9 md:w-9 lg:h-10 lg:w-10 ${
              themeMode === "dark"
                ? "border-[#2ee3c3]/35 bg-[#17273a] text-[#8ef0df] hover:border-[#22e2c2]"
                : "border-cyan-500/35 bg-white text-cyan-700 hover:border-cyan-600"
            }`}
            aria-label={themeMode === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {themeMode === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:hidden ${
              themeMode === "dark"
                ? "border-[#2ee3c3]/35 bg-[#17273a] text-[#8ef0df] hover:border-[#22e2c2]"
                : "border-cyan-500/35 bg-white text-cyan-700 hover:border-cyan-600"
            }`}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>

          <div
            className={`pointer-events-none absolute right-0 top-[calc(100%+0.55rem)] z-30 w-[min(19rem,calc(100vw-1.5rem))] origin-top-right transition-all duration-300 xl:hidden ${
              menuOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "-translate-y-1 scale-95 opacity-0"
            }`}
          >
            <nav
              className={`rounded-2xl border p-3 shadow-[0_14px_40px_-20px_rgba(15,23,42,0.6)] ${
                themeMode === "dark"
                  ? "border-[#2ee3c3]/20 bg-[#162334]/92"
                  : "border-cyan-600/20 bg-white/96"
              }`}
            >
              <ul className="flex flex-col text-[12px] sm:text-[13px]">
                {currentItems.map((item) => (
                  <li
                    key={`mobile-${item.label}`}
                    className={`border-b ${
                      themeMode === "dark" ? "border-[#2ee3c3]/15" : "border-cyan-600/15"
                    } last:border-b-0`}
                  >
                    <button
                      type="button"
                      onTouchEnd={(event) => {
                        event.preventDefault();
                        goToSection(item.href);
                      }}
                      onClick={() => goToSection(item.href)}
                      className={`block py-2.5 transition-all duration-200 active:scale-[0.99] ${
                        active === item.href
                          ? "text-[#22e2c2] drop-shadow-[0_0_10px_rgba(34,226,194,0.35)]"
                          : themeMode === "dark"
                            ? "text-slate-200 hover:text-[#22e2c2] active:text-[#22e2c2]"
                            : "text-slate-700 hover:text-cyan-700 active:text-cyan-700"
                      } w-full text-left`}
                      style={{ WebkitTapHighlightColor: "rgba(34, 226, 194, 0.18)" }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
