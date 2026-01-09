import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  size?: 'default' | 'lg' | 'sm';
  className?: string;
}

const WhatsAppButton = ({
  message,
  label = 'Escríbeme por WhatsApp',
  size = 'default',
  className = '',
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/34638119948?text=${encodedMessage}`;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button
        className={`btn-primary inline-flex items-center gap-2 ${sizeClasses[size]}`}
      >
        <MessageCircle className={size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
        {label}
      </Button>
    </a>
  );
};

export default WhatsAppButton;
