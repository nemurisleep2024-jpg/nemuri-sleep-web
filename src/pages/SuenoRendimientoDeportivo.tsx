import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const SuenoRendimientoDeportivo = () => {
  const problems = [
    'Recuperación incompleta entre entrenamientos o competiciones',
    'Hiperactivación post-entrenamiento que no te deja dormir',
    'Fatiga acumulada que afecta al rendimiento',
    'Jet lag o desajustes por viajes y competiciones',
    'Sueño fragmentado en concentraciones o previo a competiciones',
  ];

  const services = [
    {
      title: 'Evaluación de sueño y recuperación',
      description: 'Análisis del patrón de sueño, carga de entrenamiento, viajes y uso de HRV cuando procede.',
    },
    {
      title: 'Plan de sueño y recuperación',
      description: 'Estrategias de descanso adaptadas al calendario deportivo, incluyendo viajes y competiciones.',
    },
    {
      title: 'Gestión del estrés competitivo',
      description: 'Técnicas para manejar la activación pre-competición y optimizar el descanso cuando más cuenta.',
    },
  ];

  return (
    <>
      <Hero
        title="Sueño y rendimiento deportivo: dormir mejor también gana partidos."
        subtitle="El sueño es un factor de rendimiento tan importante como el entrenamiento o la nutrición. Trabajamos con deportistas individuales y equipos."
        variant="small"
      />

      <Section>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="btn-outline" asChild>
            <a href="#deportistas">Soy deportista</a>
          </Button>
          <Button variant="outline" className="btn-outline" asChild>
            <a href="#clubes">Soy club / entidad</a>
          </Button>
        </div>
      </Section>

      <Section title="¿Qué suele fallar?" variant="alt" id="deportistas">
        <div className="max-w-3xl">
          <FeatureList items={problems} />
        </div>
      </Section>

      <Section title="Qué trabajamos">
        <CardGrid columns={3}>
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">NESA como complemento</h3>
          <p className="text-lg text-muted-foreground">
            En casos seleccionados, NESA X Signal puede ser un complemento útil para la recuperación y regulación del sistema nervioso autónomo. Solo presencial, sesiones de 45 minutos.
          </p>
        </div>
      </Section>

      <Section id="clubes">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Para deportistas individuales
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Programa personalizado de sueño y recuperación adaptado a tu deporte, calendario y objetivos.
          </p>
          <WhatsAppButton
            message="Hola, soy deportista y me gustaría mejorar mi sueño y recuperación."
            label="Soy deportista, hablemos"
          />
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Para clubes y entidades deportivas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Programas de sueño para equipos: evaluación grupal, formación a staff técnico y seguimiento de deportistas.
          </p>
          <WhatsAppButton
            message="Hola, represento a un club/entidad deportiva y nos interesa trabajar el sueño del equipo."
            label="Soy club/entidad, hablemos"
          />
        </div>
      </Section>
    </>
  );
};

export default SuenoRendimientoDeportivo;
