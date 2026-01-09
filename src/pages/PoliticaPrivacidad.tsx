import Hero from '@/components/Hero';
import Section from '@/components/Section';

const PoliticaPrivacidad = () => {
  return (
    <>
      <Hero
        title="Política de Privacidad"
        variant="small"
      />

      <Section>
        <div className="max-w-3xl prose prose-gray">
          <p className="text-muted-foreground mb-6">
            En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), te informamos sobre el tratamiento de tus datos personales.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Responsable del tratamiento</h2>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li><strong>Identidad:</strong> [Nombre completo o razón social]</li>
            <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
            <li><strong>Dirección:</strong> [Dirección completa]</li>
            <li><strong>Correo electrónico:</strong> [Email de contacto]</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Finalidad del tratamiento</h2>
          <p className="text-muted-foreground mb-4">
            Tratamos los datos que nos facilitas para:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>• Gestionar las consultas y solicitudes de información.</li>
            <li>• Prestar los servicios contratados.</li>
            <li>• Enviar comunicaciones relacionadas con nuestros servicios (si has dado tu consentimiento).</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Legitimación</h2>
          <p className="text-muted-foreground mb-4">
            La base legal para el tratamiento de tus datos es:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>• Tu consentimiento al enviarnos una consulta.</li>
            <li>• La ejecución de un contrato cuando contratas nuestros servicios.</li>
            <li>• El interés legítimo del responsable.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Destinatarios</h2>
          <p className="text-muted-foreground mb-6">
            No se cederán datos a terceros, salvo obligación legal o para la prestación de servicios contratados (por ejemplo, plataformas de pago o herramientas de gestión).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Derechos del interesado</h2>
          <p className="text-muted-foreground mb-4">
            Tienes derecho a:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>• Acceder a tus datos personales.</li>
            <li>• Rectificar datos inexactos.</li>
            <li>• Solicitar la supresión de tus datos.</li>
            <li>• Oponerte al tratamiento.</li>
            <li>• Solicitar la limitación del tratamiento.</li>
            <li>• Solicitar la portabilidad de tus datos.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Para ejercer estos derechos, contacta con nosotros en [email de contacto] indicando tu solicitud y acompañando copia de tu DNI o documento identificativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Conservación de datos</h2>
          <p className="text-muted-foreground mb-6">
            Los datos se conservarán mientras se mantenga la relación y no se solicite su supresión, y en todo caso durante los plazos legales aplicables.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Reclamaciones</h2>
          <p className="text-muted-foreground mb-6">
            Si consideras que el tratamiento de tus datos no es adecuado, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
          </p>

          <p className="text-muted-foreground mt-8 text-sm">
            Última actualización: Enero 2025
          </p>
        </div>
      </Section>
    </>
  );
};

export default PoliticaPrivacidad;
