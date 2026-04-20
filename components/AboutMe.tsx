export default function AboutMe() {
  return (
    <section id="acerca" className="fade-in-soft scroll-mt-28 space-y-6 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Acerca de mí</p>
        <h3 className="text-3xl font-bold text-slate-100">Perfil Profesional</h3>
      </div>

      <article className="frosted-panel rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-0.5">
        <p className="text-sm leading-8 text-slate-300 md:text-base">
          Soy Juan José Enríquez Córdoba, estudiante de Ingeniería de Software
          en la Universidad Cooperativa de Colombia. Me enfoco en construir
          soluciones web funcionales, rápidas y mantenibles, combinando buenas
          prácticas de desarrollo con interfaces modernas. Disfruto transformar
          ideas en productos reales, documentar procesos y mejorar continuamente
          la calidad del código para entregar resultados confiables.
        </p>
      </article>
    </section>
  );
}
