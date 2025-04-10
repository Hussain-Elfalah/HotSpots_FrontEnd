import { useState, useEffect } from 'react';
import SpotList from '../components/explore/SpotList';
import SearchFilters from '../components/explore/SearchFilters';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from '../components/ui/LoadingSpinner';

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

const Explore = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, dir, fontFamily } = useLanguage();
  
  // Mock data moved outside useEffect for reuse
  const mockData: Spot[] = [
    {
      id: '1',
      name: t('mock_spot1_name'),
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.8,
      reviews: 124,
      description: t('mock_spot1_desc'),
      location: t('mock_spot1_location'),
      category: t('category_cafe')
    },
    {
      id: '2',
      name: t('mock_spot2_name'),
      image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.5,
      reviews: 87,
      description: t('mock_spot2_desc'),
      location: t('mock_spot2_location'),
      category: t('category_museum')
    },
    {
      id: '3',
      name: t('mock_spot3_name'),
      image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.7,
      reviews: 203,
      description: t('mock_spot3_desc'),
      location: t('mock_spot3_location'),
      category: t('category_park')
    },
    {
      id: '4',
      name: t('mock_spot4_name'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.6,
      reviews: 178,
      description: t('mock_spot4_desc'),
      location: t('mock_spot4_location'),
      category: t('category_restaurant')
    },
    {
      id: '5',
      name: t('mock_spot5_name'),
      image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      rating: 4.3,
      reviews: 321,
      description: t('mock_spot5_desc'),
      location: t('mock_spot5_location'),
      category: t('category_shopping')
    },
    {
      id: '6',
      name: t('mock_spot6_name'),
      image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.4,
      reviews: 95,
      description: t('mock_spot6_desc'),
      location: t('mock_spot6_location'),
      category: t('category_sports')
    }
  ];
  
  useEffect(() => {
    document.title = `${t('explore_title')} - HotSpots`;
    // Initialize with mock data
    setTimeout(() => {
      setSpots(mockData);
      setLoading(false);
    }, 1000);
  }, [t, mockData]);
  
  const handleSearch = (filters: any) => {
    console.log('Search filters received:', filters);
    
    // Start loading only if we have active filters
    const hasActiveFilters = 
      (filters.location && filters.location.trim().length > 0) || 
      (filters.categories && filters.categories.length > 0) || 
      filters.rating !== null;
    
    if (hasActiveFilters) {
      setLoading(true);
    }
    
    // Simulate API call with filtering
    setTimeout(() => {
      let filteredSpots = [...mockData];
      console.log('Initial spots count:', filteredSpots.length);
      
      // Filter by location
      if (filters.location && filters.location.trim().length > 0) {
        const locationLower = filters.location.toLowerCase();
        filteredSpots = filteredSpots.filter(spot => 
          spot.location?.toLowerCase().includes(locationLower) || 
          spot.name.toLowerCase().includes(locationLower)
        );
        console.log('After location filter:', filteredSpots.length);
      }
      
      // Filter by categories (if any selected)
      if (filters.categories && filters.categories.length > 0) {
        console.log('Selected categories:', filters.categories);
        
        // Log current spots before filtering
        console.log("Before category filtering, spots:", filteredSpots.map(s => s.name));
        
        filteredSpots = filteredSpots.filter(spot => {
          // If spot has no category, don't include it
          if (!spot.category) {
            return false;
          }
          
          // First try direct match with each category value
          for (const cat of filters.categories) {
            // Direct match with the category value
            if (spot.category.toLowerCase() === cat.toLowerCase()) {
              return true;
            }
            
            // Check if it matches the translation key pattern
            if (spot.category.toLowerCase().includes(`category_${cat.toLowerCase()}`)) {
              return true;
            }
          }
          
          return false;
        });
        
        console.log('After category filter, remaining spots:', filteredSpots.map(s => s.name));
      }
      
      // Filter by minimum rating
      if (filters.rating) {
        console.log('Filtering by rating:', filters.rating);
        filteredSpots = filteredSpots.filter(spot => 
          spot.rating >= filters.rating
        );
        console.log('After rating filter:', filteredSpots.length);
      }
      
      console.log('Final filtered spots:', filteredSpots.length);
      setSpots(filteredSpots);
      setLoading(false);
    }, 300);
  };

  return (
    <div className={`w-full mx-auto px-2 sm:px-4 py-6 sm:py-8 mt-12 sm:mt-16 ${fontFamily} max-w-screen-xl overflow-x-hidden`} dir={dir}>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center dark:text-gray-50">{t('explore_title')}</h1>
      <SearchFilters onSearch={handleSearch} />
      
      <div className="relative min-h-[300px]">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/50 dark:bg-gray-900/50 z-10 rounded-lg">
            <LoadingSpinner size="large" message={t('loading')} />
          </div>
        )}
        
        {spots.length > 0 ? (
          <SpotList spots={spots} />
        ) : (
          <div className={`text-center py-12 ${fontFamily}`} dir={dir}>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('no_results')}</p>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{t('try_different_filters')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;