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
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${fontFamily}`} dir={dir}>
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
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-full"
    >
      <div className="h-40 sm:h-48 relative overflow-hidden">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        {spot.category && (
          <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-primary text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-md">
            {spot.category}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-blue-dark dark:text-blue-light line-clamp-1">{spot.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="font-medium dark:text-gray-200">{spot.rating}</span>
            <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mr-1">({spot.reviews})</span>
          </div>
        </div>
        {spot.location && (
          <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2">
            <span>📍 {spot.location}</span>
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{spot.description}</p>
        <Link
          to={`/spot/${spot.id}`}
          className="inline-block text-red-primary hover:text-red-dark font-medium text-sm sm:text-base"
        >
          {t('view_details')} {isRTL ? "←" : "→"}
        </Link>
      </div>
    </motion.div>
  );
};

export default SpotList;
