import React from 'react';
import { Button } from '../components/ui/Button';
import { Terminal, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 glass-panel p-8 sm:p-12 rounded-2xl relative overflow-hidden border-cyber-blue-electric/20">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Shield className="w-96 h-96 text-cyber-blue-electric" />
        </div>
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl font-black text-white tracking-tight">Initiate Security Briefing</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Connect directly with enterprise security analysts. Establish immediate parameters for vulnerability mapping or emergency posture containment tracking.
          </p>
          
          <div className="space-y-4 pt-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyber-blue-electric" /> security-ops@cyberguardian.internal
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-cyber-blue-electric" /> +1 (800) 555-SHIELD
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-blue-electric" /> Vector Outpost Node Alpha, Austin, TX
            </div>
          </div>
        </div>

        {/* Secure Form Layout */}
        <form className="lg:col-span-7 space-y-4 z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">Operator Name</label>
              <input type="text" className="w-full bg-cyber-navy-deep/80 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyber-blue-electric" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">Corporate Intel Email</label>
              <input type="email" className="w-full bg-cyber-navy-deep/80 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyber-blue-electric" placeholder="j.doe@enterprise.com" required />
            </div>
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">Threat Context Classification</label>
            <select className="w-full bg-cyber-navy-deep/80 border border-white/10 rounded px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-cyber-blue-electric">
              <option>General Architecture Consultation Request</option>
              <option>Active Intrusion Event (Urgent Breach Support)</option>
              <option>Comprehensive Penetration Testing Loop Allocation</option>
              <option>Compliance Mapping Framework Audit</option>
            </select>
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">Infrastructure Payload Overview</label>
            <textarea rows={4} className="w-full bg-cyber-navy-deep/80 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyber-blue-electric" placeholder="Outline specific perimeter concerns or target ecosystem dimensions..." required></textarea>
          </div>
          
          <Button variant="cyber" type="submit" className="w-full mt-2 font-mono text-xs">
            <Terminal className="w-4 h-4" /> TRANSMIT SECURE REQUEST STRAND
          </Button>
        </form>
      </div>
    </section>
  );
};