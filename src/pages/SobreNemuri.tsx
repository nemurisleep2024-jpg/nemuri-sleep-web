import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import FeatureList from '@/components/FeatureList';

const SobreNemuri = () => {
  const philosophy = [
    'Sin ciencia no hay criterio: todo lo que hacemos está basado en evidencia.',
    'Sin realismo no hay adherencia: planes que puedas cumplir, no utopías.',
    'Descanso como responsabilidad, no como premio: dormir bien es cuidarse.',
    'Cada persona es diferente: no hay recetas universales.',
    'Transparencia sobre lo que podemos y no podemos conseguir.',
  ];

  return (
    <>
      <Hero
        title="El sueño no es un lujo, es la base silenciosa de tu rendimiento."
        subtitle="Nemuri Sleep nace de la convicción de que dormir bien es un derecho y una herramienta de salud y rendimiento."
        variant="small"
      />

      <Section title="¿Qué es Nemuri Sleep?">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Nemuri Sleep es una consultoría de sueño y rendimiento. Trabajamos con personas, familias, deportistas y empresas que quieren mejorar su descanso de forma real y sostenible.
          </p>
          <p className="text-lg text-muted-foreground">
            Nuestro enfoque integra la neurofisiología del sueño, la cronobiología aplicada, la regulación autonómica (HRV/VFC) y la psicología del rendimiento. En casos seleccionados, complementamos con tecnología de neuromodulación (NESA X Signal).
          </p>
        </div>
      </Section>

      <Section title="Filosofía" variant="alt">
        <div className="max-w-3xl">
          <FeatureList items={philosophy} />
        </div>
      </Section>

      <Section title="Quién está detrás de Nemuri Sleep">
        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              Soy <strong className="text-foreground">Sergio J. Morejón</strong>, enfermero y consultor de sueño y rendimiento, fundador de Nemuri Sleep.
            </p>
            <p className="text-lg text-muted-foreground">
              Desde hace años acompaño a adultos, familias, deportistas, estudiantes y empresas a mejorar su descanso para algo más que "dormir mejor": tomar mejores decisiones, rendir de forma sostenible y volver a sentirse presentes en su propia vida.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Mi trabajo se apoya en cuatro pilares:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong className="text-foreground">Neurofisiología del sueño y cronobiología aplicada:</strong>
                  <span className="text-muted-foreground"> entender cómo funciona el sueño, los ritmos circadianos y el sistema nervioso autónomo para intervenir con criterio.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong className="text-foreground">Regulación autonómica y variabilidad de la frecuencia cardiaca (HRV/VFC):</strong>
                  <span className="text-muted-foreground"> utilizar esta información para valorar carga, recuperación y respuesta al estrés.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong className="text-foreground">Neuromodulación no invasiva con tecnología NESA X Signal</strong>
                  <span className="text-muted-foreground"> (solo presencial y en casos seleccionados), como herramienta complementaria dentro de un plan global.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong className="text-foreground">Psicología del rendimiento y hábitos sostenibles:</strong>
                  <span className="text-muted-foreground"> porque de poco sirve la teoría si no encaja con la vida real de cada persona, familia o equipo.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="De la clínica y la investigación al acompañamiento en consulta" variant="alt">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Mi formación de base es la enfermería, y a lo largo de los años he ido especializándome en:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong className="text-foreground">Sueño infantil:</strong>
                <span className="text-muted-foreground"> acompañando a familias con bebés, niños y adolescentes que no duermen bien y cuya vida diaria empieza a girar en torno al cansancio.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong className="text-foreground">Sueño adulto:</strong>
                <span className="text-muted-foreground"> insomnio, despertares, turnos, estrés, ansiedad y esa sensación de "duermo muchas horas, pero no descanso".</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong className="text-foreground">Rendimiento y recuperación en deportistas y opositores:</strong>
                <span className="text-muted-foreground"> ayudar a que el cuerpo y el sistema nervioso lleguen a los días clave con reserva, no solo con voluntad.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong className="text-foreground">Productividad laboral:</strong>
                <span className="text-muted-foreground"> trabajar con empresas y equipos para dejar de normalizar el cansancio crónico como parte de la cultura de trabajo.</span>
              </div>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground">
            Dedico parte de mi tiempo a la actualización científica y la investigación en sueño, sistema nervioso autónomo y neuromodulación no invasiva, y colaboro con otros profesionales sanitarios para integrar el sueño en una mirada realmente multidisciplinar.
          </p>
        </div>
      </Section>

      <CTASection
        title="¿Quieres saber más?"
        subtitle="Hablemos de cómo puedo ayudarte."
        whatsappMessage="Hola, me gustaría saber más sobre Nemuri Sleep y cómo trabajáis."
      />
    </>
  );
};

export default SobreNemuri;
