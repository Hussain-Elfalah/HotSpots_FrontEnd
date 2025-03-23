import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface SocialIconProps {
  url: string;
  icon: string;
}

interface FooterLinkProps {
  to: string;
  label: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, dir, fontFamily } = useLanguage();

  return (
    <footer className={`bg-blue-dark text-white py-12 ${fontFamily}`} dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* الجزء الأول */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Hot</span>
              <span className="text-cream">Spots</span>
            </h3>
            <p className="mb-4">{t('discover')}</p>
            <div className={`flex ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
              <SocialIcon url="#" icon="facebook" />
              <SocialIcon url="#" icon="twitter" />
              <SocialIcon url="#" icon="instagram" />
            </div>
          </div>

          {/* الجزء الثاني */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quick_links')}</h4>
            <ul className="space-y-2">
              <FooterLink to="/" label={t('home')} />
              <FooterLink to="/explore" label={t('explore')} />
              <FooterLink to="/login" label={t('login')} />
              <FooterLink to="/register" label={t('register')} />
            </ul>
          </div>

          {/* الجزء الثالث */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact_us')}</h4>
            <p className="mb-2">{t('email')}: info@hotspots.com</p>
            <p className="mb-2">{t('phone')}: +123 456 7890</p>
            <p>{t('address')}</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} HotSpots. {t('rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

// مكونات المساعدة
const SocialIcon = ({ url, icon }: SocialIconProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-cream transition-colors duration-300 mr-4"
    >
      <i className={`fab fa-${icon} text-xl`}></i>
    </a>
  );
};

const FooterLink = ({ to, label }: FooterLinkProps) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-300 hover:text-cream transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
