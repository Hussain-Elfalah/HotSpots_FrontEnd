import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

interface HeroButtonProps {
  text: string;
  hoverText?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  primary?: boolean;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  text,
  hoverText,
  onClick,
  type = 'button',
  className = '',
  primary = false
}) => {
  const { dir } = useLanguage();
  const { theme } = useTheme();
  const isRTL = dir === 'rtl';
  const isDark = theme === 'dark';
  const [isHovered, setIsHovered] = useState(false);
  
  // Use hover text if provided, otherwise use original text
  const displayText = isHovered && hoverText ? hoverText : text;

  return (
    <motion.button 
      type={type}
      onClick={onClick}
      className={`hero-btn group relative flex items-center justify-center px-3 xs:px-6 sm:px-10 py-2 xs:py-3 sm:py-4 font-bold text-sm xs:text-base sm:text-lg overflow-hidden rounded-full ${primary ? 'hero-btn-primary' : 'hero-btn-secondary'} ${className}`}
      style={{
        backgroundColor: 'transparent',
        color: isDark ? 'var(--cream)' : 'var(--blue-dark)',
        minWidth: '120px',
        minHeight: '40px',
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Circular background that expands */}
      <span 
        className="hero-btn-circle absolute h-full rounded-full z-[-1]"
        style={{
          [isRTL ? 'right' : 'left']: '0', 
          width: '56px',
          backgroundColor: primary ? 'var(--blue-primary)' : 'var(--red-primary)',
        }}
      ></span>
      
      {/* Additional effect layer */}
      <span 
        className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-[-1]"
        style={{
          background: `radial-gradient(circle, ${primary ? 'var(--blue-light)' : 'var(--red-primary)'} 0%, transparent 70%)`,
          transform: isRTL ? 'translateX(-30%)' : 'translateX(30%)',
        }}
      ></span>
      
      {/* Subtle shine effect */}
      <span 
        className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-700 z-[-1]"
        style={{
          background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.15) 50%, transparent 55%)',
          backgroundSize: '250% 250%',
          animation: 'shimmer 3s infinite linear',
        }}
      ></span>
      
      {/* Text */}
      <motion.span 
        className="text-sm xs:text-base sm:text-xl font-bold relative z-[1] min-w-[50px] xs:min-w-[80px] sm:min-w-[120px]"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: [1, 0, 1],
          y: isHovered && hoverText ? [0, -10, 0] : 0
        }}
        transition={{ 
          duration: isHovered && hoverText ? 0.3 : 0,
          times: [0, 0.5, 1]
        }}
      >
        {displayText}
      </motion.span>
      
      {/* Arrow icon with animation */}
      <motion.div
        className={`relative z-[1] ${isRTL ? 'mr-1 xs:mr-1 sm:mr-2' : 'ml-1 xs:ml-1 sm:ml-2'}`}
        animate={{ x: 0 }}
        whileHover={{ x: isRTL ? -5 : 5 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.3
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`hero-btn-arrow h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${isRTL ? 'rotate-180' : ''} transform transition-all duration-300 ease-linear`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export type { HeroButtonProps };
export default HeroButton; 