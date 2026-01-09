import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';

const SuenoEstudioOposiciones = () => {
  const problems = [
    'Fatiga acumulada que afecta a la concentración y memoria',
    'Ansiedad nocturna que no te deja descansar',
    'Horarios de estudio que desregulan tu sueño',
    'Sensación de que necesitas más horas pero no rindes más',
    'Noches antes de exámenes sin poder dormir',
  ];

  const blocks = [
    {
      title: 'Rutina y evaluación de sueño',
      description: 'Analizamos tu patrón de sueño actual, tus horarios de estudio y cómo se afectan mutuamente.',
    },
    {
      title: 'Plan práctico de descanso',
      description: 'Diseñamos horarios realistas, estrategias de desconexión y optimización del tiempo de estudio.',
    },
    {
      title: 'Manejo de ansiedad de examen',
      description: 'Técnicas para gestionar la activación pre-examen y mejorar el descanso en períodos críticos.',
    },
  ];

  return (
    <>
      <Hero
        title="Sueño, estudio y oposiciones: no necesitas más horas, necesitas mejor descanso."
        subtitle="El sueño es clave para consolidar memoria y mantener la concentración. Si estudias u opositoras, dormir bien no es perder tiempo: es invertir en rendimiento."
        variant="small"
      />

      <Section title="¿Qué suele pasar?">
        <div className="max-w-3xl">
          <FeatureList items={problems} />
        </div>
      </Section>

      <Section title="Qué trabajamos" variant="alt">
        <CardGrid columns={3}>
          {blocks.map((block) => (
            <Card
              key={block.title}
              title={block.title}
              description={block.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="Apoyo con NESA (opcional)">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            En casos de alta activación o ansiedad persistente, podemos valorar el uso de NESA X Signal como apoyo puntual. Solo presencial, sesiones de 45 minutos.
          </p>
        </div>
      </Section>

      <CTASection
        title="¿Optimizamos tu descanso para estudiar mejor?"
        subtitle="Cuéntame tu situación y diseñamos un plan adaptado a tu preparación."
        whatsappMessage="Hola, estoy estudiando/opositando y me gustaría mejorar mi sueño para rendir más."
      />
    </>
  );
};

export default SuenoEstudioOposiciones;
