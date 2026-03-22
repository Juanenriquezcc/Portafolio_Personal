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

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const iconOffsets = useMemo(
    () =>
      bgIcons.map((icon) => ({
        x: (mouse.x - 0.5) * icon.driftX,
        y: (mouse.y - 0.5) * icon.driftY,
      })),
    [mouse.x, mouse.y],
  );

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_10%_12%,rgba(46,227,195,0.22),transparent_30%),radial-gradient(circle_at_86%_28%,rgba(34,226,194,0.14),transparent_34%),linear-gradient(180deg,#121a28_0%,#171f30_44%,#121a28_100%)]"
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
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-300/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-64 h-72 w-72 rounded-full bg-teal-300/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-300/15 blur-[120px]" />

      {bgIcons.map((icon, index) => (
        <span
          key={`${icon.label}-${icon.top}`}
          className={`bg-icon-water pointer-events-none absolute ${icon.size} select-none font-bold text-[#7ff3e1]/20`}
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

      <Navbar />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-28 md:px-10">
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
        <Footer />
      </main>
    </div>
  );
}
