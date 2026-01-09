import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  className?: string;
}

const FeatureList = ({ items, className = '' }: FeatureListProps) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
