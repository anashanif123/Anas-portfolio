// components/WaveBackground.tsx
import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-64"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="url(#wave-gradient-1)"
        />
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        className="absolute bottom-0 left-0 w-full h-48"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill="url(#wave-gradient-2)"
        />
        <defs>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default WaveBackground;
