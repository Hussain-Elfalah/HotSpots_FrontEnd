import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LoginButton from '../ui/LoginButton';

interface LoginFormProps {
  setIsLoading: (isLoading: boolean) => void;
}

const LoginForm = ({ setIsLoading }: LoginFormProps) => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error message on input
    if (name === 'email' || name === 'password') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };
    
    if (!formData.email) {
      newErrors.email = t('email_required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('email_invalid');
      valid = false;
    }
    
    if (!formData.password) {
      newErrors.password = t('password_required');
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Will send login data when backend is setup
      // Simulating login request
      setTimeout(() => {
        setIsLoading(false);
        // Redirect user after successful login
        navigate('/dashboard');
      }, 1500);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} dir={dir}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('email_address')}
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            dir="ltr"
            value={formData.email}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.email ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-light focus:border-blue-light dark:text-white text-left`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('password')}
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            dir="ltr"
            value={formData.password}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.password ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-light focus:border-blue-light dark:text-white text-left`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-light focus:ring-blue-light border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className={`${dir === 'rtl' ? 'mr-2' : 'ml-2'} block text-sm text-gray-700 dark:text-gray-300`}>
            {t('remember_me')}
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-light hover:text-blue-dark dark:text-blue-300 dark:hover:text-blue-200 transition-colors duration-300">
            {t('forgot_password')}
          </a>
        </div>
      </div>

      <div>
        <LoginButton 
          text={t('sign_in')} 
          type="submit" 
          className="w-full" 
        />
      </div>
    </form>
  );
};

export default LoginForm;
