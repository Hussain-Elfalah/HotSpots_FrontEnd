import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface ScrollIndicatorProps {
  text: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ text }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div 
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })}
    >
      <motion.span 
        className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-blue-dark'} mb-2`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {text}
      </motion.span>
      
      <motion.div
        className={`w-8 h-12 border-2 ${isDark ? 'border-gray-300' : 'border-blue-dark'} rounded-full flex justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div
          className="w-1.5 h-3 bg-red-primary rounded-full mt-2"
          animate={{ 
            y: [0, 14, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop", 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export type { ScrollIndicatorProps };
export default ScrollIndicator; 