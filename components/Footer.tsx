import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="resume" className="rounded-3xl border border-[#2ee3c3]/20 bg-[#182334]/80 p-8 backdrop-blur">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="order-1 flex basis-full flex-col gap-3">
          <a href="#home" className="flex flex-row items-center gap-2 text-slate-100">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22e2c2]" aria-hidden="true" />
            <span className="text-lg font-semibold">Portafolio</span>
          </a>
          <p className="max-w-xs text-sm leading-6 text-slate-300">
            Portafolio personal orientado a desarrollo web moderno, buenas
            practicas y crecimiento continuo en cada proyecto.
          </p>
        </div>

        <div className="order-3 flex basis-full flex-col gap-2 sm:order-2">
          <p className="text-sm font-semibold text-slate-100">Navegacion</p>
          <a href="#home" className="text-sm text-slate-300 hover:text-[#22e2c2]">
            Inicio
          </a>
          <a href="#projects" className="text-sm text-slate-300 hover:text-[#22e2c2]">
            Proyectos
          </a>
          <a href="#sobre-mi" className="text-sm text-slate-300 hover:text-[#22e2c2]">
            Sobre mi
          </a>
        </div>

        <div className="order-2 flex basis-full flex-col gap-3 sm:order-3">
          <p className="text-sm font-semibold text-slate-100">Redes</p>
          <div className="grid grid-flow-col auto-cols-max gap-3">
            <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#1a2a3b] text-[#8ef0df]"><Github size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#1a2a3b] text-[#8ef0df]"><Linkedin size={16} /></a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#1a2a3b] text-[#8ef0df]"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#1a2a3b] text-[#8ef0df]"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
