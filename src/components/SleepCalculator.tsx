import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calculator, ArrowDown } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface CalculatorResult {
  costTotal: number;
  riskLevel: 'green' | 'amber' | 'red';
  riskScore: number;
}

const SleepCalculator = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [employees, setEmployees] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [daysHalfSpeed, setDaysHalfSpeed] = useState<string>('');
  const [sleepAttribution, setSleepAttribution] = useState<string>('');
  const [companyCulture, setCompanyCulture] = useState<string>('');
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!employees || parseInt(employees) < 1) {
      newErrors.employees = 'Por favor, indica el número de empleados (mínimo 1)';
    }
    if (!salary) {
      newErrors.salary = 'Por favor, selecciona el rango salarial';
    }
    if (!daysHalfSpeed) {
      newErrors.daysHalfSpeed = 'Por favor, selecciona una opción';
    }
    if (!sleepAttribution) {
      newErrors.sleepAttribution = 'Por favor, selecciona una opción';
    }
    if (!companyCulture) {
      newErrors.companyCulture = 'Por favor, selecciona una opción';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateImpact = () => {
    if (!validateForm()) return;

    // P2 - Salary mapping
    const salaryMap: Record<string, number> = {
      'less-18k': 16000,
      '18k-24k': 21000,
      '24k-30k': 27000,
      '30k-40k': 35000,
      'more-40k': 45000,
    };
    const SALARIO_MEDIO = salaryMap[salary];
    const COSTE_ANUAL = SALARIO_MEDIO * 1.25;
    const DIAS_LAB = 220;
    const COSTE_DIA = COSTE_ANUAL / DIAS_LAB;

    // P3 - Days half speed mapping
    const daysMap: Record<string, number> = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3-4': 3.5,
      '5+': 6,
    };
    const VALOR_P3 = daysMap[daysHalfSpeed];
    const DIAS_MEDIO_GAS_AÑO = VALOR_P3 * 12;

    // P4 - Sleep attribution mapping
    const sleepMap: Record<string, number> = {
      'less-25': 0.2,
      '25-50': 0.4,
      '50-75': 0.6,
      'more-75': 0.8,
    };
    const F_SUEÑO = sleepMap[sleepAttribution];
    const DIAS_SUEÑO_AÑO = DIAS_MEDIO_GAS_AÑO * F_SUEÑO;
    const DIAS_EQUIV_PERDIDOS = DIAS_SUEÑO_AÑO * 0.4;

    // Calculate total cost
    const N_EMP = parseInt(employees);
    const COSTE_TOTAL = N_EMP * DIAS_EQUIV_PERDIDOS * COSTE_DIA;
    const costRounded = Math.round(COSTE_TOTAL / 1000) * 1000;

    // Risk score calculation
    const riskP3Map: Record<string, number> = {
      '0': 0,
      '1': 2,
      '2': 4,
      '3-4': 6,
      '5+': 8,
    };
    const riskP4Map: Record<string, number> = {
      'less-25': 1,
      '25-50': 2,
      '50-75': 3,
      'more-75': 4,
    };
    const RIESGO_TOTAL = riskP3Map[daysHalfSpeed] + riskP4Map[sleepAttribution];

    let riskLevel: 'green' | 'amber' | 'red';
    if (RIESGO_TOTAL <= 3) {
      riskLevel = 'green';
    } else if (RIESGO_TOTAL <= 7) {
      riskLevel = 'amber';
    } else {
      riskLevel = 'red';
    }

    setResult({
      costTotal: costRounded,
      riskLevel,
      riskScore: RIESGO_TOTAL,
    });
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value) + ' €';
  };

  const getRiskContent = () => {
    if (!result) return null;

    switch (result.riskLevel) {
      case 'green':
        return {
          badge: '🟢 Riesgo bajo por descanso insuficiente',
          badgeClass: 'bg-green-100 text-green-800 border-green-200',
          cardClass: 'border-green-200 bg-green-50/50',
          text: 'Según tus respuestas, el cansancio y la falta de descanso tienen un impacto moderado pero controlable en vuestro rendimiento.',
          finalPhrase: 'Este es el mejor momento para prevenir antes de que el problema crezca.',
        };
      case 'amber':
        return {
          badge: '🟠 Riesgo moderado: el cansancio ya se nota',
          badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
          cardClass: 'border-amber-200 bg-amber-50/50',
          text: 'El cansancio y el mal descanso ya están afectando a la claridad mental y al rendimiento diario de tu equipo.',
          finalPhrase: 'No es un problema de compromiso. Es que un cerebro agotado rinde peor, decide peor y se concentra menos.',
        };
      case 'red':
        return {
          badge: '🔴 Riesgo alto: el descanso es ya un factor crítico',
          badgeClass: 'bg-red-100 text-red-800 border-red-200',
          cardClass: 'border-red-200 bg-red-50/50',
          text: 'El descanso se ha convertido en un riesgo silencioso para la productividad, la toma de decisiones y la estabilidad de tu equipo.',
          finalPhrase: 'Hablamos de decisiones más lentas, más errores, más rotación y más desgaste emocional.',
        };
    }
  };

  const riskContent = getRiskContent();

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container-nemuri">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Calculadora del Sueño Nemuri para Empresas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En menos de 1 minuto, estima cuánto dinero pierde tu empresa por el cansancio y la falta de descanso de tu equipo.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="prose prose-lg text-muted-foreground mb-8">
            <p>
              No se trata solo de personas cansadas.
            </p>
            <p>
              Se trata de decisiones más lentas, más errores, más rotación y proyectos que avanzan a mitad de velocidad.
            </p>
            <p>
              Esta calculadora exprés no pretende ser una auditoría completa, pero te da una cifra clara para empezar: una estimación anual de la productividad que podríais estar perdiendo por dormir mal.
            </p>
          </div>

          <Button onClick={scrollToForm} className="mb-12">
            <Calculator className="w-5 h-5 mr-2" />
            Calcular impacto del sueño en mi empresa
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>

          {/* Form Card */}
          <div ref={formRef} className="bg-background rounded-2xl shadow-soft p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Responde estas 5 preguntas rápidas
            </h3>

            <div className="space-y-8">
              {/* P1 - Number of employees */}
              <div className="space-y-3">
                <Label htmlFor="employees" className="text-base font-medium">
                  ¿Cuántas personas trabajan en tu empresa (aproximadamente)?
                </Label>
                <Input
                  id="employees"
                  type="number"
                  min="1"
                  placeholder="Ej.: 15, 40, 120…"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className={errors.employees ? 'border-red-500' : ''}
                />
                {errors.employees && (
                  <p className="text-sm text-red-500">{errors.employees}</p>
                )}
              </div>

              {/* P2 - Salary range */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  ¿Cuál es el salario bruto medio anual por empleado? (aproximado)
                </Label>
                <RadioGroup value={salary} onValueChange={setSalary} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="less-18k" id="salary-1" />
                    <Label htmlFor="salary-1" className="font-normal cursor-pointer">
                      Menos de 18.000 €/año
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="18k-24k" id="salary-2" />
                    <Label htmlFor="salary-2" className="font-normal cursor-pointer">
                      18.000–24.000 €/año
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="24k-30k" id="salary-3" />
                    <Label htmlFor="salary-3" className="font-normal cursor-pointer">
                      24.000–30.000 €/año
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="30k-40k" id="salary-4" />
                    <Label htmlFor="salary-4" className="font-normal cursor-pointer">
                      30.000–40.000 €/año
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="more-40k" id="salary-5" />
                    <Label htmlFor="salary-5" className="font-normal cursor-pointer">
                      Más de 40.000 €/año
                    </Label>
                  </div>
                </RadioGroup>
                {errors.salary && (
                  <p className="text-sm text-red-500">{errors.salary}</p>
                )}
              </div>

              {/* P3 - Days half speed */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  De media, al mes, ¿cuántos días dirías que la gente "está, pero no rinde" por cansancio?
                </Label>
                <RadioGroup value={daysHalfSpeed} onValueChange={setDaysHalfSpeed} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="0" id="days-0" />
                    <Label htmlFor="days-0" className="font-normal cursor-pointer">0 días</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="1" id="days-1" />
                    <Label htmlFor="days-1" className="font-normal cursor-pointer">1 día</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="2" id="days-2" />
                    <Label htmlFor="days-2" className="font-normal cursor-pointer">2 días</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="3-4" id="days-3-4" />
                    <Label htmlFor="days-3-4" className="font-normal cursor-pointer">3–4 días</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="5+" id="days-5" />
                    <Label htmlFor="days-5" className="font-normal cursor-pointer">5 o más días</Label>
                  </div>
                </RadioGroup>
                {errors.daysHalfSpeed && (
                  <p className="text-sm text-red-500">{errors.daysHalfSpeed}</p>
                )}
              </div>

              {/* P4 - Sleep attribution */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  De esos días "a medio gas", ¿qué parte crees que se debe a cansancio y mal descanso?
                </Label>
                <RadioGroup value={sleepAttribution} onValueChange={setSleepAttribution} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="less-25" id="sleep-1" />
                    <Label htmlFor="sleep-1" className="font-normal cursor-pointer">Menos del 25%</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="25-50" id="sleep-2" />
                    <Label htmlFor="sleep-2" className="font-normal cursor-pointer">Entre el 25% y el 50%</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="50-75" id="sleep-3" />
                    <Label htmlFor="sleep-3" className="font-normal cursor-pointer">Entre el 50% y el 75%</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="more-75" id="sleep-4" />
                    <Label htmlFor="sleep-4" className="font-normal cursor-pointer">Más del 75%</Label>
                  </div>
                </RadioGroup>
                {errors.sleepAttribution && (
                  <p className="text-sm text-red-500">{errors.sleepAttribution}</p>
                )}
              </div>

              {/* P5 - Company culture */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  ¿Con cuál de estas frases te identificas más como empresa?
                </Label>
                <RadioGroup value={companyCulture} onValueChange={setCompanyCulture} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="culture-1" id="culture-1" />
                    <Label htmlFor="culture-1" className="font-normal cursor-pointer">
                      Aquí la gente suele descansar bien, pero siempre hay picos de estrés.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="culture-2" id="culture-2" />
                    <Label htmlFor="culture-2" className="font-normal cursor-pointer">
                      Sabemos que se duerme peor de lo que se admite, pero nunca lo hemos medido.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="culture-3" id="culture-3" />
                    <Label htmlFor="culture-3" className="font-normal cursor-pointer">
                      El cansancio y el "ir arrastrando el día" son algo bastante habitual.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="culture-4" id="culture-4" />
                    <Label htmlFor="culture-4" className="font-normal cursor-pointer">
                      Vivimos en modo urgencia constante. El descanso casi nunca entra en la ecuación.
                    </Label>
                  </div>
                </RadioGroup>
                {errors.companyCulture && (
                  <p className="text-sm text-red-500">{errors.companyCulture}</p>
                )}
              </div>

              {/* Submit button */}
              <Button onClick={calculateImpact} size="lg" className="w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                Calcular impacto
              </Button>
            </div>
          </div>

          {/* Result Card */}
          {result && riskContent && (
            <div className={`mt-8 rounded-2xl border-2 p-6 sm:p-8 lg:p-10 ${riskContent.cardClass}`}>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border ${riskContent.badgeClass}`}>
                {riskContent.badge}
              </div>

              <p className="text-lg text-foreground mb-6">
                {riskContent.text}
              </p>

              <div className="bg-background/80 rounded-xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Estimación económica anual:</p>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {formatCurrency(result.costTotal)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">al año en productividad perdida</p>
              </div>

              <p className="text-lg font-medium text-foreground italic">
                {riskContent.finalPhrase}
              </p>

              {/* CTA Section */}
              <div className="mt-10 pt-8 border-t border-current/10">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  ¿Quieres aterrizar estos datos en tu contexto real?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Reserva una sesión de diagnóstico con Nemuri Sleep. En menos de 24 horas revisamos vuestro resultado, el contexto de tu empresa y te propongo un mapa de acción claro.
                </p>
                <WhatsAppButton
                  message={`Hola, acabo de hacer la Calculadora del Sueño Nemuri para Empresas. Mi resultado indica un riesgo ${result.riskLevel === 'green' ? 'bajo' : result.riskLevel === 'amber' ? 'moderado' : 'alto'} con una estimación de ${formatCurrency(result.costTotal)} anuales. Me gustaría reservar una sesión de diagnóstico.`}
                  label="Reservar sesión de diagnóstico"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SleepCalculator;
