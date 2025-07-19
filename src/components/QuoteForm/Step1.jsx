import React from 'react';

const businessTypes = [
  'Indústria de Reciclagem', 'Construção Civil', 'Indústria Alimentícia',
  'Indústria Química', 'Metalurgia', 'Papel e Celulose', 'Têxtil', 'Outros'
];

const Step1 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold mb-4">Qual é o seu tipo de negócio?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {businessTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleInputChange('businessType', type)}
          className={`p-4 text-left rounded-lg border transition-all duration-300 ${
            formData.businessType === type
              ? 'border-ecogrind-green bg-ecogrind-green/10 text-ecogrind-green'
              : 'border-border hover:border-ecogrind-green/50'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  </div>
);

export default Step1;