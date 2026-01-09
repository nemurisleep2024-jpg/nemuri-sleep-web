import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

const Card = ({ title, description, href, icon, className = '' }: CardProps) => {
  const content = (
    <div
      className={`card-nemuri p-6 lg:p-8 h-full flex flex-col ${
        href ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
          {icon}
        </div>
      )}
      <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground text-sm lg:text-base flex-1">
          {description}
        </p>
      )}
      {href && (
        <div className="mt-4 flex items-center text-primary font-medium text-sm">
          <span>Saber más</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
};

export default Card;
