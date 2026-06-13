import React, { useState } from 'react';
import { Shield, Menu, X, ChevronDown, Lock, Terminal, Cpu, Globe } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-cyber-navy/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black text-xl tracking-wider text-white">
          <Shield className="w-8 h-8 text-cyber-blue-electric animate-pulse" />
          <span>CYBER<span className="text-cyber-blue-electric">GUARDIAN</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div 
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-cyber-blue-electric transition-colors py-2">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] p-6 mt-1 glass-panel rounded-xl grid grid-cols-2 gap-4 shadow-2xl border border-cyber-blue-electric/20 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#services" className="p-3 hover:bg-white/5 rounded-lg transition-all flex gap-3">
                  <Terminal className="text-cyber-blue-electric shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">Penetration Testing</h4>
                    <p className="text-xs text-slate-400 mt-1">Aggressive breach simulation defense.</p>
                  </div>
                </a>
                <a href="#services" className="p-3 hover:bg-white/5 rounded-lg transition-all flex gap-3">
                  <Lock className="text-cyber-blue-electric shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">Incident Response</h4>
                    <p className="text-xs text-slate-400 mt-1">Rapid containment & recovery mitigation.</p>
                  </div>
                </a>
                <a href="#services" className="p-3 hover:bg-white/5 rounded-lg transition-all flex gap-3">
                  <Cpu className="text-cyber-blue-electric shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">Cloud Security</h4>
                    <p className="text-xs text-slate-400 mt-1">Next-gen multi-cloud infrastructure hardening.</p>
                  </div>
                </a>
                <a href="#services" className="p-3 hover:bg-white/5 rounded-lg transition-all flex gap-3">
                  <Globe className="text-cyber-blue-electric shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">Compliance Auditing</h4>
                    <p className="text-xs text-slate-400 mt-1">SOC2, ISO27001 & HIPAA certification prep.</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyber-blue-electric transition-colors">About</a>
          <a href="#process" className="text-sm font-medium text-slate-300 hover:text-cyber-blue-electric transition-colors">Our Matrix</a>
          <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-cyber-blue-electric transition-colors">Sectors</a>
          <a href="#cases" className="text-sm font-medium text-slate-300 hover:text-cyber-blue-electric transition-colors">Intelligence Reports</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="cyber">Command Center</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-navy-light border-b border-white/10 px-4 pt-4 pb-6 space-y-4">
          <a href="#services" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#process" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#contact" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Contact Space</a>
          <Button variant="primary" className="w-full">Command Center</Button>
        </div>
      )}
    </header>
  );
};