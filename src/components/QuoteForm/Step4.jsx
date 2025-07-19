import React from 'react';

const Step4 = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold mb-4">Dados para contato</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Seu nome completo"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Nome da empresa"
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
        className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
      />
      <input
        type="tel"
        placeholder="Telefone/WhatsApp"
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        className="p-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ecogrind-green focus:border-transparent"
      />
    </div>
  </div>
);

export default Step4;