"use client";

import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import EngineeringBackground from "@/components/EngineeringBackground";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { sections, type Locale } from "@/data/site";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Scroll reveal: each [data-reveal] element fades in once when it enters the viewport.
  useEffect(() => {
    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    root.classList.add("reveal-ready");
    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip text-fg">
      <EngineeringBackground />
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main className="relative z-10 pt-16 md:pt-20">
        <Hero locale={locale} />
        <AboutMe locale={locale} />
        <Services locale={locale} />
        <Projects locale={locale} />
        <Experience locale={locale} />
        {sections.some((section) => section.id === "testimonials") && <Testimonials locale={locale} />}
        <ContactSection locale={locale} />
      </main>
      <div className="relative z-10">
        <Footer locale={locale} />
      </div>
    </div>
  );
}
