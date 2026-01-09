import Hero from '@/components/Hero';
import Section from '@/components/Section';

const AvisoLegal = () => {
  return (
    <>
      <Hero
        title="Aviso Legal"
        variant="small"
      />

      <Section>
        <div className="max-w-3xl prose prose-gray">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Datos identificativos</h2>
          <p className="text-muted-foreground mb-4">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li><strong>Titular:</strong> [Nombre completo o razón social]</li>
            <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
            <li><strong>Domicilio:</strong> [Dirección completa]</li>
            <li><strong>Correo electrónico:</strong> [Email de contacto]</li>
            <li><strong>Teléfono:</strong> 638 119 948</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Objeto</h2>
          <p className="text-muted-foreground mb-4">
            El presente Aviso Legal regula el uso del sitio web nemurisleep.com, del que es titular la persona física o jurídica indicada anteriormente.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Condiciones de uso</h2>
          <p className="text-muted-foreground mb-4">
            La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las condiciones aquí expuestas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Propiedad intelectual</h2>
          <p className="text-muted-foreground mb-4">
            Todos los contenidos del sitio web (textos, imágenes, diseño, logotipos, etc.) son propiedad del titular o cuenta con las licencias necesarias para su uso. Queda prohibida su reproducción sin autorización expresa.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Exclusión de responsabilidad</h2>
          <p className="text-muted-foreground mb-4">
            El titular no se hace responsable de los daños que pudieran derivarse del uso del sitio web, ni de la información contenida en el mismo, siendo esta de carácter orientativo.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Legislación aplicable</h2>
          <p className="text-muted-foreground mb-4">
            El presente Aviso Legal se rige por la legislación española. Para cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales del domicilio del titular.
          </p>

          <p className="text-muted-foreground mt-8 text-sm">
            Última actualización: Enero 2025
          </p>
        </div>
      </Section>
    </>
  );
};

export default AvisoLegal;
