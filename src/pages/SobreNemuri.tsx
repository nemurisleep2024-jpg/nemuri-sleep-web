import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';

const SobreNemuri = () => {
  const philosophy = [
    'Sin ciencia no hay criterio: todo lo que hacemos está basado en evidencia.',
    'Sin realismo no hay adherencia: planes que puedas cumplir, no utopías.',
    'Descanso como responsabilidad, no como premio: dormir bien es cuidarse.',
    'Cada persona es diferente: no hay recetas universales.',
    'Transparencia sobre lo que podemos y no podemos conseguir.',
  ];

  return (
    <>
      <Hero
        title="El sueño no es un lujo, es la base silenciosa de tu rendimiento."
        subtitle="Nemuri Sleep nace de la convicción de que dormir bien es un derecho y una herramienta de salud y rendimiento."
        variant="small"
      />

      <Section title="¿Qué es Nemuri Sleep?">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Nemuri Sleep es una consultoría de sueño y rendimiento. Trabajamos con personas, familias, deportistas y empresas que quieren mejorar su descanso de forma real y sostenible.
          </p>
          <p className="text-lg text-muted-foreground">
            Nuestro enfoque integra la neurofisiología del sueño, la cronobiología aplicada, la regulación autonómica (HRV/VFC) y la psicología del rendimiento. En casos seleccionados, complementamos con tecnología de neuromodulación (NESA X Signal).
          </p>
        </div>
      </Section>

      <Section title="Filosofía" variant="alt">
        <div className="max-w-3xl">
          <FeatureList items={philosophy} />
        </div>
      </Section>

      <Section title="Sobre el profesional">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Detrás de Nemuri Sleep está Sergio J. Morejón, profesional especializado en sueño y rendimiento.
          </p>
          <p className="text-lg text-muted-foreground">
            [Espacio reservado para información adicional sobre formación, experiencia y trayectoria profesional.]
          </p>
        </div>
      </Section>

      <CTASection
        title="¿Quieres saber más?"
        subtitle="Hablemos de cómo puedo ayudarte."
        whatsappMessage="Hola, me gustaría saber más sobre Nemuri Sleep y cómo trabajáis."
      />
    </>
  );
};

export default SobreNemuri;
