import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonHover from '../ui/ButtonHover';

interface GoogleAuthProps {
  buttonText: string;
  setIsLoading: (isLoading: boolean) => void;
}

const GoogleAuth = ({ buttonText, setIsLoading }: GoogleAuthProps) => {
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    setIsLoading(true);
    
    // هنا سيتم تنفيذ مصادقة جوجل عندما نقوم بإعداد Firebase
    // محاكاة طلب تسجيل الدخول
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className="flex w-full justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
    >
      <img 
        src="https://www.svgrepo.com/show/355037/google.svg" 
        className="w-6 h-6 mr-2" 
        alt="Google logo" 
      />
      <span className="text-gray-700 dark:text-white font-medium">
        {buttonText}
      </span>
    </button>
  );
};

export default GoogleAuth;
