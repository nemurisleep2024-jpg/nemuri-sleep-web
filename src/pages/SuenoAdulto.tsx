import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import StepCard from '@/components/StepCard';

const SuenoAdulto = () => {
  const symptoms = [
    'Te cuesta quedarte dormido o te despiertas a las 3-4 de la mañana',
    'Duermes las horas pero te levantas cansado',
    'El estrés y la ansiedad no te dejan descansar',
    'Dependes de medicación para dormir y quieres reducirla',
    'Tu sueño ha empeorado con la edad',
    'El cansancio afecta a tu rendimiento y estado de ánimo',
  ];

  const steps = [
    {
      number: 1,
      title: 'Valoración integral',
      description: 'Evaluamos tu sueño, hábitos, estrés, salud y contexto de vida para entender el problema de raíz.',
    },
    {
      number: 2,
      title: 'Plan personalizado',
      description: 'Intervención basada en evidencia: higiene de sueño, regulación de ritmos, técnicas cognitivo-conductuales.',
    },
    {
      number: 3,
      title: 'Seguimiento y ajustes',
      description: 'Acompañamiento para consolidar mejoras. En casos seleccionados, NESA como apoyo (solo presencial, sesiones de 45 min).',
    },
  ];

  return (
    <>
      <Hero
        title="Sueño adulto: insomnio, despertares y sueño no reparador."
        subtitle="Trabajamos con adultos de todas las edades que quieren recuperar un descanso de calidad. También con personas mayores que notan cambios en su sueño."
        variant="small"
      />

      <Section title="¿Te suena algo de esto?">
        <div className="max-w-3xl">
          <FeatureList items={symptoms} />
        </div>
      </Section>

      <Section title="Sueño en personas mayores" variant="alt">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Con la edad el sueño cambia: se fragmenta más, se adelanta el horario, disminuye el sueño profundo. Algunos cambios son normales; otros, no.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Lo importante es distinguir qué es parte del envejecimiento y qué puede mejorarse. Resignarse no es la respuesta.
          </p>
          <p className="text-lg text-muted-foreground">
            Trabajamos con personas mayores para optimizar su descanso dentro de las posibilidades reales, mejorando calidad de vida y bienestar.
          </p>
        </div>
      </Section>

      <Section title="Cómo trabajamos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Section>

      <CTASection
        title="¿Recuperamos tu descanso?"
        subtitle="Cuéntame tu situación y vemos qué podemos hacer."
        whatsappMessage="Hola, me gustaría consultar sobre mi problema de sueño."
      />
    </>
  );
};

export default SuenoAdulto;
