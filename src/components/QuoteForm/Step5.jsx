import React from 'react';

const budgetRanges = [
  'Até R$ 50.000', 'R$ 50.000 - R$ 100.000', 'R$ 100.000 - R$ 250.000',
  'R$ 250.000 - R$ 500.000', 'Acima de R$ 500.000', 'Preciso de orientação'
];

const Step5 = ({ formData, handleInputChange }) => (
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
                ? 'border-ecogrind-green bg-ecogrind-green/10 text-ecogrind-green'
                : 'border-border hover:border-ecogrind-green/50'
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
        className="w-full p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent resize-none"
      />
    </div>
  </div>
);

export default Step5;