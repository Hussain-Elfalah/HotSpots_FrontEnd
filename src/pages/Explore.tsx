import { useState, useEffect } from 'react';
import SpotList from '../components/explore/SpotList';
import SearchFilters from '../components/explore/SearchFilters';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ButtonHover from '../components/ui/ButtonHover';

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
  
  useEffect(() => {
    document.title = `${t('explore_title')} - HotSpots`;
    // هنا سنقوم بجلب البيانات لاحقاً عند إعداد الخلفية
    // مؤقتاً سنستخدم بيانات وهمية
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
    
    setTimeout(() => {
      setSpots(mockData);
      setLoading(false);
    }, 1000);
  }, [t]); // Add t as dependency to update when language changes
  
  const handleSearch = (filters: any) => {
    setLoading(true);
    
    // محاكاة عملية البحث
    setTimeout(() => {
      // هنا سيتم تنفيذ البحث الفعلي عندما نقوم بإعداد الخلفية
      // حالياً سنقوم بتصفية البيانات الوهمية الموجودة لدينا
      setLoading(false);
    }, 800);
  };

  return (
    <div className={`container mx-auto px-4 py-8 mt-16 ${fontFamily}`} dir={dir}>
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-gray-50">{t('explore_title')}</h1>
      <SearchFilters onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="large" message={t('loading')} />
        </div>
      ) : (
        <SpotList spots={spots} />
      )}
    </div>
  );
};

export default Explore;