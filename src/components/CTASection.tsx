import WhatsAppButton from './WhatsAppButton';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  whatsappMessage?: string;
}

const CTASection = ({
  title = '¿Empezamos?',
  subtitle = 'Da el primer paso hacia un mejor descanso.',
  buttonLabel = 'Escríbeme por WhatsApp',
  whatsappMessage = 'Hola, me gustaría saber más sobre los servicios de Nemuri Sleep.',
}: CTASectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container-nemuri">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {subtitle}
          </p>
          <WhatsAppButton message={whatsappMessage} label={buttonLabel} size="lg" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
