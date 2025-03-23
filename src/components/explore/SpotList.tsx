import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface Spot {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  location?: string;
  category?: string;
}

interface SpotListProps {
  spots: Spot[];
}

const SpotList = ({ spots }: SpotListProps) => {
  const { t, dir, fontFamily } = useLanguage();

  // إذا لم تكن هناك أماكن لعرضها
  if (spots.length === 0) {
    return (
      <div className={`text-center py-12 ${fontFamily}`} dir={dir}>
        <p className="text-xl text-gray-600 dark:text-gray-300">{t('no_results')}</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{t('try_different_filters')}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fontFamily}`} dir={dir}>
      {spots.map((spot, index) => (
        <SpotCard key={spot.id} spot={spot} index={index} />
      ))}
    </div>
  );
};

interface SpotCardProps {
  spot: Spot;
  index: number;
}

const SpotCard = ({ spot, index }: SpotCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        {spot.category && (
          <span className="absolute top-3 right-3 bg-white dark:bg-gray-700 bg-opacity-90 text-blue-dark dark:text-blue-light text-sm px-3 py-1 rounded-full">
            {spot.category}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-blue-dark dark:text-blue-light">{spot.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="font-medium dark:text-gray-200">{spot.rating}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm mr-1">({spot.reviews})</span>
          </div>
        </div>
        {spot.location && (
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            <span>📍 {spot.location}</span>
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{spot.description}</p>
        <Link
          to={`/spot/${spot.id}`}
          className="inline-block text-red-primary hover:text-red-dark font-medium"
        >
          {t('view_details')} →
        </Link>
      </div>
    </motion.div>
  );
};

export default SpotList;
