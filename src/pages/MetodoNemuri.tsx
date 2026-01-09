import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import StepCard from '@/components/StepCard';

const MetodoNemuri = () => {
  const steps = [
    {
      number: 1,
      title: 'Evaluar',
      description: 'Mapa completo de tu sueño, vida y cargas. Entendemos el problema desde la raíz: hábitos, ritmos, estrés, salud y contexto personal.',
    },
    {
      number: 2,
      title: 'Intervenir',
      description: 'Combinación personalizada de estrategias: regulación de ritmos, optimización de hábitos, técnicas de desactivación, manejo del entorno. En casos seleccionados, NESA como complemento.',
    },
    {
      number: 3,
      title: 'Reentrenar',
      description: 'Seguimiento activo, ajustes según evolución y construcción de hábitos sostenibles. Prevención de recaídas y autonomía progresiva.',
    },
  ];

  return (
    <>
      <Hero
        title="Método Nemuri Sleep: evaluar, intervenir, reentrenar."
        subtitle="Un enfoque basado en evidencia que integra neurofisiología del sueño, cronobiología, regulación autonómica y psicología del rendimiento."
        variant="small"
      />

      <Section>
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-muted-foreground">
            El sueño no es un botón que se pulsa. Es un sistema que se regula, se entrena y se cuida. Por eso el método Nemuri no busca soluciones rápidas sino cambios reales y sostenibles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">¿Qué hace diferente a este método?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            No aplicamos recetas genéricas. Cada persona tiene su contexto, sus limitaciones y sus posibilidades. El método se adapta a ti, no al revés.
          </p>
          <p className="text-lg text-muted-foreground">
            Trabajamos con lo que la ciencia sabe sobre el sueño, pero con los pies en la tierra: planes realistas, objetivos alcanzables, cambios que puedas mantener.
          </p>
        </div>
      </Section>

      <CTASection
        title="¿Cómo aplicaríamos el método en tu caso?"
        subtitle="Hablemos de tu situación y vemos qué podemos hacer juntos."
        whatsappMessage="Hola, me gustaría saber cómo aplicaríais el método Nemuri en mi caso."
      />
    </>
  );
};

export default MetodoNemuri;
