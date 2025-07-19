import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';

const FormNavigation = ({ currentStep, steps, prevStep, nextStep, handleSubmit }) => (
  <div className="flex justify-between mt-8">
    <Button
      variant="outline"
      onClick={prevStep}
      disabled={currentStep === 1}
      className="border-ecogrind-green text-ecogrind-green hover:bg-ecogrind-green hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Anterior
    </Button>

    {currentStep < steps.length ? (
      <Button
        onClick={nextStep}
        className="bg-ecogrind-green hover:bg-ecogrind-green/90 text-white"
      >
        Próximo
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    ) : (
      <Button
        onClick={handleSubmit}
        className="bg-ecogrind-green hover:bg-ecogrind-green/90 text-white"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Enviar via WhatsApp
      </Button>
    )}
  </div>
);

export default FormNavigation;