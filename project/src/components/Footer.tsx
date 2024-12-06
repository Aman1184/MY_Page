import React from 'react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 mb-8">
          <a href="#" className="hover:underline">Contact us</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Online terms and conditions (1Mb)</a>
        </div>
        
        <div className="space-y-4 text-sm">
          <p>The Co-operative Bank is covered by the FSCS.</p>
          
          <p>
            The Co-operative Bank p.l.c. is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the 
            Prudential Regulation Authority (No. 121885). The Co-operative Bank, Platform, smile and Britannia are trading names of The Co-operative 
            Bank p.l.c., 1 Balloon Street, Manchester M4 4BE. Registered in England and Wales No. 990937.
          </p>
          
          <p>
            Credit facilities are provided by The Co-operative Bank p.l.c. and are subject to status and our lending policy. The Bank reserves the right to 
            decline any application for an account or credit facility.
          </p>
        </div>
      </div>
    </footer>
  );
}