import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const whatsappMessage = encodeURIComponent("Olá! Vim através do site da Ecogrind e gostaria de mais informações.");
    const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden -mt-20">
      <div className="absolute inset-0 bg-ecogrind-dark/70 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/trituradora.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <motion.div
        className="relative z-20 container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">
          Inovação e Sustentabilidade <br /> para sua Indústria
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-ecogrind-light/90 text-shadow">
          Transformamos resíduos em recursos, impulsionando a economia circular com tecnologia de ponta.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          <Button asChild size="lg" className="mt-8 bg-ecogrind-green hover:bg-ecogrind-green/90 text-white font-bold text-lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Falar com a Ecogrind <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;