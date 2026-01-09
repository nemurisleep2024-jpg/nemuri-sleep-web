import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import { Zap } from 'lucide-react';

const NesaXSignal = () => {
  const howItWorks = [
    'Electrodos adhesivos colocados en puntos específicos',
    'Microcorrientes imperceptibles que modulan el sistema nervioso',
    'Sesiones de 45 minutos en consulta presencial',
    'Protocolo personalizado según objetivos',
  ];

  const areas = [
    {
      title: 'Sueño y descanso',
      description: 'Apoyo en casos de insomnio, despertares y sueño no reparador asociados a hiperactivación del sistema nervioso.',
    },
    {
      title: 'Dolor crónico y musculoesquelético',
      description: 'Complemento en el abordaje de dolor persistente, fibromialgia y otras condiciones musculoesqueléticas.',
    },
    {
      title: 'Estrés, ansiedad y fatiga',
      description: 'Regulación del sistema nervioso autónomo en estados de estrés crónico y agotamiento.',
    },
    {
      title: 'Suelo pélvico',
      description: 'Apoyo en disfunciones seleccionadas relacionadas con la musculatura del suelo pélvico.',
    },
    {
      title: 'Deporte y recuperación',
      description: 'Optimización de la recuperación post-esfuerzo y regulación del balance simpático-parasimpático.',
    },
    {
      title: 'Abandono del tabaco',
      description: 'Trabajos preliminares muestran resultados prometedores como apoyo a los síntomas de abstinencia, dentro de un abordaje completo.',
    },
  ];

  return (
    <>
      <Hero
        title="NESA X Signal: neuromodulación no invasiva."
        subtitle="Tecnología de microcorrientes para regular el sistema nervioso autónomo. Solo disponible en consulta presencial."
        variant="small"
      />

      <Section title="Cómo se aplica">
        <div className="max-w-3xl">
          <FeatureList items={howItWorks} />
        </div>
      </Section>

      <Section title="Importante sobre la evidencia" variant="alt">
        <div className="max-w-3xl">
          <div className="p-6 rounded-2xl border border-border bg-background">
            <p className="text-muted-foreground">
              En muchos de los ámbitos de aplicación, la evidencia científica es todavía limitada y basada en estudios pequeños. Trabajamos con expectativas realistas, criterio clínico y transparencia sobre lo que podemos y no podemos esperar de esta tecnología.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Ámbitos de apoyo">
        <CardGrid columns={3}>
          {areas.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
              icon={<Zap className="w-6 h-6" />}
            />
          ))}
        </CardGrid>
      </Section>

      <CTASection
        title="¿NESA encaja en tu caso?"
        subtitle="Cuéntame tu situación y valoramos si puede ser útil para ti."
        buttonLabel="Pregúntame sobre NESA"
        whatsappMessage="Hola, me gustaría saber si NESA X Signal puede ayudarme en mi caso."
      />
    </>
  );
};

export default NesaXSignal;
