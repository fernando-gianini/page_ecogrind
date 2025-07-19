import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre-nos', label: 'Sobre Nós' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLinkComponent = ({ href, children }) => (
    <Link
      to={href}
      onClick={() => setIsOpen(false)}
      className={`text-lg font-medium transition-colors hover:text-ecogrind-green ${
        location.pathname === href ? 'text-ecogrind-green' : ''
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <img 
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1feea48c-994d-4e81-af04-8f100c2fa61d/55fae82dcf8718bd32e32aaff5b30617.png" 
            alt="Ecogrind Logo" 
            className="h-12"
          />
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLinkComponent key={link.href} href={link.href}>
                  {link.label}
                </NavLinkComponent>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button onClick={toggleTheme} variant="ghost" size="icon">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
              <Button onClick={toggleMenu} className="md:hidden" variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <NavLinkComponent key={link.href} href={link.href}>
                  {link.label}
                </NavLinkComponent>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;