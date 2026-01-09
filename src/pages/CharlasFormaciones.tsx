import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import { GraduationCap, Building2, Dumbbell, School } from 'lucide-react';

const CharlasFormaciones = () => {
  const audiences = [
    {
      title: 'Centros de educación infantil y colegios',
      description: 'Charlas para familias sobre sueño infantil, rutinas y hábitos saludables. Formaciones para profesorado sobre cómo el sueño afecta al aprendizaje.',
      icon: <School className="w-6 h-6" />,
    },
    {
      title: 'Institutos',
      description: 'Talleres para adolescentes sobre sueño, pantallas y rendimiento académico. Sesiones para familias sobre los cambios del sueño en la adolescencia.',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Empresas',
      description: 'Formaciones para equipos sobre higiene de sueño, gestión del estrés y productividad. Jornadas de bienestar corporativo.',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: 'Entidades deportivas',
      description: 'Charlas para deportistas y staff técnico sobre sueño, recuperación y rendimiento. Formaciones para clubes y federaciones.',
      icon: <Dumbbell className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <Hero
        title="Charlas y formaciones: educación sobre sueño para todos los públicos."
        subtitle="Llevamos el conocimiento sobre sueño y descanso a centros educativos, empresas y entidades deportivas."
        variant="small"
      />

      <Section title="Formatos adaptados a cada audiencia">
        <CardGrid columns={2}>
          {audiences.map((audience) => (
            <Card
              key={audience.title}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
            />
          ))}
        </CardGrid>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">Modalidades</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <strong>Charla única:</strong> Sesión de 1-2 horas sobre un tema específico.</li>
            <li>• <strong>Ciclo de charlas:</strong> Varias sesiones que profundizan en diferentes aspectos.</li>
            <li>• <strong>Jornada completa:</strong> Formación intensiva con teoría y práctica.</li>
            <li>• <strong>Formato online o presencial</strong> según necesidades.</li>
          </ul>
        </div>
      </Section>

      <CTASection
        title="¿Organizamos una charla o formación?"
        subtitle="Cuéntame qué tipo de entidad eres, cuántas personas participarían y qué objetivo buscas."
        buttonLabel="Solicitar información"
        whatsappMessage="Hola, me gustaría organizar una charla/formación sobre sueño. Somos [tipo de entidad], aproximadamente [número] personas, y nuestro objetivo es [objetivo]."
      />
    </>
  );
};

export default CharlasFormaciones;
