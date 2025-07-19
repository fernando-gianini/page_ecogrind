import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calculator, MessageCircle } from 'lucide-react';

const FormBenefits = () => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="text-center p-6 rounded-xl bg-muted/30">
      <div className="w-12 h-12 bg-ecogrind-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-6 h-6 text-ecogrind-green" />
      </div>
      <h4 className="font-semibold mb-2">Resposta Rápida</h4>
      <p className="text-sm text-muted-foreground">Orçamento em até 24h</p>
    </div>
    <div className="text-center p-6 rounded-xl bg-muted/30">
      <div className="w-12 h-12 bg-ecogrind-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Calculator className="w-6 h-6 text-ecogrind-green" />
      </div>
      <h4 className="font-semibold mb-2">Proposta Personalizada</h4>
      <p className="text-sm text-muted-foreground">Solução sob medida</p>
    </div>
    <div className="text-center p-6 rounded-xl bg-muted/30">
      <div className="w-12 h-12 bg-ecogrind-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        <MessageCircle className="w-6 h-6 text-ecogrind-green" />
      </div>
      <h4 className="font-semibold mb-2">Atendimento Direto</h4>
      <p className="text-sm text-muted-foreground">Via WhatsApp</p>
    </div>
  </motion.div>
);

export default FormBenefits;