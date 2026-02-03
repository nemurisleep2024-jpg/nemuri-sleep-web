import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import StepCard from '@/components/StepCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const SuenoProductividadLaboral = () => {
  const costs = [
    'Presenteísmo: trabajadores físicamente presentes pero mentalmente agotados',
    'Errores y accidentes laborales por falta de atención',
    'Rotación y bajas por estrés y agotamiento',
    'Reducción de la creatividad y capacidad de decisión',
    'Peor clima laboral y relaciones entre equipos',
  ];

  const pcsSteps = [
    {
      number: 1,
      title: 'Evaluación',
      description: 'Diagnóstico del estado de sueño y fatiga del equipo mediante encuestas y análisis de indicadores.',
    },
    {
      number: 2,
      title: 'Talleres y formación',
      description: 'Sesiones prácticas sobre higiene de sueño, gestión del estrés y optimización del descanso.',
    },
    {
      number: 3,
      title: 'Plan y seguimiento',
      description: 'Implementación de mejoras y medición de resultados a medio plazo.',
    },
  ];

  return (
    <>
      <Hero
        title="Sueño y productividad laboral: equipos menos cansados, resultados más claros."
        subtitle="El cansancio crónico es invisible pero costoso. Trabajamos con empresas para mejorar el descanso de sus equipos y su impacto en productividad y bienestar."
        variant="small"
      />

      <Section title="El coste invisible del cansancio">
        <div className="max-w-3xl">
          <FeatureList items={costs} />
        </div>
      </Section>

      <Section title="Plan Corporativo del Sueño (PCS)" variant="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pcsSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
        <div className="text-center">
          <WhatsAppButton
            message="Hola, me interesa el Plan Corporativo del Sueño para mi empresa."
            label="Solicitar información del PCS"
          />
        </div>
      </Section>

      <CTASection
        title="¿Mejoramos el descanso de tu equipo?"
        subtitle="Cuéntame sobre tu empresa y diseñamos un plan adaptado."
        whatsappMessage="Hola, me interesa mejorar el sueño de mi equipo de trabajo."
      />
    </>
  );
};

export default SuenoProductividadLaboral;
