import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgressBar = ({ steps, currentStep }) => (
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
                ? 'bg-ecogrind-green text-white'
                : currentStep === index + 1
                ? 'bg-ecogrind-green text-white'
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
                currentStep > index + 1 ? 'bg-ecogrind-green' : 'bg-muted'
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
);

export default ProgressBar;