"use client";

import { useEffect, useState } from "react";

type Locale = "es" | "en";

const navItems = {
  es: [
    { label: "INICIO", href: "#home" },
    { label: "PROYECTOS", href: "#projects" },
    { label: "EXPERIENCIA", href: "#experiencia" },
    { label: "CONTACTO", href: "#contacto" },
  ],
  en: [
    { label: "HOME", href: "#home" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experiencia" },
    { label: "CONTACT", href: "#contacto" },
  ],
};

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [active, setActive] = useState("#home");
  const currentItems = navItems[locale];

  useEffect(() => {
    const sections = currentItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2ee3c3]/20 bg-[#121a28]/82 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-2 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 md:px-10 md:py-2.5">
        <a href="#home" className="flex flex-row items-center justify-center gap-1.5 text-slate-100 md:justify-start">
          <span className="h-2 w-2 rounded-full bg-[#22e2c2]" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-[0.16em] sm:text-base">DOBLE J</span>
        </a>

        <nav className="flex items-center justify-center text-[10px] text-slate-300 sm:text-[11px] md:text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-x-5 md:gap-x-6">
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

        <div className="flex items-center justify-center gap-1.5 md:justify-end">
          <button
            type="button"
            onClick={() => onLocaleChange("es")}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
              locale === "es"
                ? "border-[#22e2c2] bg-[#22e2c2] text-[#122033] shadow-[0_0_18px_rgba(34,226,194,0.28)]"
                : "border-[#2ee3c3]/30 bg-[#17273a] text-slate-200 hover:border-[#22e2c2]"
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
                : "border-[#2ee3c3]/30 bg-[#17273a] text-slate-200 hover:border-[#22e2c2]"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
