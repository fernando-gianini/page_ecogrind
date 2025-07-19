import React from 'react';

const urgencyLevels = [
  'Não tenho pressa', 'Dentro de 3 meses', 'Dentro de 1 mês', 'Urgente (até 15 dias)'
];

const Step3 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-4">Onde sua empresa está localizada?</h3>
      <input
        type="text"
        placeholder="Cidade, Estado"
        value={formData.location}
        onChange={(e) => handleInputChange('location', e.target.value)}
        className="w-full p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
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
                ? 'border-ecogrind-green bg-ecogrind-green/10 text-ecogrind-green'
                : 'border-border hover:border-ecogrind-green/50'
            }`}
          >
            {urgency}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Step3;