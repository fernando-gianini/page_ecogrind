import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Gauge, Settings, ChevronsRight } from 'lucide-react';

const productsData = [
  {
    name: "Triturador Industrial JZQ 500",
    description: "Nosso campeão de vendas, ideal para uma vasta gama de materiais, oferecendo o equilíbrio perfeito entre potência e eficiência.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1feea48c-994d-4e81-af04-8f100c2fa61d/a7da52719f5d2288b74c254109beef26.jpg",
    specs: [
      { label: "Potência", value: "2x 22 kW (60 CV)" },
      { label: "Boca", value: "600 mm" },
      { label: "Lâminas", value: "20" },
      { label: "Dimensões", value: "2800x1400x1900 mm" },
    ]
  },
  {
    name: "Triturador Industrial JZQ 650",
    description: "Mais potência e capacidade para operações que exigem maior volume de processamento, mantendo a robustez da linha JZQ.",
    image: "/jzq650.png",
    specs: [
      { label: "Potência", value: "2x 30 kW (81,6 CV)" },
      { label: "Boca", value: "800 mm" },
      { label: "Lâminas", value: "20" },
      { label: "Dimensões", value: "3500x1600x2200 mm" },
    ]
  },
  {
    name: "Triturador de Eixo Duplo ZSY 400",
    description: "Projetado para materiais de alta resistência, o ZSY 400 oferece torque elevado e performance superior para os desafios mais difíceis.",
    image: "/ZSY400.png",
    specs: [
      { label: "Potência", value: "2x 55 kW (149,6 CV)" },
      { label: "Boca", value: "1400 mm" },
      { label: "Lâminas", value: "35" },
      { label: "Dimensões", value: "4900x2100x2400 mm" },
    ]
  },
  {
    name: "Triturador de Eixo Duplo ZSY 500",
    description: "A solução definitiva para processamento em larga escala. Potência máxima para as operações industriais mais exigentes.",
    image: "/ZSY500.png",
    specs: [
      { label: "Potência", value: "2x 90 kW (244,8 CV)" },
      { label: "Boca", value: "1600 mm" },
      { label: "Lâminas", value: "26" },
      { label: "Dimensões", value: "5800x2300x2800 mm" },
    ]
  },
];

const Products = () => {
  const whatsappMessage = (productName) => encodeURIComponent(`Olá! Tenho interesse no ${productName} e gostaria de um orçamento.`);

  return (
    <>
      <Helmet>
        <title>Produtos - Ecogrind Brasil</title>
        <meta name="description" content="Explore nossa linha de equipamentos de alta performance para moagem e reciclagem, incluindo os trituradores das séries JZQ e ZSY." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ecogrind-green">Nossos Produtos</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Tecnologia de ponta para transformar resíduos em oportunidades.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col border border-border/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-64 bg-background overflow-hidden">
                {product.image ? (
                  <img 
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <img  alt={product.imageText} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="mt-2 text-muted-foreground flex-grow">{product.description}</p>
                
                <div className="my-6 space-y-2">
                  {product.specs.map((spec, i) => (
                     <div key={i} className="flex items-center text-sm">
                        <ChevronsRight className="w-4 h-4 text-ecogrind-green mr-2 flex-shrink-0" />
                        <span className="font-medium text-foreground mr-2">{spec.label}:</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                     </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="mt-auto w-full bg-ecogrind-green hover:bg-ecogrind-green/90"
                >
                  <a href={`http://wa.me/5512992594651?text=${whatsappMessage(product.name)}`} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;