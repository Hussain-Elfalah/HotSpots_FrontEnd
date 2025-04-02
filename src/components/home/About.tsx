// src/components/home/About.tsx
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const About = () => {
  const { t, dir, fontFamily } = useLanguage();

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-0 w-32 h-32 bg-red-primary rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-40 h-40 bg-blue-primary rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, -120, 0],
          y: [0, -70, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={`container mx-auto px-4 relative z-10 ${fontFamily}`} dir={dir}>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0 lg:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark dark:text-white mb-6">
              {t('about_title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              {t('about_description')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              {t('about_mission')}
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <motion.div 
                className="h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Restaurant with customers"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-primary">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('spots')}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-dark dark:text-white text-center mb-12">
            {t('why_hotspots')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔍"
              title={t('feature1_title')}
              description={t('feature1_desc')}
              delay={0}
            />
            <FeatureCard
              icon="⭐"
              title={t('feature2_title')}
              description={t('feature2_desc')}
              delay={0.2}
            />
            <FeatureCard
              icon="📱"
              title={t('feature3_title')}
              description={t('feature3_desc')}
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 1.2 }}
      whileHover={{ y: -8 }}
    >
      <motion.div 
        className="text-4xl mb-4"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 1.2 + 0.2 }}
        whileHover={{ 
          scale: 1.2, 
          rotate: [0, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      <h4 className="text-xl font-bold text-blue-dark dark:text-white mb-3">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default About;