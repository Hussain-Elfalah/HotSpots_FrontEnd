import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import HeroButton from '../ui/HeroButton';
import { useEffect, useState } from 'react';
import ScrollIndicator from '../ui/ScrollIndicator';

const Hero = () => {
  const { t, dir, fontFamily, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For English, split the title into words (not individual letters)
  const titleWords = language === 'ar' ? [] : t('hero_title').split(' ');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.section 
      className={`relative h-screen flex items-center overflow-hidden ${fontFamily}`} 
      dir={dir}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute -top-64 -right-64 w-[800px] h-[800px] rounded-full bg-red-primary/10 dark:bg-red-primary/20"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)` 
        }}
      />
      <motion.div 
        className="absolute -bottom-96 -left-64 w-[700px] h-[700px] rounded-full bg-blue-primary/10 dark:bg-blue-primary/20"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -10, 0],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)` 
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {language === 'ar' ? (
            // Arabic title with simpler animation
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-dark to-red-primary dark:from-blue-light dark:to-red-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('hero_title')}
            </motion.h1>
          ) : (
            // English title with word animation
            <motion.h1
              className="mb-6 text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-dark to-red-primary dark:from-blue-light dark:to-red-primary leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2 whitespace-normal"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          )}

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              transform: `translateY(${scrollY * 0.05}px)` 
            }}
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/explore">
              <HeroButton text={t('start_exploring')} hoverText={t('lets_go')} primary />
            </Link>
            <Link to="/login">
              <HeroButton text={t('sign_in')} hoverText={t('join_us')} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator at bottom of screen */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollIndicator text={t('scroll_down')} />
      </div>
    </motion.section>
  );
};

export default Hero;
