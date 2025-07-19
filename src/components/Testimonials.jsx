import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialsData = [
    {
      name: "Carlos Silva",
      company: "Indústria Metalúrgica Silva",
      role: "Diretor de Operações",
      content: "A Ecogrind transformou completamente nossa gestão de resíduos. Reduzimos 80% dos custos de descarte e ainda geramos receita com os materiais reciclados. Investimento que se pagou em menos de um ano!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Rodrigues",
      company: "EcoPlásticos Ltda",
      role: "CEO",
      content: "Equipamentos de qualidade excepcional e suporte técnico impecável. Nossa produtividade aumentou 150% após a implementação das soluções da Ecogrind. Recomendo sem hesitação!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Santos",
      company: "Construtora Santos & Filhos",
      role: "Gerente de Sustentabilidade",
      content: "Parceria estratégica que nos ajudou a alcançar certificações ambientais importantes. A eficiência dos equipamentos superou nossas expectativas e o ROI foi fantástico.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marina Costa",
      company: "Reciclagem Verde",
      role: "Diretora Técnica",
      content: "Tecnologia de ponta aliada a um atendimento personalizado. A Ecogrind não apenas fornece equipamentos, mas oferece soluções completas para nossos desafios de reciclagem.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="text-ecogrind-green">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso com nossas soluções sustentáveis.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-12 h-12 text-ecogrind-green mx-auto mb-6" />

              <div className="flex justify-center mb-6">
                {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonialsData[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonialsData[currentTestimonial].image}
                  alt={testimonialsData[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {testimonialsData[currentTestimonial].name}
                  </div>
                  <div className="text-ecogrind-green font-medium">
                    {testimonialsData[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonialsData[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-ecogrind-green text-ecogrind-green hover:bg-ecogrind-green hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-ecogrind-green scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-ecogrind-green/50'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-ecogrind-green text-ecogrind-green hover:bg-ecogrind-green hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-ecogrind-green mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ecogrind-green mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ecogrind-green mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Recomendação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ecogrind-green mb-2">1.5 Mi</div>
            <div className="text-sm text-muted-foreground">Toneladas/Ano Processadas</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;