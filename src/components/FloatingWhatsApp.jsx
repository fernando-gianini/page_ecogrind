import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const whatsappMessage = encodeURIComponent("Olá! Vim através do site da Ecogrind e gostaria de mais informações.");
  const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  return (
    <motion.div
      className="fixed bottom-40 right-6 z-50" // aumente o valor para subir o botão
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="shadow-lg flex items-center justify-center rounded-full"
        style={{ width: 48, height: 48 }}
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp Logo"
          width={48}
          height={48}
          style={{ display: 'block' }}
        />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;