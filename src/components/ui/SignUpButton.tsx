import React from 'react';

interface SignUpButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden transition-all duration-300 ease-out rounded-md ${className}`}
      style={{
        backgroundColor: 'var(--signup-btn-bg)',
        color: 'var(--signup-btn-text)',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'var(--signup-btn-border)'
      }}
    >
      <span 
        className="absolute inset-0 w-full h-0 opacity-20 transition-all duration-300 ease-out group-hover:h-full"
        style={{ backgroundColor: 'var(--signup-btn-hover-bg)' }}
      ></span>
      <span className="absolute inset-0 w-0 h-0 transition-all duration-300 ease-out opacity-5 group-hover:w-full group-hover:h-full"
        style={{ backgroundColor: 'var(--signup-btn-hover-bg)' }}
      ></span>
      <span 
        className="absolute inset-0 w-0 h-full right-0 transition-all duration-300 ease-out opacity-10 group-hover:w-full group-hover:right-auto group-hover:left-0"
        style={{ backgroundColor: 'var(--signup-btn-hover-bg)' }}
      ></span>
      <span className="relative flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        {text}
      </span>
    </button>
  );
};

export default SignUpButton; 