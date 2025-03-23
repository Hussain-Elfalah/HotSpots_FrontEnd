import React from 'react';

interface ButtonHoverProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const ButtonHover: React.FC<ButtonHoverProps> = ({
  text,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`btn-hover ${className}`}
    >
      <span className="text">{text}</span>
      <span className="line"></span>
    </button>
  );
};

export default ButtonHover; 