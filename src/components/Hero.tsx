import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WhatsAppButton from './WhatsAppButton';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: 'large' | 'small';
  whatsappMessage?: string;
  useWhatsApp?: boolean;
}

const Hero = ({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = 'large',
  whatsappMessage,
  useWhatsApp = false,
}: HeroProps) => {
  const isLarge = variant === 'large';

  return (
    <section
      className={`relative overflow-hidden ${
        isLarge ? 'py-20 lg:py-32' : 'py-12 lg:py-20'
      }`}
    >
      {/* Background decoration */}
      {isLarge && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
      )}

      <div className="container-nemuri">
        <div className={`max-w-4xl ${isLarge ? 'mx-auto text-center' : ''}`}>
          <h1
            className={`font-bold tracking-tight text-foreground animate-fade-in-up ${
              isLarge
                ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
                : 'text-2xl sm:text-3xl lg:text-4xl'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-6 text-muted-foreground animate-fade-in-delay ${
                isLarge ? 'text-lg lg:text-xl max-w-2xl mx-auto' : 'text-base lg:text-lg'
              }`}
            >
              {subtitle}
            </p>
          )}

          {(primaryCtaLabel || secondaryCtaLabel) && (
            <div
              className={`mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 ${
                isLarge ? 'justify-center' : ''
              }`}
            >
              {primaryCtaLabel && (
                useWhatsApp && whatsappMessage ? (
                  <WhatsAppButton message={whatsappMessage} label={primaryCtaLabel} />
                ) : primaryCtaHref ? (
                  <Link to={primaryCtaHref}>
                    <Button className="btn-primary w-full sm:w-auto">
                      {primaryCtaLabel}
                    </Button>
                  </Link>
                ) : null
              )}

              {secondaryCtaLabel && secondaryCtaHref && (
                <Link to={secondaryCtaHref}>
                  <Button variant="outline" className="btn-outline w-full sm:w-auto">
                    {secondaryCtaLabel}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
