import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextColor = () => {
    if (!isHomePage) return '';
    if (isScrolled) return '';
    return 'text-blue-dark dark:text-cream';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`font-medium text-sm rounded-full p-2 transition-colors duration-300 hover:bg-gray-200/20 ${getTextColor()}`}
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher; 