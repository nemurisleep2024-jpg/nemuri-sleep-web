import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Card from '@/components/Card';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';
import { Button } from '@/components/ui/button';
import { Zap, Moon, Heart, Brain, Activity, Cigarette } from 'lucide-react';
import { Link } from 'react-router-dom';

const NesaXSignal = () => {
  const sessionSteps = [
    'Se colocan electrodos adhesivos en puntos específicos (normalmente manos y pies).',
    'El dispositivo emite microcorrientes imperceptibles (no producen dolor ni contracción muscular).',
    'Te mantienes tumbad@ o reclinad@, en reposo, durante la sesión.',
    'La duración estándar es de aproximadamente 45 minutos por sesión.',
    'El protocolo se personaliza según la indicación, los objetivos y la respuesta de cada persona.',
  ];

  const evidencePoints = [
    'Expectativas realistas: NESA no es una cura milagrosa ni sustituye a un diagnóstico médico.',
    'Criterio clínico: valoramos en qué casos tiene sentido incluirla como apoyo y en cuáles no aporta valor.',
    'Transparencia: explicamos con claridad qué podemos esperar razonablemente y qué no de esta tecnología.',
  ];

  const methodSteps = [
    {
      title: 'Evaluar',
      description: 'Entender qué está ocurriendo: sueño, dolor, estrés, carga física y emocional, contexto personal y profesional.',
    },
    {
      title: 'Intervenir',
      description: 'Combinar higiene del sueño, cronobiología aplicada, ajustes de hábitos, abordajes físicos o conductuales y, cuando procede, neuromodulación no invasiva.',
    },
    {
      title: 'Reentrenar',
      description: 'Hacer seguimiento, ajustar el plan y consolidar cambios para que los resultados sean sostenibles en el tiempo.',
    },
  ];

  const candidatePoints = [
    'Has probado cambios de hábitos, tratamientos o fisioterapia y sigues con alteraciones de sueño, dolor o fatiga.',
    'Buscas un enfoque global del descanso y la regulación del sistema nervioso, no solo "una máquina más".',
    'Estás dispuesto/a a combinar la neuromodulación con cambios realistas en tu día a día.',
  ];

  const areas = [
    {
      title: 'Sueño y descanso',
      description: 'Apoyo en casos de insomnio, despertares y sueño no reparador asociados a hiperactivación del sistema nervioso. El objetivo es favorecer un estado de mayor regulación autonómica que acompañe al trabajo sobre horarios, hábitos, luz, pantallas y otros factores del sueño.',
      icon: <Moon className="w-6 h-6" />,
    },
    {
      title: 'Dolor crónico y musculoesquelético',
      description: 'Complemento en el abordaje de dolor persistente, fibromialgia y otras condiciones musculoesqueléticas, siempre integrado con los tratamientos médicos y de fisioterapia indicados en cada caso.',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Estrés, ansiedad y fatiga',
      description: 'Apoyo en estados de estrés crónico, ansiedad y agotamiento, donde el sistema nervioso autónomo tiende a permanecer en modo "alerta". La neuromodulación se utiliza aquí como una pieza más de un trabajo que incluye descanso, ritmo de vida, organización de cargas y estrategias de regulación.',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: 'Suelo pélvico',
      description: 'Apoyo en disfunciones seleccionadas relacionadas con la musculatura del suelo pélvico y el equilibrio autonómico, en coordinación con fisioterapia de suelo pélvico u otros profesionales cuando corresponde.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Deporte y recuperación',
      description: 'En deportistas, puede servir para favorecer la recuperación post-esfuerzo, ayudar en la regulación del balance simpático–parasimpático e integrarse dentro de un plan de sueño, descanso y control de carga. No sustituye al trabajo de preparación física ni a la planificación del entrenamiento: se suma a ellos.',
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: 'Abandono del tabaco',
      description: 'Existen trabajos preliminares y experiencias clínicas que muestran resultados prometedores al utilizar NESA X Signal como apoyo en el manejo de los síntomas de abstinencia, siempre dentro de un abordaje completo de deshabituación tabáquica (médico, psicológico y conductual).',
      icon: <Cigarette className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <Hero
        title="NESA X Signal: neuromodulación no invasiva."
        subtitle="Tecnología de microcorrientes para regular el sistema nervioso autónomo. Solo disponible en consulta presencial."
        variant="small"
      />

      <Section title="¿Qué es NESA X Signal?">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            NESA X Signal es un dispositivo de neuromodulación no invasiva que aplica microcorrientes de muy baja intensidad a través de electrodos adhesivos colocados en puntos específicos del cuerpo (habitualmente manos y pies).
          </p>
          <p className="text-lg text-muted-foreground">
            Su objetivo es modular la actividad del sistema nervioso autónomo —el que regula de forma automática procesos como el descanso, el estrés, la frecuencia cardiaca o la recuperación— como apoyo dentro de un plan de tratamiento global.
          </p>
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <p className="text-muted-foreground">
              En Nemuri Sleep utilizamos NESA X Signal solo en consulta presencial y en casos seleccionados, como complemento a otros abordajes (higiene del sueño, fisioterapia, trabajo conductual, regulación de hábitos, etc.).
            </p>
          </div>
        </div>
      </Section>

      <Section title="Cómo se aplica una sesión" variant="alt">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground mb-4">
            En una sesión típica:
          </p>
          <FeatureList items={sessionSteps} />
          <div className="p-6 rounded-2xl border border-border bg-background mt-6">
            <p className="text-muted-foreground">
              No se trata de "desenchufar y ya está", sino de integrar NESA dentro de una estrategia más amplia: descanso, movimiento, carga física, gestión del estrés, etc.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Importante sobre la evidencia científica">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            En muchos de los ámbitos de aplicación, la evidencia científica disponible es todavía limitada y basada en estudios pequeños o preliminares.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Por eso, en Nemuri Sleep trabajamos con:
          </p>
          <FeatureList items={evidencePoints} />
          <p className="text-muted-foreground mt-4">
            Siempre que es posible, se integra con otras intervenciones basadas en la mejor evidencia disponible (higiene del sueño, abordaje del dolor, fisioterapia, ejercicio, trabajo psicológico, etc.).
          </p>
        </div>
      </Section>

      <Section title="Ámbitos de apoyo" variant="alt">
        <div className="max-w-3xl mb-8">
          <p className="text-lg text-muted-foreground">
            NESA X Signal puede utilizarse como herramienta complementaria en distintos contextos, dentro de un plan global:
          </p>
        </div>
        <CardGrid columns={3}>
          {areas.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="Seguridad, contraindicaciones y selección de casos">
        <div className="max-w-3xl space-y-4">
          <p className="text-lg text-muted-foreground">
            Antes de iniciar cualquier protocolo con NESA X Signal:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-muted-foreground">Se realiza una valoración previa para conocer tu historia clínica, medicación y objetivos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-muted-foreground">Se revisan posibles contraindicaciones o precauciones (por ejemplo, dispositivos implantados, determinadas patologías, embarazo, etc.), que se valoran siempre de forma individual.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-muted-foreground">Si el caso requiere valoración médica específica o no encaja con este tipo de intervención, se explica con claridad y se orienta la derivación o el abordaje más adecuado.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Cómo integramos NESA en Nemuri Sleep" variant="alt">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            En Nemuri Sleep, NESA X Signal nunca se plantea como una solución aislada, sino como una herramienta más dentro del Método Nemuri:
          </p>
          <div className="space-y-4">
            {methodSteps.map((step, index) => (
              <div key={step.title} className="p-6 rounded-2xl border border-border bg-background">
                <h3 className="text-lg font-semibold mb-2">
                  <span className="text-primary">{index + 1}.</span> {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="¿Es NESA para ti?">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Puede tener sentido valorar NESA X Signal si:
          </p>
          <FeatureList items={candidatePoints} />
          <p className="text-muted-foreground mt-4">
            Si quieres saber si NESA X Signal encaja en tu caso concreto, el mejor primer paso es una valoración inicial.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">¿Quieres saber si NESA encaja en tu caso?</h2>
          <p className="text-lg text-muted-foreground">
            Cuéntame tu situación y valoramos si puede ser útil para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                const message = encodeURIComponent("Hola, me gustaría saber si NESA X Signal puede ayudarme en mi caso.");
                window.open(`https://wa.me/34638119948?text=${message}`, '_blank');
              }}
            >
              Quiero saber si NESA encaja en mi caso
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/contacto">Solicitar valoración inicial</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NesaXSignal;
