import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, Activity, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { StatCounter } from '../components/StatCounter';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Value Proposition */}
        <div className="md:col-span-7 space-y-6 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-blue-electric/30 bg-cyber-blue-electric/10 text-cyber-blue-electric text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Absolute Digital Fortification
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Uncompromising <br/> Protection. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue-electric to-blue-500">
              Unstoppable Defense.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            We intercept, isolate, and neutralize adversaries before they reach your threshold. Elite enterprise cybersecurity powered by relentless execution strategy.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary">Deploy Security System <ChevronRight className="w-4 h-4" /></Button>
            <Button variant="secondary">Request Vulnerability Scan</Button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
            <div>
              <h3 className="text-3xl font-black text-white"><StatCounter value={99} suffix="%" /></h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Threat Mitigation Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-cyber-blue-electric"><StatCounter value={14} suffix="ms" /></h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Mean Response Latency</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white"><StatCounter value={450} suffix="M+" /></h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Protected Endpoints</p>
            </div>
          </div>
        </div>

        {/* Dynamic Abstract Cyber Shield Graphic (Heroic / Kinetic Energy Visual Concept) */}
        <div className="md:col-span-5 relative flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Outer Spinning Kinetic Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-cyber-blue-electric/30 rounded-full"
            />
            
            {/* Secondary Opposite Spinning Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border border-cyber-orange-glow/20 rounded-full"
            />

            {/* Solid Glassmorphism Core Shield */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-48 h-48 sm:w-60 sm:h-60 glass-panel rounded-3xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.15)] border-cyber-blue-electric/30 relative"
            >
              <div className="absolute inset-0 bg-glow-gradient rounded-3xl opacity-50" />
              <ShieldAlert className="w-20 h-20 text-cyber-blue-electric relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
              <div className="mt-4 text-xs font-mono tracking-widest text-slate-400 z-10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-blue-electric" /> SYSTEM_ACTIVE
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};