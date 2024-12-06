import React from 'react';
import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Building2 className="w-8 h-8 text-blue-600" />
      <div>
        <h1 className="text-xl font-semibold text-blue-600">The Cooperative Bank</h1>
        <p className="text-sm text-gray-600">Ethical then, now and always</p>
      </div>
    </div>
  );
}