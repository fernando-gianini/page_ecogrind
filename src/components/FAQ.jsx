import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set([0]));
  const whatsappMessage = encodeURIComponent("Olá! Vim através do site da Ecogrind e tenho uma dúvida.");
  const whatsappUrl = `http://wa.me/5512992594651?text=${whatsappMessage}`;

  const faqData = [
    {
      question: "Qual é o tempo de retorno do investimento (ROI) dos equipamentos Ecogrind?",
      answer: "O ROI médio dos nossos equipamentos é de 12 a 18 meses, dependendo do volume de material processado e do tipo de resíduo. Muitos clientes relatam economia de até 70% nos custos de descarte, além da geração de receita com a venda de materiais reciclados.",
      category: "Investimento"
    },
    {
      question: "Os equipamentos atendem às normas ambientais brasileiras?",
      answer: "Sim, todos os nossos equipamentos são desenvolvidos para atender às normas ABNT, CONAMA e demais regulamentações ambientais brasileiras. Fornecemos a documentação técnica para auxiliar no processo de licenciamento ambiental.",
      category: "Conformidade"
    },
    {
      question: "Que tipos de materiais podem ser processados?",
      answer: "Nossos equipamentos processam uma ampla variedade de materiais: plásticos, papel, papelão, madeira, resíduos orgânicos, metais não-ferrosos, borracha, tecidos e muito mais. Cada equipamento é dimensionado conforme o tipo de material.",
      category: "Materiais"
    },
    {
      question: "Qual é a garantia oferecida e como funciona o suporte técnico?",
      answer: "Oferecemos garantia de fábrica e um canal de suporte técnico para tirar dúvidas e orientar sobre a operação e manutenção básica do equipamento, garantindo o seu bom funcionamento.",
      category: "Suporte"
    },
    {
      question: "Como é feita a instalação e o treinamento da equipe?",
      answer: "Nós fornecemos um treinamento completo e detalhado sobre a instalação, operação e utilização do maquinário. Acompanhamos o processo para garantir que sua equipe esteja totalmente capacitada para extrair o máximo de eficiência do equipamento.",
      category: "Instalação"
    },
    {
      question: "Como funciona a entrega e o teste do produto?",
      answer: "Realizamos a entrega em todo o Brasil. Antes do envio, cada equipamento passa por uma bateria de testes rigorosos em nossa fábrica para garantir a qualidade e performance. Realizamos também a entrega técnica para assegurar que tudo está conforme o esperado.",
      category: "Entrega"
    },
    {
      question: "Qual é a capacidade de processamento dos equipamentos?",
      answer: "Nosso principal equipamento, o Triturador JZQ 500, tem capacidade de até 1.500kg/hora. Temos também outros modelos adequados para diferentes volumes e necessidades, desde pequenas empresas até grandes indústrias.",
      category: "Capacidade"
    }
  ];

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.clear();
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [...new Set(faqData.map(item => item.category))];

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
            Perguntas <span className="text-ecogrind-green">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos equipamentos, serviços e processos. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
            />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {filteredFAQ.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-6 bg-background rounded-xl border border-border hover:border-ecogrind-green/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ecogrind-green"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground flex-1 pr-4">
                    {item.question}
                  </h3>
                  <div className="ml-4">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-ecogrind-green" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </button>

              {openItems.has(index) && (
                <motion.div
                  className="p-6 bg-background border-t-0 rounded-b-xl border border-border"
                  initial={{ opacity: 0, height: 0, marginTop: -10 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                  exit={{ opacity: 0, height: 0, marginTop: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mb-4">
              Nenhuma pergunta encontrada para "{searchTerm}"
            </p>
            <Button
              variant="outline"
              onClick={() => setSearchTerm('')}
              className="border-ecogrind-green text-ecogrind-green hover:bg-ecogrind-green hover:text-white"
            >
              Limpar busca
            </Button>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-ecogrind-green/10 to-green-400/10 rounded-2xl border border-ecogrind-green/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução ideal.
          </p>
          <Button asChild size="lg" className="bg-ecogrind-green hover:bg-ecogrind-green/90 text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;