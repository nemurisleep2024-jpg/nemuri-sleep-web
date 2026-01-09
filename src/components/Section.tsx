import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: 'normal' | 'alt';
  className?: string;
  id?: string;
}

const Section = ({
  title,
  subtitle,
  children,
  variant = 'normal',
  className = '',
  id,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${
        variant === 'alt' ? 'bg-secondary' : 'bg-background'
      } ${className}`}
    >
      <div className="container-nemuri">
        {(title || subtitle) && (
          <div className="max-w-3xl mb-12 lg:mb-16">
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
