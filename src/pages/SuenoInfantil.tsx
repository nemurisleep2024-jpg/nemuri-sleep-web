import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import StepCard from '@/components/StepCard';

const SuenoInfantil = () => {
  const situations = [
    'Tu bebé se despierta muchas veces durante la noche',
    'Tu hijo tarda mucho en quedarse dormido',
    'Las pantallas y el móvil están afectando al sueño de tu adolescente',
    'Los despertares nocturnos están agotando a toda la familia',
    'Tu hijo tiene pesadillas o terrores nocturnos frecuentes',
    'El ritmo de sueño de tu bebé no encaja con la vida familiar',
  ];

  const ageGroups = [
    {
      title: '0–5 años',
      description: 'Bebés y primera infancia. Establecimiento de rutinas, despertares nocturnos, transiciones de siestas y autonomía de sueño.',
    },
    {
      title: '6–12 años',
      description: 'Edad escolar. Resistencia a acostarse, miedos nocturnos, calidad del sueño y rendimiento escolar.',
    },
    {
      title: '12–18 años',
      description: 'Adolescencia. Cronobiología cambiante, uso de pantallas, estrés académico y calidad de descanso.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Valoración inicial',
      description: 'Analizamos la situación de sueño de tu hijo/a y el contexto familiar.',
    },
    {
      number: 2,
      title: 'Plan personalizado',
      description: 'Diseñamos un plan adaptado a la edad, el temperamento y la realidad de tu familia.',
    },
    {
      number: 3,
      title: 'Seguimiento',
      description: 'Te acompañamos en la implementación con ajustes según la evolución.',
    },
  ];

  return (
    <>
      <Hero
        title="Sueño infantil y adolescente: cuando duermen mejor, la familia respira mejor."
        subtitle="Trabajamos con familias para mejorar el descanso de bebés, niños y adolescentes de forma respetuosa y basada en evidencia."
        variant="small"
      />

      <Section title="¿Te suena algo de esto?">
        <div className="max-w-3xl">
          <FeatureList items={situations} />
        </div>
      </Section>

      <Section title="Trabajo adaptado a cada etapa" variant="alt">
        <CardGrid columns={3}>
          {ageGroups.map((group) => (
            <Card
              key={group.title}
              title={group.title}
              description={group.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="Consulta para padres primerizos">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Si estás esperando un bebé o acabas de tenerlo, ofrecemos una consulta preventiva para establecer buenos hábitos de sueño desde el principio.
          </p>
          <p className="text-lg text-muted-foreground">
            También es un regalo perfecto para futuros padres que quieran empezar con buen pie.
          </p>
        </div>
      </Section>

      <Section title="Cómo trabajamos con familias" variant="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Section>

      <CTASection
        title="¿Hablamos del sueño de tu hijo/a?"
        subtitle="Cuéntame vuestra situación y vemos cómo puedo ayudaros."
        whatsappMessage="Hola, me gustaría consultar sobre el sueño de mi hijo/a."
      />
    </>
  );
};

export default SuenoInfantil;
