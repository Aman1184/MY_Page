import React, { useState } from 'react';

interface UsernameStepProps {
  onSubmit: (username: string) => void;
  initialUsername: string;
}

export function UsernameStep({ onSubmit, initialUsername }: UsernameStepProps) {
  const [username, setUsername] = useState(initialUsername);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6">Log in to online banking</h2>
      
      <div className="mb-6">
        <label htmlFor="username" className="block text-gray-700 text-lg mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Remember my username</span>
        </label>
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
        Next
      </button>
    </form>
  );
}