import Hero from '@/components/Hero';
import Section from '@/components/Section';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
          <div className="text-center mb-12">
            <WhatsAppButton
              message="Hola, me gustaría consultar sobre los servicios de Nemuri Sleep."
              label="Escríbeme por WhatsApp"
              size="lg"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Respondo personalmente en un plazo de 24-48h.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-secondary/50 mb-12">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Importante:</strong> Por favor, no envíes datos de salud sensibles por escrito. Esa información la trataremos en consulta de forma segura y confidencial.
            </p>
          </div>

          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              O si lo prefieres, usa el formulario
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Motivo de consulta</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Ej: Sueño infantil, Insomnio adulto, Empresa..."
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame brevemente tu situación..."
                  className="rounded-xl min-h-[120px]"
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="btn-primary" disabled>
                  Enviar mensaje (próximamente)
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contacto;
