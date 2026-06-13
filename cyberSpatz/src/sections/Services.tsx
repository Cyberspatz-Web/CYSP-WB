import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Eye, AlertTriangle, CloudLightning, Landmark, Server } from 'lucide-react';

const serviceList = [
  { icon: Terminal, title: "Penetration Testing", desc: "Forced entry simulation to find exploitable weaknesses before state-sponsored actors do." },
  { icon: ShieldCheck, title: "Privacy & Compliance", desc: "Rigid posture alignment executing compliance maps for SOC2, ISO27001, and HIPAA architecture." },
  { icon: Cpu, title: "Vulnerability Management", desc: "Real-time discovery loops tracking software discrepancies and structural architecture flaws across assets." },
  { icon: Eye, title: "Continuous Monitoring", desc: "Around-the-clock Security Operations Center (SOC) telemetry telemetry looking over enterprise logs." },
  { icon: AlertTriangle, title: "Incident Response Teams", desc: "Immediate execution force tasked with breaking data infiltration trajectories and remediating systems." },
  { icon: CloudLightning, title: "Cloud Estate Hardening", desc: "Securing container layers and identity parameters across multi-cloud hyperscaler orchestrations." },
  { icon: Landmark, title: "Risk Framework Assessment", desc: "Deep quantifiable executive vector overviews detailing financial exposure to system exploitation." },
  { icon: Server, title: "Critical Asset Shielding", desc: "Isolating back-end relational architecture behind cryptographically isolated proxy perimeters." },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyber-blue-electric">Defensive Capabilities</h2>
        <p className="text-3xl sm:text-5xl font-black text-white">Engineered For Total Digital Dominance</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceList.map((srv, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass-panel-interactive p-6 rounded-xl relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyber-blue-electric group-hover:bg-cyber-blue-electric group-hover:text-black transition-colors duration-300">
              <srv.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mt-4 mb-2 tracking-wide">{srv.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};