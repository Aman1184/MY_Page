import React from 'react';

export function RegisterPrompt() {
  return (
    <div className="mt-8 space-y-6">
      <p className="text-gray-700">
        New user?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Register for online banking
        </a>
      </p>
      
      <img 
        src="https://bank.co-operativebank.co.uk/r/assets/images/assets/images//fscs.svg" 
        alt="FSCS Protected"
        className="w-[72px] h-[79px]"
      />
    </div>
  );
}