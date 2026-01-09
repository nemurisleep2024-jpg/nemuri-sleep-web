import Hero from '@/components/Hero';
import Section from '@/components/Section';

const PoliticaCookies = () => {
  return (
    <>
      <Hero
        title="Política de Cookies"
        variant="small"
      />

      <Section>
        <div className="max-w-3xl prose prose-gray">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p className="text-muted-foreground mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un período de tiempo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. ¿Qué cookies utilizamos?</h2>
          
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies técnicas (necesarias)</h3>
          <p className="text-muted-foreground mb-4">
            Son imprescindibles para el funcionamiento del sitio web. Permiten funciones básicas como la navegación entre páginas y el acceso a áreas seguras.
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>• <strong>cookie-consent:</strong> Almacena tu preferencia sobre el uso de cookies. Duración: 1 año.</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Cookies de análisis (opcionales)</h3>
          <p className="text-muted-foreground mb-6">
            Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima. Solo se activan si das tu consentimiento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. ¿Cómo gestionar las cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Puedes configurar tu navegador para bloquear o eliminar cookies. A continuación te indicamos cómo hacerlo en los navegadores más comunes:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>• <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li>• <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
            <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            <li>• <strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Ten en cuenta que bloquear algunas cookies puede afectar a la funcionalidad del sitio web.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Actualizaciones</h2>
          <p className="text-muted-foreground mb-6">
            Esta política de cookies puede actualizarse. Te recomendamos revisarla periódicamente.
          </p>

          <p className="text-muted-foreground mt-8 text-sm">
            Última actualización: Enero 2025
          </p>
        </div>
      </Section>
    </>
  );
};

export default PoliticaCookies;
