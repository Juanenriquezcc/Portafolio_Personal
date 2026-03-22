export default function AboutMe() {
  return (
    <section id="acerca" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Acerca de mi</p>
        <h3 className="text-3xl font-bold text-slate-100">Perfil Profesional</h3>
      </div>

      <article className="frosted-panel rounded-3xl p-7">
        <p className="text-sm leading-8 text-slate-300 md:text-base">
          Soy Juan Jose Enriquez Cordoba, estudiante de Ingenieria de Software
          en la Universidad Cooperativa de Colombia. Me enfoco en construir
          soluciones web funcionales, rapidas y mantenibles, combinando buenas
          practicas de desarrollo con interfaces modernas. Disfruto transformar
          ideas en productos reales, documentar procesos y mejorar continuamente
          la calidad del codigo para entregar resultados confiables.
        </p>
      </article>
    </section>
  );
}
