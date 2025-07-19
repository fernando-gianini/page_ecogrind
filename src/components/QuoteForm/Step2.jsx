import React from 'react';

const materialTypes = [
  'Plásticos', 'Papel/Papelão', 'Madeira', 'Metais',
  'Borracha', 'Resíduos Orgânicos', 'Tecidos', 'Materiais Mistos'
];

const volumes = [
  'Até 100kg/dia', '100-500kg/dia', '500kg-1t/dia',
  '1-5t/dia', '5-10t/dia', 'Mais de 10t/dia'
];

const Step2 = ({ formData, handleInputChange }) => (
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
                ? 'border-ecogrind-green bg-ecogrind-green/10 text-ecogrind-green'
                : 'border-border hover:border-ecogrind-green/50'
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
                ? 'border-ecogrind-green bg-ecogrind-green/10 text-ecogrind-green'
                : 'border-border hover:border-ecogrind-green/50'
            }`}
          >
            {volume}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Step2;