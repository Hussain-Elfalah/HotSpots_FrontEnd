import React from 'react';

interface LoginButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group relative inline-block px-8 py-3 font-medium overflow-hidden rounded-md shadow-md ${className}`}
      style={{
        backgroundColor: 'var(--login-btn-bg)',
        color: 'var(--login-btn-text)'
      }}
    >
      <span 
        className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
        style={{
          backgroundColor: 'var(--login-btn-hover-bg)'
        }}
      ></span>
      <span className="relative z-10 flex items-center justify-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </span>
        {text}
      </span>
    </button>
  );
};

export default LoginButton; 