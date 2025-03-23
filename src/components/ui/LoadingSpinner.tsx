import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message 
}) => {
  const { dir, fontFamily } = useLanguage();
  
  // Size classes based on the size prop
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${fontFamily}`} dir={dir}>
      <div className={`loader ${sizeClasses[size]}`}></div>
      {message && (
        <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 