// src/components/explore/SearchFilters.tsx
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SearchButton from '../ui/SearchButton';

interface SearchFiltersProps {
  onSearch?: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const { t, dir, fontFamily } = useLanguage();
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');

  const handleSearch = () => {
    const filters = {
      location,
      category,
      rating: rating ? parseInt(rating, 10) : undefined
    };
    
    if (onSearch) {
      onSearch(filters);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 ${fontFamily}`} dir={dir}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="location" className="block text-gray-700 dark:text-gray-300 mb-2">{t('location')}</label>
          <input
            type="text"
            id="location"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder={t('enter_location')}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 mb-2">{t('category')}</label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">{t('all_categories')}</option>
            <option value="cafe">{t('category_cafe')}</option>
            <option value="restaurant">{t('category_restaurant')}</option>
            <option value="park">{t('category_park')}</option>
            <option value="museum">{t('category_museum')}</option>
            <option value="shopping">{t('category_shopping')}</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="rating" className="block text-gray-700 dark:text-gray-300 mb-2">{t('minimum_rating')}</label>
          <select
            id="rating"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">{t('any_rating')}</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center">
        <SearchButton 
          text={t('search')} 
          onClick={handleSearch}
          className="w-full md:w-auto" 
        />
      </div>
    </div>
  );
};

export default SearchFilters;