import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronsRight, Zap, Gauge, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = {
    name: "Triturador Industrial Modelo JZQ 500",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1feea48c-994d-4e81-af04-8f100c2fa61d/a7da52719f5d2288b74c254109beef26.jpg",
    features: [
      { icon: Zap, label: "Potência", value: "44 kW (60 CV)" },
      { icon: Gauge, label: "Capacidade", value: "Até 1,5 t/hora" },
      { icon: Settings, label: "20 Lâminas", value: "Aço Especial" }
    ],
    specs: [
      { label: "Tensão de operação", value: "220/380V trifásico" },
      { label: "Diâmetro da boca principal", value: "600 mm" },
      { label: "Diâmetro do Eixo", value: "300 mm" },
      { label: "Dimensões (CxLxA)", value: "2800x1400x1900 mm" },
      { label: "Acionamento", value: "Motor elétrico com redutor" },
      { label: "Segurança", value: "Inversor de frequência" },
    ]
  };

  const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no Triturador Industrial Modelo JZQ 500 e gostaria de um orçamento.`);
  const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nosso Equipamento <span className="text-ecogrind-green">Principal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça o Triturador Industrial JZQ 500, desenvolvido com tecnologia de ponta para máxima eficiência e robustez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="w-16 h-16 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              {product.features.map((feature, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border">
                  <feature.icon className="w-8 h-8 mx-auto text-ecogrind-green mb-2" />
                  <p className="font-semibold text-sm">{feature.label}</p>
                  <p className="text-xs text-muted-foreground">{feature.value}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-3 text-muted-foreground mb-8">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-center">
                  <ChevronsRight className="w-5 h-5 text-ecogrind-green mr-2 flex-shrink-0" />
                  <span className="font-medium text-foreground mr-2">{spec.label}:</span> {spec.value}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full bg-ecogrind-green hover:bg-ecogrind-green/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;