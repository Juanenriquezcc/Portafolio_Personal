"use client";

import { useMemo, useState } from "react";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/ProjectsBook";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

type Locale = "es" | "en";
type ThemeMode = "dark" | "light";

const bgIcons = [
  { label: "</>", top: "14%", left: "8%", size: "text-3xl", driftX: 22, driftY: 16 },
  { label: "{}", top: "24%", left: "82%", size: "text-4xl", driftX: 18, driftY: 20 },
  { label: "UI", top: "56%", left: "12%", size: "text-2xl", driftX: 24, driftY: 14 },
  { label: "UX", top: "70%", left: "86%", size: "text-2xl", driftX: 20, driftY: 15 },
  { label: "JS", top: "82%", left: "28%", size: "text-3xl", driftX: 16, driftY: 11 },
  { label: "TS", top: "38%", left: "60%", size: "text-2xl", driftX: 14, driftY: 12 },
  { label: "()", top: "10%", left: "24%", size: "text-2xl", driftX: 18, driftY: 12 },
  { label: "[]", top: "16%", left: "44%", size: "text-2xl", driftX: 15, driftY: 11 },
  { label: "API", top: "20%", left: "66%", size: "text-xl", driftX: 18, driftY: 13 },
  { label: "WEB", top: "30%", left: "18%", size: "text-xl", driftX: 17, driftY: 12 },
  { label: "SQL", top: "34%", left: "34%", size: "text-2xl", driftX: 14, driftY: 10 },
  { label: "DEV", top: "42%", left: "78%", size: "text-xl", driftX: 19, driftY: 14 },
  { label: "<>", top: "48%", left: "50%", size: "text-3xl", driftX: 12, driftY: 9 },
  { label: "#", top: "62%", left: "26%", size: "text-2xl", driftX: 16, driftY: 12 },
  { label: "%", top: "66%", left: "56%", size: "text-2xl", driftX: 14, driftY: 10 },
  { label: "*", top: "74%", left: "70%", size: "text-3xl", driftX: 20, driftY: 15 },
  { label: "NODE", top: "80%", left: "10%", size: "text-xl", driftX: 15, driftY: 11 },
  { label: "NEXT", top: "88%", left: "48%", size: "text-xl", driftX: 16, driftY: 10 },
  { label: "REACT", top: "90%", left: "76%", size: "text-xl", driftX: 15, driftY: 10 },
];

const ambientOrbs = [
  { top: "8%", left: "5%", size: "h-56 w-56", tint: "bg-cyan-300/18", driftX: 10, driftY: 7 },
  { top: "18%", left: "72%", size: "h-72 w-72", tint: "bg-teal-300/14", driftX: 12, driftY: 10 },
  { top: "56%", left: "4%", size: "h-64 w-64", tint: "bg-cyan-200/10", driftX: 14, driftY: 9 },
  { top: "72%", left: "74%", size: "h-80 w-80", tint: "bg-emerald-300/10", driftX: 11, driftY: 8 },
];

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [locale, setLocale] = useState<Locale>("es");
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  const iconOffsets = useMemo(
    () =>
      bgIcons.map((icon) => ({
        x: (mouse.x - 0.5) * icon.driftX,
        y: (mouse.y - 0.5) * icon.driftY,
      })),
    [mouse.x, mouse.y],
  );

  const orbOffsets = useMemo(
    () =>
      ambientOrbs.map((orb) => ({
        x: (mouse.x - 0.5) * orb.driftX,
        y: (mouse.y - 0.5) * orb.driftY,
      })),
    [mouse.x, mouse.y],
  );

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${themeMode === "light" ? "theme-light" : "theme-dark"} ${
        themeMode === "dark"
          ? "bg-[radial-gradient(circle_at_10%_12%,rgba(46,227,195,0.22),transparent_30%),radial-gradient(circle_at_86%_28%,rgba(34,226,194,0.14),transparent_34%),linear-gradient(180deg,#121a28_0%,#171f30_44%,#121a28_100%)]"
          : "bg-[radial-gradient(circle_at_12%_10%,rgba(29,192,178,0.25),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(66,153,225,0.20),transparent_34%),linear-gradient(180deg,#f6fcff_0%,#edf6ff_44%,#eaf5ff_100%)]"
      }`}
      onMouseMove={(event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        setMouse({ x, y });
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (!touch) return;
        const x = touch.clientX / window.innerWidth;
        const y = touch.clientY / window.innerHeight;
        setMouse({ x, y });
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-22" style={{ backgroundImage: "radial-gradient(rgba(46,227,195,0.14) 0.5px, transparent 0.5px)", backgroundSize: "3px 3px" }} />
      <div className={`pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full blur-[100px] ${themeMode === "dark" ? "bg-cyan-300/25" : "bg-cyan-400/20"}`} />
      <div className={`pointer-events-none absolute -right-20 top-64 h-72 w-72 rounded-full blur-[110px] ${themeMode === "dark" ? "bg-teal-300/20" : "bg-blue-300/20"}`} />
      <div className={`pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-[120px] ${themeMode === "dark" ? "bg-teal-300/15" : "bg-sky-300/20"}`} />
      <div className={`pointer-events-none absolute inset-0 opacity-60 ${themeMode === "dark" ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_24%,rgba(34,226,194,0.04)_52%,transparent_78%,rgba(255,255,255,0.02)_100%)]" : "bg-[linear-gradient(135deg,rgba(12,84,96,0.05)_0%,transparent_28%,rgba(55,125,255,0.06)_56%,transparent_78%,rgba(12,84,96,0.05)_100%)]"}`} />
      <div className={`pointer-events-none absolute inset-0 ${themeMode === "dark" ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,26,40,0.12)_62%,rgba(18,26,40,0.34)_100%)]" : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(213,232,247,0.18)_62%,rgba(227,240,250,0.28)_100%)]"}`} />

      {ambientOrbs.map((orb, index) => (
        <div
          key={`${orb.top}-${orb.left}`}
          className={`pointer-events-none absolute ${orb.size} rounded-full blur-[120px] ${themeMode === "dark" ? orb.tint : "bg-cyan-300/16"}`}
          style={{
            top: orb.top,
            left: orb.left,
            transform: `translate(${orbOffsets[index]?.x ?? 0}px, ${orbOffsets[index]?.y ?? 0}px)`,
            animationDelay: `${index * 0.8}s`,
          }}
        />
      ))}

      {bgIcons.map((icon, index) => (
        <span
          key={`${icon.label}-${icon.top}`}
          className={`bg-icon-water pointer-events-none absolute ${icon.size} select-none font-bold ${themeMode === "dark" ? "text-[#7ff3e1]/20" : "text-cyan-700/20"}`}
          style={{
            top: icon.top,
            left: icon.left,
            transform: `translate(${iconOffsets[index]?.x ?? 0}px, ${iconOffsets[index]?.y ?? 0}px)`,
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${5 + (index % 6)}s`,
          }}
        >
          {icon.label}
        </span>
      ))}

      <Navbar
        locale={locale}
        onLocaleChange={setLocale}
        themeMode={themeMode}
        onThemeModeChange={setThemeMode}
      />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-24 sm:gap-12 sm:px-5 md:gap-14 md:px-7 md:pt-26 lg:gap-16 lg:px-10 lg:pb-16 lg:pt-28">
        <Hero locale={locale} />
        <div className="section-divider" />
        <Services locale={locale} />
        <div className="section-divider" />
        <Projects locale={locale} themeMode={themeMode} />
        <div className="section-divider" />
        <Testimonials locale={locale} />
        <div className="section-divider" />
        <Experience locale={locale} />
        <div className="section-divider" />
        <ContactSection locale={locale} />
        <div className="section-divider" />
        <Footer locale={locale} />
      </main>
    </div>
  );
}
