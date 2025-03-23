import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedSpots from '../components/home/FeaturedSpots';
import About from '../components/home/About';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div 
          key="loading"
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingSpinner size="large" message={t('loading_experience')} />
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <Hero />
          <FeaturedSpots />
          <About />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;