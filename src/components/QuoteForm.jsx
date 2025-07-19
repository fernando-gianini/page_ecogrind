
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Calculator, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    materialType: '',
    volume: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    urgency: '',
    budget: '',
    additionalInfo: ''
  });

  const { toast } = useToast();

  const steps = [
    {
      title: 'Tipo de Negócio',
      description: 'Conte-nos sobre sua empresa'
    },
    {
      title: 'Material e Volume',
      description: 'Que tipo de material você processa?'
    },
    {
      title: 'Localização e Urgência',
      description: 'Onde você está localizado?'
    },
    {
      title: 'Dados de Contato',
      description: 'Como podemos entrar em contato?'
    },
    {
      title: 'Orçamento e Observações',
      description: 'Informações finais'
    }
  ];

  const businessTypes = [
    'Indústria de Reciclagem',
    'Construção Civil',
    'Indústria Alimentícia',
    'Indústria Química',
    'Metalurgia',
    'Papel e Celulose',
    'Têxtil',
    'Outros'
  ];

  const materialTypes = [
    'Plásticos',
    'Papel/Papelão',
    'Madeira',
    'Metais',
    'Borracha',
    'Resíduos Orgânicos',
    'Tecidos',
    'Materiais Mistos'
  ];

  const volumes = [
    'Até 100kg/dia',
    '100-500kg/dia',
    '500kg-1t/dia',
    '1-5t/dia',
    '5-10t/dia',
    'Mais de 10t/dia'
  ];

  const urgencyLevels = [
    'Não tenho pressa',
    'Dentro de 3 meses',
    'Dentro de 1 mês',
    'Urgente (até 15 dias)'
  ];

  const budgetRanges = [
    'Até R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'R$ 100.000 - R$ 250.000',
    'R$ 250.000 - R$ 500.000',
    'Acima de R$ 500.000',
    'Preciso de orientação'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Qual é o seu tipo de negócio?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleInputChange('businessType', type)}
                  className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                    formData.businessType === type
                      ? 'border-[#2d7e43] bg-[#2d7e43]/10 text-[#2d7e43]'
                      : 'border-border hover:border-[#2d7e43]/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Que tipo de material você processa?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materialTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('materialType', type)}
                    className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                      formData.materialType === type
                        ? 'border-[#2d7e43] bg-[#2d7e43]/10 text-[#2d7e43]'
                        : 'border-border hover:border-[#2d7e43]/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Qual o volume diário aproximado?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {volumes.map((volume) => (
                  <button
                    key={volume}
                    onClick={() => handleInputChange('volume', volume)}
                    className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                      formData.volume === volume
                        ? 'border-[#2d7e43] bg-[#2d7e43]/10 text-[#2d7e43]'
                        : 'border-border hover:border-[#2d7e43]/50'
                    }`}
                  >
                    {volume}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Onde sua empresa está localizada?</h3>
              <input
                type="text"
                placeholder="Cidade, Estado"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Qual a urgência do projeto?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {urgencyLevels.map((urgency) => (
                  <button
                    key={urgency}
                    onClick={() => handleInputChange('urgency', urgency)}
                    className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                      formData.urgency === urgency
                        ? 'border-[#2d7e43] bg-[#2d7e43]/10 text-[#2d7e43]'
                        : 'border-border hover:border-[#2d7e43]/50'
                    }`}
                  >
                    {urgency}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Dados para contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Telefone/WhatsApp"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Faixa de investimento pretendida</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => handleInputChange('budget', budget)}
                    className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                      formData.budget === budget
                        ? 'border-[#2d7e43] bg-[#2d7e43]/10 text-[#2d7e43]'
                        : 'border-border hover:border-[#2d7e43]/50'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Observações adicionais</h3>
              <textarea
                placeholder="Conte-nos mais sobre suas necessidades específicas, desafios atuais ou qualquer informação que possa nos ajudar a elaborar a melhor proposta..."
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                rows={4}
                className="w-full p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#2d7e43] focus:border-transparent resize-none"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="w-8 h-8 text-[#2d7e43]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Solicite seu <span className="text-[#2d7e43]">Orçamento</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Responda algumas perguntas rápidas e receba uma proposta personalizada 
            via WhatsApp em até 24 horas.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep > index + 1
                      ? 'bg-[#2d7e43] text-white'
                      : currentStep === index + 1
                      ? 'bg-[#2d7e43] text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      currentStep > index + 1 ? 'bg-[#2d7e43]' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">{steps[currentStep - 1].title}</h3>
            <p className="text-sm text-muted-foreground">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Content */}
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

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-[#2d7e43] text-[#2d7e43] hover:bg-[#2d7e43] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  className="bg-[#2d7e43] hover:bg-[#2d7e43]/90 text-white"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={generateWhatsAppMessage}
                  className="bg-[#2d7e43] hover:bg-[#2d7e43]/90 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="w-12 h-12 bg-[#2d7e43]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-[#2d7e43]" />
            </div>
            <h4 className="font-semibold mb-2">Resposta Rápida</h4>
            <p className="text-sm text-muted-foreground">Orçamento em até 24h</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="w-12 h-12 bg-[#2d7e43]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6 text-[#2d7e43]" />
            </div>
            <h4 className="font-semibold mb-2">Proposta Personalizada</h4>
            <p className="text-sm text-muted-foreground">Solução sob medida</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="w-12 h-12 bg-[#2d7e43]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-[#2d7e43]" />
            </div>
            <h4 className="font-semibold mb-2">Atendimento Direto</h4>
            <p className="text-sm text-muted-foreground">Via WhatsApp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
