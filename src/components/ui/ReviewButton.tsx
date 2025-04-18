import React from 'react';

interface ReviewButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium ${className} transition duration-300 ease-out border-2 border-red-primary rounded-md shadow-md`}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-primary group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-red-primary transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">{text}</span>
    </button>
  );
};

export default ReviewButton; 