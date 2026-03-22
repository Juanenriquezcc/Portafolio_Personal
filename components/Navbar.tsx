"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "INICIO", href: "#home" },
  { label: "PROYECTOS", href: "#projects" },
  { label: "EXPERIENCIA", href: "#experiencia" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navItems
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
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2ee3c3]/20 bg-[#121a28]/82 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-10">
        <a href="#home" className="flex flex-row items-center gap-2 text-slate-100">
          <span className="h-2.5 w-2.5 rounded-full bg-[#22e2c2]" aria-hidden="true" />
          <span className="text-base font-semibold tracking-wide sm:text-lg">Portafolio</span>
        </a>

        <nav className="text-[10px] text-slate-300 sm:text-[11px] md:text-sm">
          <div className="flex flex-row flex-wrap items-center justify-end gap-x-3 gap-y-1 sm:gap-x-4 md:gap-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative transition-colors duration-300 hover:text-[#22e2c2] ${
                  active === item.href ? "text-[#22e2c2]" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#22e2c2] transition-transform duration-500 group-hover:scale-x-100 ${
                    active === item.href ? "scale-x-100" : ""
                  }`}
                />
              </a>
            ))}
          </div>
        </nav>

        <p className="hidden basis-64 text-right text-sm text-[#9deee0] lg:block">
          Construyendo experiencias digitales con detalle y dedicacion.
        </p>
      </div>
    </header>
  );
}
