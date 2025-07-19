import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const WhatsAppIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Footer = () => {
  const { toast } = useToast();
  const whatsappMessage = encodeURIComponent("Olá! Vim através do site da Ecogrind e gostaria de mais informações.");
  const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Inscrição na Newsletter",
      description: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo em seu próximo prompt! 🚀",
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link to="/" className="flex items-center gap-2">
             <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1feea48c-994d-4e81-af04-8f100c2fa61d/55fae82dcf8718bd32e32aaff5b30617.png" 
                alt="Ecogrind Logo" 
                className="h-12"
              />
          </Link>
          <p className="text-muted-foreground">
            Tecnologia que transforma resíduos em resultados.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/ecogrind.brasil/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-ecogrind-green transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/@EcoGrind.Brasil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-ecogrind-green transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-ecogrind-green transition-colors">
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold uppercase tracking-wider">Navegação</p>
          <ul className="space-y-2">
            <li><Link to="/sobre-nos" className="transition-colors hover:text-ecogrind-green">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="transition-colors hover:text-ecogrind-green">Serviços</Link></li>
            <li><Link to="/produtos" className="transition-colors hover:text-ecogrind-green">Produtos</Link></li>
            <li><Link to="/blog" className="transition-colors hover:text-ecogrind-green">Blog</Link></li>
            <li><Link to="/contato" className="transition-colors hover:text-ecogrind-green">Contato</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-bold uppercase tracking-wider">Contato</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-ecogrind-green" />
              <a href="mailto:contato@ecogrind.com.br" className="transition-colors hover:text-ecogrind-light">contato@ecogrind.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-ecogrind-green" />
              <a href="tel:+5512992594651" className="transition-colors hover:text-ecogrind-light">+55 12 99259-4651</a>
            </li>
             <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-5 w-5 text-ecogrind-green" />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ecogrind-light">WhatsApp</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-bold uppercase tracking-wider">Newsletter</p>
          <p className="text-muted-foreground">Receba nossas novidades e atualizações em primeira mão.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input type="email" placeholder="Seu melhor e-mail" className="flex-grow" required />
            <Button type="submit" className="bg-ecogrind-green hover:bg-ecogrind-green/90">Inscrever</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/20 bg-secondary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ecogrind Brasil. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ por <a href="https://horizons.hostinger.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-ecogrind-green hover:underline">Hostinger Horizons</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;