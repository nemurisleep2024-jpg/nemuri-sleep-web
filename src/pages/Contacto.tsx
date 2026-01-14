import Hero from '@/components/Hero';
import Section from '@/components/Section';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Mail, Phone } from 'lucide-react';

const Contacto = () => {
  return (
    <>
      <Hero
        title="Hablemos sobre tu descanso."
        subtitle="El primer paso es una conversación. Sin compromiso, cuéntame tu situación."
        variant="small"
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-8">
            {/* WhatsApp */}
            <div>
              <WhatsAppButton
                message="Hola, me gustaría consultar sobre los servicios de Nemuri Sleep."
                label="Escríbeme por WhatsApp"
                size="lg"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Respondo personalmente en un plazo de 24-48h.
              </p>
            </div>

            {/* Email y Teléfono */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a 
                href="mailto:info@nemurisleep.es" 
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                info@nemurisleep.es
              </a>
              <a 
                href="tel:+34638119948" 
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                638 119 948
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-border bg-secondary/50">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Importante:</strong> Por favor, no envíes datos de salud sensibles por escrito. Esa información la trataremos en consulta de forma segura y confidencial.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contacto;
