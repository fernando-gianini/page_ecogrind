import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin as LinkedIn, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer = ({ darkMode }) => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter em breve!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleSocialClick = () => {
    toast({
      title: "🚧 Redes sociais em breve!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  console.log('darkMode:', darkMode);

  return (
    <footer className="bg-ecogrind-dark text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
          alt="Ecogrind Brasil Logo"
          className="h-10 w-auto mb-4"
        />
        <p className="text-center text-sm">
          &copy; 2025 Ecogrind Brasil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const SomeComponent = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Other components */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default SomeComponent;
