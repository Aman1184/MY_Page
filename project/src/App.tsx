import React from 'react';
import { Logo } from './components/Logo';
import { LoginSteps } from './components/LoginSteps';
import { RegisterPrompt } from './components/RegisterPrompt';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Logo />
          <div className="bg-white rounded-lg shadow-sm p-8">
            <LoginSteps />
            <RegisterPrompt />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;