import SleepCalculator from '@/components/SleepCalculator';
import CTASection from '@/components/CTASection';

const CalculadoraSueno = () => {
  return (
    <>
      <SleepCalculator />
      
      <CTASection
        title="¿Quieres saber más sobre el Plan Corporativo del Sueño?"
        subtitle="Cuéntame sobre tu empresa y diseñamos un plan adaptado a vuestras necesidades."
        whatsappMessage="Hola, he usado la calculadora y me interesa saber más sobre el Plan Corporativo del Sueño."
      />
    </>
  );
};

export default CalculadoraSueno;
