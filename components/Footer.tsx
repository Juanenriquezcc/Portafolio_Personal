export default function Footer() {
  return (
    <footer id="resume" className="rounded-3xl border border-emerald-500/20 bg-white/70 p-8 backdrop-blur">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="order-1 flex basis-full flex-col gap-3">
          <a href="#home" className="flex flex-row items-center gap-2 text-emerald-950">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-lg font-semibold">Portafolio</span>
          </a>
          <p className="max-w-xs text-sm leading-6 text-emerald-950/75">
            Portafolio personal orientado a desarrollo web moderno, buenas
            practicas y crecimiento continuo en cada proyecto.
          </p>
        </div>

        <div className="order-3 flex basis-full flex-col gap-2 sm:order-2">
          <p className="text-sm font-semibold text-emerald-950">Navegacion</p>
          <a href="#home" className="text-sm text-emerald-900/75 hover:text-emerald-600">
            Inicio
          </a>
          <a href="#projects" className="text-sm text-emerald-900/75 hover:text-emerald-600">
            Proyectos
          </a>
          <a href="#sobre-mi" className="text-sm text-emerald-900/75 hover:text-emerald-600">
            Sobre mi
          </a>
        </div>

        <div className="order-2 flex basis-full flex-col gap-3 sm:order-3">
          <p className="text-sm font-semibold text-emerald-950">Redes</p>
          <div className="grid grid-flow-col auto-cols-max gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs text-emerald-700">GH</a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs text-emerald-700">In</a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/35 bg-white/70 text-xs text-emerald-700">Ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
