import { useState } from 'react';

export const useForm = () => {
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

  const steps = [
    { title: 'Tipo de Negócio', description: 'Conte-nos sobre sua empresa' },
    { title: 'Material e Volume', description: 'Que tipo de material você processa?' },
    { title: 'Localização e Urgência', description: 'Onde você está localizado?' },
    { title: 'Dados de Contato', description: 'Como podemos entrar em contato?' },
    { title: 'Orçamento e Observações', description: 'Informações finais' }
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

  return {
    currentStep,
    formData,
    handleInputChange,
    nextStep,
    prevStep,
    steps,
  };
};