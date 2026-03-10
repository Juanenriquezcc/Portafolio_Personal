const services = [
  {
    title: "JavaScript",
    text: "Lo uso para crear interfaces interactivas, validaciones y logica del lado del cliente.",
    icon: "JS",
  },
  {
    title: "TypeScript",
    text: "Me permite escribir codigo mas seguro y mantenible con tipado estatico en proyectos reales.",
    icon: "TS",
  },
  {
    title: "React + Next.js",
    text: "Desarrollo vistas dinamicas y apps modernas con rutas, componentes reutilizables y SEO.",
    icon: "RN",
  },
  {
    title: "SQL",
    text: "Diseno consultas para organizar datos, reportes y flujos de informacion en bases de datos.",
    icon: "DB",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Perfil tecnico</p>
        <h3 className="text-3xl font-bold text-slate-100">Lenguajes Manejados</h3>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="frosted-panel flex flex-col items-center gap-5 rounded-2xl p-6 text-center transition-transform duration-500 hover:-translate-y-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22e2c2]/15 text-sm font-semibold text-[#8ef0df]">
              {service.icon}
            </span>
            <h4 className="text-xl font-semibold text-slate-100">{service.title}</h4>
            <p className="text-sm leading-7 text-slate-300">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
