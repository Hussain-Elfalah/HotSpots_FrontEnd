// src/components/explore/SearchFilters.tsx
import { useState, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SearchButton from '../ui/SearchButton';
import { motion } from 'framer-motion';

interface SearchFiltersProps {
  onSearch?: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const { t, dir, fontFamily } = useLanguage();
  const [location, setLocation] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const categories = [
    { value: 'cafe', label: t('category_cafe') },
    { value: 'restaurant', label: t('category_restaurant') },
    { value: 'park', label: t('category_park') },
    { value: 'museum', label: t('category_museum') },
    { value: 'shopping', label: t('category_shopping') },
    { value: 'sports', label: t('category_sports') }
  ];

  const ratings = [5, 4, 3, 2, 1];

  // Search function
  const performSearch = useCallback(() => {
    console.log('Performing search with:');
    console.log('- Categories:', selectedCategories);
    console.log('- Rating:', selectedRating);
    console.log('- Location:', location);
    
    const filters = {
      location,
      categories: selectedCategories,
      rating: selectedRating
    };
    
    if (onSearch) {
      onSearch(filters);
    }
  }, [location, selectedCategories, selectedRating, onSearch]);

  // Toggle a category in the selectedCategories array
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleRatingClick = (rating: number) => {
    // If the same rating is clicked twice, clear the selection
    // Otherwise set the clicked rating as the minimum
    setSelectedRating(prev => prev === rating ? null : rating);
  };

  const handleSearch = () => {
    performSearch();
  };

  const handleReset = () => {
    setLocation('');
    setSelectedCategories([]);
    setSelectedRating(null);
    
    // Only trigger search after state update is complete
    setTimeout(() => {
      if (onSearch) {
        onSearch({ location: '', categories: [], rating: null });
      }
    }, 0);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 mb-4 ${fontFamily} max-w-full overflow-hidden`} dir={dir}>
      <div className="space-y-3 sm:space-y-4">
        {/* Search Input */}
        <div>
          <label htmlFor="location" className="block text-gray-700 dark:text-gray-300 mb-1 sm:mb-1.5 text-sm sm:text-base font-medium">{t('location')}</label>
          <input
            type="text"
            id="location"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
            placeholder={t('enter_location')}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 sm:mb-1.5 text-sm sm:text-base font-medium">{t('category')}</label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleCategory(category.value)}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200
                  ${selectedCategories.includes(category.value)
                    ? 'bg-red-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                aria-pressed={selectedCategories.includes(category.value)}
              >
                {selectedCategories.includes(category.value) && (
                  <span className="mr-1">✓</span>
                )}
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 sm:mb-1.5 text-sm sm:text-base font-medium">{t('minimum_rating')}</label>
          <div className="flex items-center gap-1 sm:gap-2">
            {ratings.map((rating) => (
              <motion.button
                key={rating}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRatingClick(rating)}
                className={`text-lg sm:text-xl transition-colors duration-200
                  ${selectedRating !== null && rating <= selectedRating
                    ? 'text-yellow-500'
                    : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'
                  }`}
              >
                ★
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2 sm:gap-3">
        <SearchButton 
          text={t('search')} 
          onClick={handleSearch}
          className="w-full text-sm sm:text-base py-1.5 sm:py-2" 
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 w-full text-sm sm:text-base"
        >
          {t('reset')}
        </motion.button>
      </div>
    </div>
  );
};

export default SearchFilters;