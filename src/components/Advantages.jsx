import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, DollarSign, Shield, Zap, TrendingUp, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Advantages = () => {
    const whatsappMessage = encodeURIComponent("Olá! Vim através do site da Ecogrind e gostaria de mais informações sobre a oferta.");
    const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  const advantages = [
    {
      icon: Leaf,
      title: 'Sustentabilidade Ambiental',
      description: 'Reduza o impacto ambiental transformando resíduos em recursos valiosos',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: DollarSign,
      title: 'Economia Garantida',
      description: 'Economize nos custos de descarte e gere receita com materiais reciclados',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      title: 'Conformidade Legal',
      description: 'Atenda as normas ambientais e evite multas com nossas soluções',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Zap,
      title: 'Alta Eficiência',
      description: 'Equipamentos de última geração para máxima produtividade na trituração',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Truck,
      title: 'Entrega em todo Brasil',
      description: 'Receba seu equipamento em qualquer lugar do território nacional',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: TrendingUp,
      title: 'ROI Comprovado',
      description: 'Retorno rápido do investimento com nossas soluções eficientes',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    }
  ];

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
            Por que escolher a <span className="text-ecogrind-green">Ecogrind</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformamos desafios ambientais em oportunidades de negócio com tecnologia 
            inovadora e soluções sustentáveis comprovadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-border hover:border-ecogrind-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-12 h-12 ${advantage.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-ecogrind-green/10 to-green-400/10 rounded-2xl p-8 border border-ecogrind-green/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-ecogrind-green text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            ⚡ Oferta por tempo limitado!
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Não perca a oportunidade de revolucionar seu negócio
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Apenas este mês: consultoria gratuita, entrada facilitada e financiamento próprio para todos os equipamentos. Vagas limitadas para análise técnica personalizada.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>✅ Consultoria gratuita</span>
            <span>✅ Entrada facilitada</span>
            <span>✅ Financiamento próprio</span>
          </div>
           <Button asChild size="lg" className="mt-8 bg-ecogrind-green hover:bg-ecogrind-green/90 text-white font-bold text-lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Quero Aproveitar
              </a>
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;