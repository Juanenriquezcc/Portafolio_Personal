"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      className="frosted-panel grid grid-cols-1 gap-8 rounded-3xl p-7 shadow-[0_20px_80px_-40px_rgba(34,197,94,0.45)] md:grid-cols-12 md:grid-rows-1 lg:p-10"
    >
      <div className="col-span-1 col-start-1 col-end-2 row-span-1 flex flex-col justify-center gap-6 md:col-span-6 md:col-start-1 md:col-end-7">
        <p className="text-lg text-emerald-950/80">
          Hola, <span className="text-emerald-300">Soy</span>
        </p>
        <div className="space-y-2">
          <h1 className="bg-linear-to-r from-emerald-950 to-emerald-600 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
            Nombre
          </h1>
          <h2 className="role-sequence h-8 text-xl text-emerald-700 md:text-2xl">
            {roles[roleIndex]}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-emerald-950/75 md:text-base">
          Descripcion: aqui puedes colocar un resumen profesional corto sobre tu
          perfil, experiencia, estudios, intereses y el valor que aportas en
          cada proyecto.
        </p>
        <div className="flex flex-row items-center gap-4">
          <a
            href="tel:+573157614544"
            className="rounded-full border border-emerald-500/35 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-800 transition-transform duration-500 hover:-translate-y-1"
          >
            Contacto: <span className="text-base text-emerald-600">+57 XXX XXX XXXX</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-emerald-900/70">
          <span className="mr-2 text-sm text-emerald-800/70">Tambien en</span>
          <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs font-semibold text-emerald-700 hover:border-emerald-500">GH</a>
          <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs font-semibold text-emerald-700 hover:border-emerald-500">In</a>
          <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs font-semibold text-emerald-700 hover:border-emerald-500">Ig</a>
          <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs font-semibold text-emerald-700 hover:border-emerald-500">Fb</a>
        </div>
      </div>

      <div className="col-span-1 col-start-1 col-end-2 row-span-1 flex flex-row-reverse items-center justify-center md:col-span-6 md:col-start-7 md:col-end-13">
        <div className="group relative">
          <div className="h-80 w-72 rounded-[2.5rem] bg-linear-to-b from-emerald-400 to-green-600/70 p-0.5 transition-transform duration-500 group-hover:scale-105 md:h-96 md:w-80">
            <div className="h-full w-full overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_center,#dff6e2_0%,#f3fbf4_72%)]">
              <Image
                src="/profile-avatar.svg"
                alt="Designer profile"
                width={520}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 left-1/2 h-10 w-44 -translate-x-1/2 rounded-full bg-emerald-400/35 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
