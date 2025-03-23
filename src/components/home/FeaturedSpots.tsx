// src/components/home/FeaturedSpots.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import LoadingSpinner from '../ui/LoadingSpinner';
import ButtonHover from '../ui/ButtonHover';

interface Spot {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

const FeaturedSpots = () => {
  const { t, dir, fontFamily } = useLanguage();
  const [featuredSpots, setFeaturedSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will fetch data from API when we set up the backend
    // For now we'll use mock data
    const mockData: Spot[] = [
      {
        id: '1',
        name: t('mock_spot1_name'),
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        rating: 4.8,
        reviews: 124,
        description: t('mock_spot1_desc')
      },
      {
        id: '2',
        name: t('mock_spot2_name'),
        image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        rating: 4.5,
        reviews: 87,
        description: t('mock_spot2_desc')
      },
      {
        id: '3',
        name: t('mock_spot3_name'),
        image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        rating: 4.7,
        reviews: 203,
        description: t('mock_spot3_desc')
      }
    ];
    
    setTimeout(() => {
      setFeaturedSpots(mockData);
      setLoading(false);
    }, 1000);
  }, [t]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.section 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute -right-64 top-10 w-96 h-96 rounded-full bg-blue-light/5 dark:bg-blue-light/10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -left-64 bottom-10 w-96 h-96 rounded-full bg-red-primary/5 dark:bg-red-primary/10"
        animate={{ scale: [1, 1.4, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={`container mx-auto px-4 relative z-10 ${fontFamily}`} dir={dir}>
        <motion.div 
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-dark dark:text-white">{t('popular_spots')}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('discover')}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="large" message={t('loading')} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSpots.map((spot, index) => (
              <SpotCard key={spot.id} spot={spot} index={index} />
            ))}
          </div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/explore" className="block mx-auto w-fit">
            <ButtonHover text={t('view_all')} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

interface SpotCardProps {
  spot: Spot;
  index: number;
}

const SpotCard = ({ spot, index }: SpotCardProps) => {
  const { t } = useLanguage();
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.1 * index,
        ease: "easeOut" 
      } 
    }
  };
  
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform-gpu"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">⭐</span>
              <span className="font-medium text-white">{spot.rating}</span>
              <span className="text-white/80 text-sm ml-1">({spot.reviews})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-dark dark:text-white mb-3">{spot.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{spot.description}</p>
        <Link
          to={`/spot/${spot.id}`}
          className="inline-block text-red-primary hover:text-red-dark font-medium group"
        >
          <span className="flex items-center">
            {t('view_details')} 
            <motion.span 
              className="inline-block ml-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedSpots;