import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ButtonHover from '../components/ui/ButtonHover';
import ReviewButton from '../components/ui/ReviewButton';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

interface Spot {
  id: string;
  name: string;
  images: string[];
  rating: number;
  reviews: Review[];
  description: string;
  location: string;
  mapUrl: string;
  category: string;
  features: string[];
  openingHours: string;
  phone: string;
  website: string;
}

interface InfoItemProps {
  title: string;
  value: React.ReactNode;
}

const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</h4>
      <p className="text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  );
};

const SpotDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [spot, setSpot] = useState<Spot | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const { t, dir, fontFamily } = useLanguage();

  useEffect(() => {
    // هنا سيتم جلب بيانات المكان من واجهة برمجة التطبيقات عندما نقوم بإعداد الخلفية
    // مؤقتاً سنستخدم بيانات وهمية
    const fetchSpotDetails = async () => {
      try {
        // محاكاة لطلب API
        setTimeout(() => {
          const mockSpot: Spot = {
            id: id || '1',
            name: t('mock_spot1_name'),
            images: [
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            ],
            rating: 4.8,
            reviews: [
              {
                id: 'r1',
                user: {
                  name: t('review_user1'),
                  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
                },
                rating: 5,
                comment: t('review_comment1'),
                date: '2023-06-15'
              },
              {
                id: 'r2',
                user: {
                  name: t('review_user2'),
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
                },
                rating: 4,
                comment: t('review_comment2'),
                date: '2023-05-22'
              }
            ],
            description: t('mock_spot1_desc'),
            location: t('mock_spot1_location'),
            mapUrl: 'https://maps.google.com/?q=24.7136,46.6753',
            category: t('category_cafe'),
            features: [t('feature_wifi'), t('feature_outdoor'), t('feature_work_friendly'), t('feature_snacks')],
            openingHours: t('opening_hours'),
            phone: '+966 54 123 4567',
            website: 'https://example.com/cafe'
          };
          
          setSpot(mockSpot);
          document.title = `${mockSpot.name} - HotSpots`;
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching spot details:', error);
        setLoading(false);
      }
    };

    fetchSpotDetails();
  }, [id, t]);

  if (loading) {
    return (
      <div className={`container mx-auto px-4 py-12 mt-16 ${fontFamily}`} dir={dir}>
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="large" message={t('loading')} />
        </div>
      </div>
    );
  }

  if (!spot) {
    return (
      <div className={`container mx-auto px-4 py-12 mt-16 ${fontFamily}`} dir={dir}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-primary mb-4">{t('spot_not_found')}</h2>
          <p className="mb-6 dark:text-gray-300">{t('spot_not_found_desc')}</p>
          <Link 
            to="/explore" 
            className="inline-block px-6 py-2 bg-blue-dark text-white font-medium rounded-md"
          >
            {t('back_to_explore')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container mx-auto px-4 py-12 mt-16 ${fontFamily}`} dir={dir}>
      {/* زر العودة */}
      <Link 
        to="/explore" 
        className="inline-flex items-center text-blue-dark dark:text-blue-light hover:text-red-primary mb-6 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {t('back_to_spots')}
      </Link>

      {/* معلومات المكان الرئيسية */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* معرض الصور */}
          <div className="p-6">
            <div className="mb-4 h-80 overflow-hidden rounded-lg">
              <img
                src={spot.images[activeImage]}
                alt={spot.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 space-x-reverse">
              {spot.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-red-primary' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${spot.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* تفاصيل المكان */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-blue-dark dark:text-blue-light mb-2">{spot.name}</h1>
                <div className="flex items-center bg-blue-light text-white px-3 py-1 rounded-full">
                  <span className="font-bold ml-1">{spot.rating}</span>
                  <span>⭐</span>
                </div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 mb-4">
                <span className="mr-1">📍</span>
                {spot.location}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{spot.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <InfoItem title={t('category')} value={spot.category} />
              <InfoItem title={t('opening_hours_label')} value={spot.openingHours} />
              <InfoItem title={t('phone')} value={spot.phone} />
              <InfoItem 
                title={t('website')} 
                value={
                  <a 
                    href={spot.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-light hover:underline"
                  >
                    {t('visit_website')}
                  </a>
                } 
              />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-blue-dark dark:text-blue-light mb-3">{t('features')}</h3>
              <div className="flex flex-wrap gap-2">
                {spot.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-cream dark:bg-gray-700 text-blue-dark dark:text-blue-light px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a 
                href={spot.mapUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <ButtonHover text={t('view_on_map')} className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* قسم التقييمات */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-bold text-blue-dark dark:text-blue-light mb-6">{t('reviews')}</h2>
        
        {/* كتابة التقييم */}
        <div className="mb-8">
          <Link
            to={`/login?redirect=/spot/${id}`}
            className="inline-block"
          >
            <ReviewButton text={t('write_review')} />
          </Link>
        </div>
        
        {/* قائمة التقييمات */}
        <div className="space-y-6">
          {spot.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
              <div className="flex items-start">
                <img 
                  src={review.user.avatar} 
                  alt={review.user.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold dark:text-gray-200">{review.user.name}</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">{'★'.repeat(review.rating)}</span>
                      <span className="text-gray-400 text-sm">{review.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{review.comment}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotDetail;
