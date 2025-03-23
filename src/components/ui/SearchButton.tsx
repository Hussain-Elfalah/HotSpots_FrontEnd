import React from 'react';

interface SearchButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-3 text-white font-medium overflow-hidden rounded-md transition-all duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--search-btn-bg)',
        color: 'var(--search-btn-text)'
      }}
    >
      <span 
        className="absolute right-0 w-8 h-full flex items-center justify-center transform group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: 'var(--search-btn-hover-bg)'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <span className="z-10 transition-opacity duration-300 group-hover:opacity-0">
        {text}
      </span>
    </button>
  );
};

export default SearchButton; 