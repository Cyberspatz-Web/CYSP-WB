import React from 'react';
import { motion } from 'framer-motion';

export const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-cyber-navy-deep overflow-hidden">
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Kinetic Energy Aura Blurs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyber-blue-electric filter blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyber-orange-glow filter blur-[150px]"
      />
    </div>
  );
};