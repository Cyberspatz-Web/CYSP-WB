import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-cyber-navy-deep/80 py-12 text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-sans font-bold tracking-wider">
          <Shield className="w-5 h-5 text-cyber-blue-electric" />
          <span>CYBER<span className="text-cyber-blue-electric">GUARDIAN</span></span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Cyber Guardian Platform. Protected via continuous structural cryptographical encapsulation.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">SECURE_LOGS</a>
          <a href="#" className="hover:text-white transition-colors">COMPLIANCE_STATEMENT</a>
          <a href="#" className="hover:text-white transition-colors">ROOT_CERT</a>
        </div>
      </div>
    </footer>
  );
};