import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SignUpButton from '../ui/SignUpButton';

interface RegisterFormProps {
  setIsLoading: (isLoading: boolean) => void;
}

const RegisterForm = ({ setIsLoading }: RegisterFormProps) => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error message on input
    if (name in errors) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { 
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    };
    
    if (!formData.username) {
      newErrors.username = t('username_required');
      valid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = t('username_min_length');
      valid = false;
    }
    
    if (!formData.email) {
      newErrors.email = t('email_required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('email_invalid');
      valid = false;
    }
    
    if (!formData.phone) {
      newErrors.phone = t('phone_required');
      valid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = t('phone_invalid');
      valid = false;
    }
    
    if (!formData.password) {
      newErrors.password = t('password_required');
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = t('password_min_length');
      valid = false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('passwords_not_match');
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Will send registration data when backend is setup
      // Simulating registration request
      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 1500);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} dir={dir}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('username')}
        </label>
        <div className="mt-1">
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.username ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-light focus:border-blue-light dark:text-white text-left`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
          )}
        </div>
      </div>

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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('phone')}
        </label>
        <div className="mt-1">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            value={formData.phone}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.phone ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-light focus:border-blue-light dark:text-white text-left`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
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
            autoComplete="new-password"
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

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('confirm_password')}
        </label>
        <div className="mt-1">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            dir="ltr"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.confirmPassword ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-light focus:border-blue-light dark:text-white text-left`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div>
        <SignUpButton 
          text={t('sign_up')} 
          type="submit" 
          className="w-full" 
        />
      </div>
    </form>
  );
};

export default RegisterForm;