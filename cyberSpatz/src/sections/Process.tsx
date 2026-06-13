import React from 'react';
import { Search, BarChart3, ShieldAlert, Radio, FlameKindling } from 'lucide-react';

const steps = [
  { icon: Search, name: "Discover", desc: "Full passive and active perimeter reconnaissance maps out all digital surface assets." },
  { icon: BarChart3, name: "Analyze", desc: "Deconstruct system vulnerability graphs to map critical operational single-point failures." },
  { icon: ShieldAlert, name: "Protect", desc: "Deploy cryptographic barriers, realign configurations, and close exposed vector logic ports." },
  { icon: Radio, name: "Monitor", desc: "Establish constant perimeter telemetry monitoring stream loops to flag real-time operational deviations." },
  { icon: FlameKindling, name: "Improve", desc: "Conduct aggressive defensive training exercises to heighten security response thresholds iteratively." }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-cyber-navy-deep/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyber-blue-electric">The Operational Cycle</h2>
          <p className="text-3xl font-black text-white">Relentless Execution Matrix</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center group">
              <div className="w-16 h-16 mx-auto rounded-full glass-panel border border-white/10 flex items-center justify-center text-cyber-blue-electric font-bold relative z-10 group-hover:border-cyber-blue-electric/60 transition-colors">
                <step.icon className="w-6 h-6" />
                <span className="absolute -bottom-2 -right-2 text-xs w-6 h-6 bg-cyber-navy border border-white/20 text-slate-400 flex items-center justify-center rounded-full font-mono">{idx+1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-6 mb-2">{step.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};