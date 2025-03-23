import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import GoogleAuth from '../components/auth/GoogleAuth';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useLanguage } from '../context/LanguageContext';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t, dir, fontFamily } = useLanguage();

  return (
    <div className={`w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 ${fontFamily}`} dir={dir}>
      {isLoading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingSpinner size="large" message={t('loading')} />
        </div>
      ) : null}
      <div className="max-w-md w-full mx-auto space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80 transition-all duration-500">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-dark dark:text-white">
            {t('sign_up')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t('or')}{' '}
            <Link to="/login" className="font-medium text-red-primary hover:text-red-dark transition-colors duration-300">
              {t('already_have_account')}
            </Link>
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <RegisterForm setIsLoading={setIsLoading} />
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                {t('sign_up_with')}
              </span>
            </div>
          </div>
          
          <GoogleAuth buttonText={`${t('sign_up_with')} ${t('google')}`} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
};

export default Register;
