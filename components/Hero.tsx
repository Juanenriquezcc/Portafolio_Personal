"use client";

import { useEffect, useState } from "react";

const roles = [
  "Ingeniero de Software",
  "Desarrollador Frontend",
  "Analista y creador de soluciones",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="grid grid-cols-1 justify-items-center gap-7 px-2 py-6 text-center md:py-8"
    >
      <p className="text-lg text-slate-300">
        Hola, <span className="text-[#4df2d8]">Soy</span>
      </p>

      <div className="space-y-2">
        <h1 className="bg-linear-to-r from-white via-[#9efaf0] to-[#22e2c2] bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow-[0_0_18px_rgba(34,226,194,0.35)] md:text-5xl">
          Nombre
        </h1>
        <h2 className="role-sequence h-8 text-xl font-semibold text-[#b7fbf1] md:text-2xl">
          {roles[roleIndex]}
        </h2>
      </div>

      <p className="max-w-3xl text-sm leading-8 text-slate-200 md:text-base">
        Descripcion: aqui puedes colocar un resumen profesional corto sobre tu
        perfil, experiencia, estudios, intereses y el valor que aportas en
        cada proyecto.
      </p>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <a
          href="tel:+573157614544"
          className="rounded-full border border-[#43ecd2]/45 bg-[#1a2a3d] px-6 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_22px_rgba(34,226,194,0.22)] transition-transform duration-500 hover:-translate-y-1"
        >
          Contacto: <span className="text-base text-[#4df2d8]">+57 XXX XXX XXXX</span>
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-slate-300">
        <span className="mr-2 text-sm text-slate-400">Tambien en</span>
        <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-xs font-semibold text-[#8ef0df] hover:border-[#22e2c2]">GH</a>
        <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-xs font-semibold text-[#8ef0df] hover:border-[#22e2c2]">In</a>
        <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-xs font-semibold text-[#8ef0df] hover:border-[#22e2c2]">Ig</a>
        <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-xs font-semibold text-[#8ef0df] hover:border-[#22e2c2]">Fb</a>
      </div>
    </section>
  );
}
