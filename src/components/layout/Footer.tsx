import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Sueño infantil', href: '/sueno-infantil' },
  { label: 'Sueño adulto', href: '/sueno-adulto' },
  { label: 'Estudio y oposiciones', href: '/sueno-estudio-oposiciones' },
  { label: 'Deporte', href: '/sueno-rendimiento-deportivo' },
  { label: 'Empresas', href: '/sueno-productividad-laboral' },
  { label: 'NESA', href: '/nesa-x-signal' },
  { label: 'Método', href: '/metodo-nemuri' },
  { label: 'Charlas', href: '/charlas-formaciones' },
  { label: 'Sobre Nemuri', href: '/sobre-nemuri' },
  { label: 'Contacto', href: '/contacto' },
];

const legalLinks = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/politica-privacidad' },
  { label: 'Política de cookies', href: '/politica-cookies' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-nemuri py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-semibold">Nemuri </span>
              <span className="text-xl font-semibold text-primary">Sleep</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Consultoría de sueño y rendimiento.
            </p>
            <a
              href="https://wa.me/34638119948"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">638 119 948</span>
            </a>
          </div>

          {/* Quick Links - Split into 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Enlaces rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-background/70 hover:text-primary text-sm transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <nav className="flex flex-col space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} Nemuri Sleep. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
