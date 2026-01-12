import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CardGrid from '@/components/CardGrid';
import CTASection from '@/components/CTASection';
import StepCard from '@/components/StepCard';
import FeatureList from '@/components/FeatureList';
import { Moon, Baby, BookOpen, Dumbbell, Building2 } from 'lucide-react';

const Index = () => {
  const areas = [
    {
      title: 'Sueño adulto',
      description: 'Insomnio, despertares, sueño no reparador, estrés y agotamiento. También personas mayores.',
      href: '/sueno-adulto',
      icon: <Moon className="w-6 h-6" />,
    },
    {
      title: 'Sueño infantil y adolescente',
      description: 'Bebés, niños y adolescentes. Cuando duermen mejor, la familia respira mejor.',
      href: '/sueno-infantil',
      icon: <Baby className="w-6 h-6" />,
    },
    {
      title: 'Estudio y oposiciones',
      description: 'Estudiantes y opositores que necesitan optimizar su descanso para rendir más.',
      href: '/sueno-estudio-oposiciones',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Rendimiento deportivo',
      description: 'Deportistas y equipos que buscan mejorar su recuperación y rendimiento.',
      href: '/sueno-rendimiento-deportivo',
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: 'Empresas y equipos',
      description: 'Programas de sueño corporativo para equipos más descansados y productivos.',
      href: '/sueno-productividad-laboral',
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  const problems = [
    'Te cuesta quedarte dormido o te despiertas a mitad de noche',
    'Te levantas cansado aunque hayas dormido suficientes horas',
    'El estrés y las preocupaciones no te dejan descansar',
    'Tu rendimiento físico o mental está afectado por el cansancio',
    'Tu bebé o hijo tiene problemas para dormir y afecta a toda la familia',
    'Preparas oposiciones o estudias y no logras concentrarte',
  ];

  const steps = [
    {
      number: 1,
      title: 'Evaluar',
      description: 'Analizamos tu situación de forma integral: sueño, hábitos, cargas y contexto de vida.',
    },
    {
      number: 2,
      title: 'Intervenir',
      description: 'Diseñamos un plan personalizado basado en evidencia, adaptado a tu realidad.',
    },
    {
      number: 3,
      title: 'Reentrenar',
      description: 'Seguimiento y ajustes para consolidar mejoras y prevenir recaídas.',
    },
  ];

  return (
    <>
      <Hero
        title="Dormir mejor no es un lujo. Es la base silenciosa de tu rendimiento."
        subtitle="Nemuri Sleep es una consultoría de sueño y rendimiento. Te ayudamos a descansar mejor para que puedas vivir, trabajar y rendir al máximo de tu potencial."
        primaryCtaLabel="Hablemos por WhatsApp"
        useWhatsApp
        whatsappMessage="Hola, me gustaría saber más sobre los servicios de Nemuri Sleep."
        secondaryCtaLabel="Conoce el método"
        secondaryCtaHref="/metodo-nemuri"
        variant="large"
      />

      <Section title="¿Qué es Nemuri Sleep?" variant="alt">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Nemuri Sleep es una consultoría especializada en sueño y rendimiento. Trabajamos desde la neurofisiología del sueño, la cronobiología aplicada, la regulación autonómica (HRV/VFC) y la psicología del rendimiento.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Ayudamos a personas que quieren mejorar su descanso de forma real y sostenible:
          </p>
          <FeatureList
            items={[
              'Adultos con problemas de sueño, estrés y agotamiento',
              'Familias con bebés, niños y adolescentes',
              'Estudiantes y opositores',
              'Deportistas y equipos',
              'Empresas y equipos de trabajo',
            ]}
          />
          
          <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <p className="text-lg font-medium text-foreground italic text-center">
              "No se trata de dormir perfecto, sino de que el descanso deje de ser un problema y se convierta en un recurso estable."
            </p>
          </div>
        </div>
      </Section>

      <Section title="Áreas en las que puedo ayudarte">
        <CardGrid columns={3}>
          {areas.map((area) => (
            <Card
              key={area.href}
              title={area.title}
              description={area.description}
              href={area.href}
              icon={area.icon}
            />
          ))}
        </CardGrid>
      </Section>

      <Section
        title="Método Nemuri Sleep"
        subtitle="Un enfoque basado en evidencia: evaluar, intervenir, reentrenar."
        variant="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Section>

      <Section title="¿Te ves en alguno de estos puntos?">
        <div className="max-w-3xl">
          <FeatureList items={problems} />
        </div>
      </Section>

      <CTASection
        title="¿Empezamos?"
        subtitle="El primer paso es una conversación. Sin compromiso, hablamos de tu situación."
        buttonLabel="Escríbeme por WhatsApp"
        whatsappMessage="Hola, me gustaría saber cómo podéis ayudarme con mi descanso."
      />
    </>
  );
};

export default Index;
