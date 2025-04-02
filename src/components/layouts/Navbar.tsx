import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import LoginButton from '../ui/LoginButton';
import SignUpButton from '../ui/SignUpButton';
import logo from '../../assets/SVG/Asset 12.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, dir, fontFamily } = useLanguage();
  const { theme } = useTheme();

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine appropriate text color for the current mode and scroll state
  const navbarBgClass = isScrolled 
    ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-lg' 
    : 'bg-transparent';

  const navItemClass = isScrolled
    ? ''
    : 'text-blue-dark dark:text-cream';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass} ${fontFamily} ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
      style={{ height: isScrolled ? '80px' : '90px' }}
      dir={dir}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-all duration-300 hover:scale-105">
            <img src={logo} alt="Hotspots Logo" className=" h-8 sm:h-12 md:h-18" />
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <NavLink to="/" label={t('home')} isScrolled={isScrolled} />
            <NavLink to="/explore" label={t('explore')} isScrolled={isScrolled} />
            <NavLink to="/login" label={t('login')} isScrolled={isScrolled} />
            <NavLink to="/register" label={t('register')} isScrolled={isScrolled} />
            
            <div className={`flex items-center ${navItemClass} ${dir === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-blue-dark dark:text-blue-light' : 'text-blue-dark dark:text-cream'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3 px-4">
              <MobileNavLink to="/" label={t('home')} />
              <MobileNavLink to="/explore" label={t('explore')} />
              <div className="py-2">
                <Link to="/login" className="block w-full">
                  <LoginButton text={t('login')} className="w-full mb-2" />
                </Link>
                <Link to="/register" className="block w-full">
                  <SignUpButton text={t('register')} className="w-full" />
                </Link>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {theme === 'dark' ? t('lightMode') : t('darkMode')}
                </span>
                <ThemeToggle />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('language')}
                </span>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Helper components
interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink = ({ to, label, isScrolled }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`
        font-medium transition-colors duration-300
        ${isScrolled 
          ? (isActive ? 'text-red-primary' : 'text-blue-dark dark:text-gray-200 hover:text-red-primary') 
          : (isActive ? 'text-red-primary' : 'text-blue-dark dark:text-cream hover:text-red-primary')}
      `}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink = ({ to, label }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`block py-2 font-medium ${isActive ? 'text-red-primary' : 'text-blue-dark dark:text-gray-200 hover:text-red-primary'}`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
