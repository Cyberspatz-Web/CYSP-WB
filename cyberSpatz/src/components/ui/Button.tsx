// import React from 'react';
// import { motion } from 'framer-motion';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary' | 'cyber';
//   children: React.ReactNode;
// }

// export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
//   const baseStyles = "relative px-6 py-3 font-semibold rounded-md tracking-wide transition-all duration-200 text-sm overflow-hidden flex items-center gap-2 justify-center";
  
//   const variants = {
//     primary: "bg-gradient-to-r from-blue-600 to-cyber-blue text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(0,240,255,0.5)] border border-blue-400/20",
//     secondary: "glass-panel text-white hover:bg-white/10 border border-white/10",
//     cyber: "bg-transparent text-cyber-blue-electric border border-cyber-blue-electric/40 hover:border-cyber-blue-electric shadow-[inset_0_0_8px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {variant === 'cyber' && (
//         <span className="absolute inset-0 bg-cyber-blue-electric/5 absolute-stretch animate-pulse-slow" />
//       )}
//       {children}
//     </motion.button>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'cyber';
  children: React.ReactNode;
} & HTMLMotionProps<'button'>;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    "relative px-6 py-3 font-semibold rounded-md tracking-wide transition-all duration-200 text-sm overflow-hidden flex items-center gap-2 justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyber-blue text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(0,240,255,0.5)] border border-blue-400/20",

    secondary:
      "glass-panel text-white hover:bg-white/10 border border-white/10",

    cyber:
      "bg-transparent text-cyber-blue-electric border border-cyber-blue-electric/40 hover:border-cyber-blue-electric shadow-[inset_0_0_8px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === 'cyber' && (
        <span className="absolute inset-0 bg-cyber-blue-electric/5 animate-pulse-slow" />
      )}
      {children}
    </motion.button>
  );
};

export default Button;
