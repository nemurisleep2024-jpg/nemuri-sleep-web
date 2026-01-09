interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="relative p-6 lg:p-8">
      <div className="text-6xl lg:text-7xl font-bold text-primary/10 absolute top-0 left-4">
        {number}
      </div>
      <div className="relative pt-8">
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
