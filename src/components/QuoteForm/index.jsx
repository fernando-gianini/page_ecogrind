import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from './useForm';
import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import FormNavigation from './FormNavigation';
import FormBenefits from './FormBenefits';

const QuoteForm = () => {
  const { toast } = useToast();
  const {
    currentStep,
    formData,
    handleInputChange,
    nextStep,
    prevStep,
    steps,
  } = useForm();

  const generateWhatsAppMessage = () => {
    const message = `
🌱 *SOLICITAÇÃO DE ORÇAMENTO - ECOGRIND BRASIL*

👤 *DADOS PESSOAIS:*
• Nome: ${formData.name}
• Empresa: ${formData.company}
• Email: ${formData.email}
• Telefone: ${formData.phone}

🏭 *INFORMAÇÕES DO NEGÓCIO:*
• Tipo de Negócio: ${formData.businessType}
• Localização: ${formData.location}

♻️ *MATERIAL E PROCESSAMENTO:*
• Tipo de Material: ${formData.materialType}
• Volume Diário: ${formData.volume}

⏰ *URGÊNCIA E ORÇAMENTO:*
• Prazo: ${formData.urgency}
• Faixa de Investimento: ${formData.budget}

📝 *OBSERVAÇÕES ADICIONAIS:*
${formData.additionalInfo || 'Nenhuma observação adicional'}

---
Aguardo retorno para agendarmos uma reunião técnica! 🚀
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5512992594651?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "✅ Orçamento enviado!",
      description: "Sua solicitação foi enviada via WhatsApp. Nossa equipe entrará em contato em breve!"
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <Step1 formData={formData} handleInputChange={handleInputChange} />;
      case 2: return <Step2 formData={formData} handleInputChange={handleInputChange} />;
      case 3: return <Step3 formData={formData} handleInputChange={handleInputChange} />;
      case 4: return <Step4 formData={formData} handleInputChange={handleInputChange} />;
      case 5: return <Step5 formData={formData} handleInputChange={handleInputChange} />;
      default: return null;
    }
  };

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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="w-8 h-8 text-ecogrind-green" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Solicite seu <span className="text-ecogrind-green">Orçamento</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Responda algumas perguntas rápidas e receba uma proposta personalizada 
            via WhatsApp em até 24 horas.
          </p>
        </motion.div>

        <ProgressBar steps={steps} currentStep={currentStep} />

        <motion.div
          className="max-w-4xl mx-auto"
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            {renderStepContent()}
            <FormNavigation
              currentStep={currentStep}
              steps={steps}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={generateWhatsAppMessage}
            />
          </div>
        </motion.div>

        <FormBenefits />
      </div>
    </section>
  );
};

export default QuoteForm;