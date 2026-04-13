type Locale = "es" | "en";

const services = [
  {
    title: "JavaScript",
    textEs: "Lo uso para crear interfaces interactivas, validaciones y logica del lado del cliente.",
    textEn: "I use it to build interactive interfaces, validations, and client-side logic.",
    icon: "JS",
  },
  {
    title: "TypeScript",
    textEs: "Me permite escribir codigo mas seguro y mantenible con tipado estatico en proyectos reales.",
    textEn: "It lets me write safer, more maintainable code with static typing in real projects.",
    icon: "TS",
  },
  {
    title: "React + Next.js",
    textEs: "Desarrollo vistas dinamicas y apps modernas con rutas, componentes reutilizables y SEO.",
    textEn: "I develop dynamic views and modern apps with routing, reusable components, and SEO.",
    icon: "RN",
  },
  {
    title: "SQL",
    textEs: "Diseno consultas para organizar datos, reportes y flujos de informacion en bases de datos.",
    textEn: "I design queries to organize data, reports, and information flows in databases.",
    icon: "DB",
  },
];

interface ServicesProps {
  locale: Locale;
}

export default function Services({ locale }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Perfil tecnico" : "Technical profile"}</p>
        <h3 className="text-3xl font-bold text-slate-100">{locale === "es" ? "Lenguajes Manejados" : "Languages I work with"}</h3>
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
            <p className="text-sm leading-7 text-slate-300">{locale === "es" ? service.textEs : service.textEn}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
