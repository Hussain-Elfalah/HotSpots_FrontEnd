import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: string;
  fontFamily: string;
}

// Complete translations object covering the entire website
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'home': 'Home',
    'explore': 'Explore',
    'login': 'Login',
    'register': 'Register',
    'dashboard': 'Dashboard',
    'logout': 'Logout',
    'popular_spots': 'Popular Spots',
    'discover': 'Discover amazing places in your city and enjoy unforgettable experiences.',
    'about': 'About Us',
    'search': 'Search',
    'darkMode': 'Dark Mode',
    'lightMode': 'Light Mode',
    'language': 'العربية',
    
    // Footer
    'quick_links': 'Quick Links',
    'contact_us': 'Contact Us',
    'email': 'Email',
    'phone': 'Phone',
    'address': 'Address: Main Street, Downtown',
    'rights_reserved': 'All rights reserved',
    
    // About section
    'about_title': 'What is HotSpots?',
    'about_description': 'A platform that brings together the best places and attractions in your city, with user reviews and experiences to help you choose your next destination.',
    'discover_places': 'Discover New Places',
    'discover_places_desc': 'Find the best spots in your city that you might not know about',
    'share_experience': 'Share Your Experience',
    'share_experience_desc': 'Add your reviews and photos of places you have visited to help others',
    'stay_updated': 'Stay Updated',
    'stay_updated_desc': 'Get notifications about new places and upcoming events',
    
    // Explore page
    'explore_title': 'Explore Featured Spots',
    'loading': 'Loading...',
    'no_results': 'No results found',
    'view_details': 'View Details',
    'filter_by': 'Filter by',
    'category': 'Category',
    'rating': 'Rating',
    'location': 'Location',
    'price_range': 'Price Range',
    'apply_filters': 'Apply Filters',
    'reset_filters': 'Reset',
    'sort_by': 'Sort by',
    'newest': 'Newest',
    'highest_rated': 'Highest Rated',
    'most_popular': 'Most Popular',
    'search_placeholder': 'Search for places...',
    'search_spot': 'Search Spots',
    'reset': 'Reset Filters',
    'view_on_map': 'View on Map',
    
    // Spot details
    'spot_details': 'Spot Details',
    'reviews': 'Reviews',
    'features': 'Features',
    'amenities': 'Amenities',
    'opening_hours': 'Opening Hours',
    'directions': 'Directions',
    'contact': 'Contact',
    'website': 'Website',
    'share_spot': 'Share',
    'save_spot': 'Save',
    'write_review': 'Write a Review',
    'see_all_reviews': 'See All Reviews',
    'rating_out_of_5': 'out of 5',
    'based_on': 'based on',
    'back_to_explore': 'Back to Explore',
    'visit_website': 'Visit Website',
    'get_directions': 'Get Directions',
    'similar_spots': 'Similar Spots',
    'nearby': 'Nearby',
    
    // Review section
    'review_title': 'Reviews',
    'write_a_review': 'Write a Review',
    'your_rating': 'Your Rating',
    'your_experience': 'Your Experience',
    'review_placeholder': 'Share details of your experience at this place...',
    'submit_review': 'Submit Review',
    'cancel_action': 'Cancel',
    'edit_action': 'Edit',
    'delete_action': 'Delete',
    'report': 'Report',
    'helpful': 'Helpful',
    'not_helpful': 'Not Helpful',
    'reviewed_on': 'Reviewed on',
    'no_reviews_yet': 'No reviews yet. Be the first to review!',
    
    // Authentication
    'sign_in': 'Sign In',
    'sign_up': 'Sign Up',
    'forgot_password': 'Forgot Password?',
    'reset_password': 'Reset Password',
    'email_address': 'Email Address',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'full_name': 'Full Name',
    'username': 'Username',
    'sign_in_with': 'Sign in with',
    'sign_up_with': 'Sign up with',
    'google': 'Google',
    'whatsapp': 'WhatsApp',
    'dont_have_account': 'Don\'t have an account?',
    'already_have_account': 'Already have an account?',
    'remember_me': 'Remember me',
    'create_account': 'Create Account',
    'agree_terms': 'I agree to the Terms and Conditions',
    'password_requirements': 'Password must be at least 8 characters long and include a number and a special character',
    
    // Form validation messages
    'username_required': 'Username is required',
    'username_min_length': 'Username must be at least 3 characters',
    'email_required': 'Email address is required',
    'email_invalid': 'Please enter a valid email address',
    'phone_required': 'Phone number is required',
    'phone_invalid': 'Please enter a valid phone number',
    'password_required': 'Password is required',
    'password_min_length': 'Password must be at least 6 characters',
    'passwords_not_match': 'Passwords do not match',
    
    // User dashboard
    'my_profile': 'My Profile',
    'my_reviews': 'My Reviews',
    'saved_spots': 'Saved Spots',
    'account_settings': 'Account Settings',
    'notification_settings': 'Notification Settings',
    'privacy_settings': 'Privacy Settings',
    'edit_profile': 'Edit Profile',
    'change_password': 'Change Password',
    'delete_account': 'Delete Account',
    'profile_picture': 'Profile Picture',
    'update_profile': 'Update',
    
    // Error messages
    'error_occurred': 'An error occurred',
    'try_again': 'Please try again',
    'page_not_found': 'Page Not Found',
    'go_home': 'Go to Home',
    'unauthorized': 'Unauthorized access',
    'please_login': 'Please login to continue',
    
    // Success messages
    'success': 'Success!',
    'account_created': 'Your account has been created successfully',
    'profile_updated': 'Your profile has been updated',
    'review_submitted': 'Your review has been submitted',
    'password_reset': 'Password reset email has been sent',
    
    // Homepage
    'welcome_message': 'Find Your Next Favorite Spot',
    'trending_now': 'Trending Now',
    'featured_categories': 'Featured Categories',
    'view_all': 'View All',
    'get_started': 'Get Started',
    'learn_more': 'Learn More',
    'join_community': 'Join Our Community',
    'download_app': 'Download Our App',
    
    // Categories
    'restaurants': 'Restaurants',
    'cafes': 'Cafes',
    'shopping': 'Shopping',
    'entertainment': 'Entertainment',
    'outdoors': 'Outdoors',
    'nightlife': 'Nightlife',
    'culture': 'Culture',
    'sports': 'Sports',
    'health': 'Health & Wellness',
    'education': 'Education',
    
    // Common actions
    'view_action': 'View',
    'edit': 'Edit',
    'delete': 'Delete',
    'save': 'Save',
    'cancel': 'Cancel',
    'submit': 'Submit',
    'confirm': 'Confirm',
    'continue': 'Continue',
    'back': 'Back',
    'next': 'Next',
    'close': 'Close',
    'or': 'Or',

    // Mock spots data translations
    'mock_spot1_name': 'Cloud Cafe',
    'mock_spot1_desc': 'A modern cafe serving the best types of coffee with a great view of the city',
    'mock_spot1_location': 'King Fahd Road, Al Olaya District',

    'mock_spot2_name': 'Arts Museum',
    'mock_spot2_desc': 'A museum with a diverse collection of local and international artworks',
    'mock_spot2_location': 'Diplomatic Quarter',

    'mock_spot3_name': 'Palm Garden',
    'mock_spot3_desc': 'A quiet garden filled with palm trees and green spaces for relaxation',
    'mock_spot3_location': 'King Abdullah Road',

    'mock_spot4_name': 'Blue Sea Restaurant',
    'mock_spot4_desc': 'A restaurant specializing in fresh seafood with distinctive flavors',
    'mock_spot4_location': 'Khobar Corniche',

    'mock_spot5_name': 'Oasis Mall',
    'mock_spot5_desc': 'A large shopping center featuring famous international and local brands',
    'mock_spot5_location': 'King Fahd Road',

    'mock_spot6_name': 'Sports Complex',
    'mock_spot6_desc': 'An integrated sports complex with various fields and exercise halls',
    'mock_spot6_location': 'Al Rawdah District',

    // Categories
    'category_cafe': 'Cafes',
    'category_restaurant': 'Restaurants',
    'category_park': 'Parks',
    'category_museum': 'Museums',
    'category_shopping': 'Shopping',
    'category_sports': 'Sports',
    'all_categories': 'All Categories',

    // Spot features
    'feature_wifi': 'Free WiFi',
    'feature_outdoor': 'Outdoor Seating',
    'feature_work_friendly': 'Work-friendly',
    'feature_snacks': 'Snacks Available',
    // Opening hours
    'opening_hours_label': 'Opening Hours',
    'opening_hour': 'Daily from 7:00 AM to 12:00 AM',

    // Reviews
    'review_user1': 'Ahmed Mohammed',
    'review_user2': 'Sarah Ali',
    'review_comment1': 'Great place to work and relax. Delicious coffee and excellent service!',
    'review_comment2': 'I loved the ambiance and decor, but the prices are a bit high.',
    'write_reviews': 'Write a Review',
    'spot_not_found': 'Sorry, spot not found',
    'spot_not_found_message': 'The spot you\'re looking for may not exist or has been removed.',
    'explore_back': 'Back to Explore Page',
    'spots_back': 'Back to Spots List',
    'map_view': 'View on Map',
    'website_visit': 'Visit Website',
    'phone_number': 'Phone Number',
    'website_url': 'Website',
    'back_to_spots': 'Back to Spots',

    // New animations and loading
    'hero_title': 'Find Your Next Favorite Spot',
    'hero_subtitle': 'Discover amazing places around you with reviews from people you trust',
    'start_exploring': 'Start Exploring',
    'scroll_down': 'Scroll Down',
    'loading_experience': 'Loading your experience...',
    'about_mission': 'Our mission is to help people discover the best local spots and share authentic experiences with others.',
    'why_hotspots': 'Why Choose HotSpots?',
    'feature1_title': 'Discover New Places',
    'feature1_desc': 'Find the best spots in your city that you might not know about yet',
    'feature2_title': 'User Reviews',
    'feature2_desc': 'Read authentic reviews from real people to make informed choices',
    'feature3_title': 'Mobile Access',
    'feature3_desc': 'Take HotSpots with you everywhere with our mobile app',
    'spots': 'Spots',
    'lets_go': 'Let\'s Go!',
    'join_us': 'Join Us Now!',
  },
  ar: {
    // Navigation
    'home': 'الرئيسية',
    'explore': 'استكشف',
    'login': 'تسجيل الدخول',
    'register': 'إنشاء حساب',
    'dashboard': 'لوحة التحكم',
    'logout': 'تسجيل الخروج',
    'popular_spots': 'الأماكن المميزة',
    'discover': 'اكتشف أفضل الأماكن في مدينتك واستمتع بتجارب لا تُنسى.',
    'about': 'من نحن',
    'search': 'بحث',
    'darkMode': 'الوضع الداكن',
    'lightMode': 'الوضع الفاتح',
    'language': 'English',
    
    // Footer
    'quick_links': 'روابط سريعة',
    'contact_us': 'اتصل بنا',
    'email': 'البريد الإلكتروني',
    'phone': 'الهاتف',
    'address': 'العنوان: الشارع الرئيسي، وسط المدينة',
    'rights_reserved': 'جميع الحقوق محفوظة',
    
    // About section
    'about_title': 'ما هو موقع HotSpots؟',
    'about_description': 'منصة تجمع أفضل الأماكن والمعالم السياحية في مدينتك، مع تقييمات وتجارب المستخدمين لمساعدتك في اختيار وجهتك القادمة.',
    'discover_places': 'اكتشف أماكن جديدة',
    'discover_places_desc': 'تعرف على أفضل الأماكن في مدينتك التي قد لا تعرفها',
    'share_experience': 'شارك تجربتك',
    'share_experience_desc': 'أضف تقييمك وصورك للأماكن التي زرتها ليستفيد الآخرون',
    'stay_updated': 'كن مطلعاً دائماً',
    'stay_updated_desc': 'احصل على تنبيهات حول الأماكن الجديدة والفعاليات القادمة',
    
    // Explore page
    'explore_title': 'استكشف الأماكن المميزة',
    'loading': 'جاري التحميل...',
    'no_results': 'لا توجد نتائج',
    'view_details': 'عرض التفاصيل',
    'filter_by': 'تصفية حسب',
    'category': 'الفئة',
    'rating': 'التقييم',
    'location': 'الموقع',
    'price_range': 'نطاق السعر',
    'apply_filters': 'تطبيق الفلاتر',
    'reset_filters': 'إعادة تعيين',
    'sort_by': 'ترتيب حسب',
    'newest': 'الأحدث',
    'highest_rated': 'الأعلى تقييماً',
    'most_popular': 'الأكثر شعبية',
    'search_placeholder': 'ابحث عن أماكن...',
    'search_spot': 'البحث عن الأماكن',
    'reset': 'إعادة تعيين',
    
    // Spot details
    'spot_details': 'تفاصيل المكان',
    'reviews': 'التقييمات',
    'features': 'المميزات',
    'amenities': 'المرافق',
    'opening_hours': 'ساعات العمل',
    'directions': 'الاتجاهات',
    'contact': 'التواصل',
    'website': 'الموقع الإلكتروني',
    'share_spot': 'مشاركة',
    'save_spot': 'حفظ',
    'write_review': 'كتابة تقييم',
    'see_all_reviews': 'مشاهدة جميع التقييمات',
    'rating_out_of_5': 'من 5',
    'based_on': 'بناءً على',
    'back_to_explore': 'العودة إلى الاستكشاف',
    'visit_website': 'زيارة الموقع',
    'get_directions': 'الحصول على الاتجاهات',
    'similar_spots': 'أماكن مشابهة',
    'nearby': 'قريب',
    
    // Review section
    'review_title': 'التقييمات',
    'write_a_review': 'اكتب تقييمًا',
    'your_rating': 'تقييمك',
    'your_experience': 'تجربتك',
    'review_placeholder': 'شارك تفاصيل تجربتك في هذا المكان...',
    'submit_review': 'إرسال التقييم',
    'cancel_action': 'إلغاء',
    'edit_action': 'تعديل',
    'delete_action': 'حذف',
    'report': 'إبلاغ',
    'helpful': 'مفيد',
    'not_helpful': 'غير مفيد',
    'reviewed_on': 'تم التقييم في',
    'no_reviews_yet': 'لا توجد تقييمات بعد. كن أول من يقيم!',
    
    // Authentication
    'sign_in': 'تسجيل الدخول',
    'sign_up': 'إنشاء حساب',
    'forgot_password': 'نسيت كلمة المرور؟',
    'reset_password': 'إعادة تعيين كلمة المرور',
    'email_address': 'البريد الإلكتروني',
    'password': 'كلمة المرور',
    'confirm_password': 'تأكيد كلمة المرور',
    'full_name': 'الاسم الكامل',
    'username': 'اسم المستخدم',
    'sign_in_with': 'تسجيل الدخول باستخدام',
    'sign_up_with': 'إنشاء حساب باستخدام',
    'google': 'جوجل',
    'whatsapp': 'واتساب',
    'dont_have_account': 'ليس لديك حساب؟',
    'already_have_account': 'لديك حساب بالفعل؟',
    'remember_me': 'تذكرني',
    'create_account': 'إنشاء حساب',
    'agree_terms': 'أوافق على الشروط والأحكام',
    'password_requirements': 'يجب أن تكون كلمة المرور 8 أحرف على الأقل وتتضمن رقمًا وحرفًا خاصًا',
    
    // Form validation messages
    'username_required': 'اسم المستخدم مطلوب',
    'username_min_length': 'يجب أن يحتوي اسم المستخدم على 3 أحرف على الأقل',
    'email_required': 'البريد الإلكتروني مطلوب',
    'email_invalid': 'يرجى إدخال بريد إلكتروني صالح',
    'phone_required': 'رقم الهاتف مطلوب',
    'phone_invalid': 'يرجى إدخال رقم هاتف صالح',
    'password_required': 'كلمة المرور مطلوبة',
    'password_min_length': 'يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل',
    'passwords_not_match': 'كلمات المرور غير متطابقة',
    
    // User dashboard
    'my_profile': 'ملفي الشخصي',
    'my_reviews': 'تقييماتي',
    'saved_spots': 'الأماكن المحفوظة',
    'account_settings': 'إعدادات الحساب',
    'notification_settings': 'إعدادات الإشعارات',
    'privacy_settings': 'إعدادات الخصوصية',
    'edit_profile': 'تعديل الملف الشخصي',
    'change_password': 'تغيير كلمة المرور',
    'delete_account': 'حذف الحساب',
    'profile_picture': 'الصورة الشخصية',
    'update_profile': 'تحديث',
    
    // Error messages
    'error_occurred': 'حدث خطأ',
    'try_again': 'يرجى المحاولة مرة أخرى',
    'page_not_found': 'الصفحة غير موجودة',
    'go_home': 'الذهاب إلى الرئيسية',
    'unauthorized': 'وصول غير مصرح به',
    'please_login': 'يرجى تسجيل الدخول للمتابعة',
    
    // Success messages
    'success': 'تم بنجاح!',
    'account_created': 'تم إنشاء حسابك بنجاح',
    'profile_updated': 'تم تحديث ملفك الشخصي',
    'review_submitted': 'تم إرسال تقييمك',
    'password_reset': 'تم إرسال رابط إعادة تعيين كلمة المرور',
    
    // Homepage
    'welcome_message': 'ابحث عن مكانك المفضل القادم',
    'trending_now': 'الشائع الآن',
    'featured_categories': 'فئات مميزة',
    'view_all': 'عرض الكل',
    'get_started': 'ابدأ الآن',
    'learn_more': 'اعرف المزيد',
    'join_community': 'انضم إلى مجتمعنا',
    'download_app': 'حمّل تطبيقنا',
    
    // Categories
    'restaurants': 'مطاعم',
    'cafes': 'مقاهي',
    'shopping': 'تسوق',
    'entertainment': 'ترفيه',
    'outdoors': 'أماكن خارجية',
    'nightlife': 'حياة ليلية',
    'culture': 'ثقافة',
    'sports': 'رياضة',
    'health': 'صحة ولياقة',
    'education': 'تعليم',
    
    // Common actions
    'view_action': 'عرض',
    'edit': 'تعديل',
    'delete': 'حذف',
    'save': 'حفظ',
    'cancel': 'إلغاء',
    'submit': 'إرسال',
    'confirm': 'تأكيد',
    'continue': 'متابعة',
    'back': 'رجوع',
    'next': 'التالي',
    'close': 'إغلاق',
    'or': 'أو',

    // Mock spots data translations
    'mock_spot1_name': 'مقهى السحاب',
    'mock_spot1_desc': 'مقهى عصري يقدم أفضل أنواع القهوة مع إطلالة رائعة على المدينة',
    'mock_spot1_location': 'شارع الملك فهد، حي العليا',

    'mock_spot2_name': 'متحف الفنون',
    'mock_spot2_desc': 'متحف يضم مجموعة متنوعة من الأعمال الفنية المحلية والعالمية',
    'mock_spot2_location': 'حي السفارات',

    'mock_spot3_name': 'حديقة النخيل',
    'mock_spot3_desc': 'حديقة هادئة مليئة بأشجار النخيل والمساحات الخضراء للاسترخاء',
    'mock_spot3_location': 'طريق الملك عبدالله',

    'mock_spot4_name': 'مطعم البحر الأزرق',
    'mock_spot4_desc': 'مطعم متخصص في المأكولات البحرية الطازجة بنكهات مميزة',
    'mock_spot4_location': 'كورنيش الخبر',

    'mock_spot5_name': 'مول الواحة',
    'mock_spot5_desc': 'مركز تسوق كبير يضم أشهر الماركات العالمية والمحلية',
    'mock_spot5_location': 'طريق الملك فهد',

    'mock_spot6_name': 'ملعب الرياضة',
    'mock_spot6_desc': 'مجمع رياضي متكامل يضم ملاعب متنوعة وصالات للتمارين',
    'mock_spot6_location': 'حي الروضة',

    // Categories
    'category_cafe': 'مقاهي',
    'category_restaurant': 'مطاعم',
    'category_park': 'حدائق',
    'category_museum': 'متاحف',
    'category_shopping': 'تسوق',
    'category_sports': 'رياضة',
    'all_categories': 'جميع الفئات',

    // Spot features
    'feature_wifi': 'واي فاي مجاني',
    'feature_outdoor': 'مقاعد خارجية',
    'feature_work_friendly': 'مناسب للعمل',
    'feature_snacks': 'وجبات خفيفة',

    // Opening hours
    'opening_hour': 'يومياً من 7:00 صباحاً حتى 12:00 منتصف الليل',
    'opening_hours_label': 'ساعات العمل',

    // Reviews
    'review_user1': 'أحمد محمد',
    'review_user2': 'سارة علي',
    'review_comment1': 'مكان رائع للعمل والاسترخاء. القهوة لذيذة والخدمة ممتازة!',
    'review_comment2': 'أحببت الأجواء والديكور، لكن الأسعار مرتفعة قليلاً.',
    'write_reviews': 'كتابة تقييم',
    'spot_not_found': 'عذراً، لم يتم العثور على المكان',
    'spot_not_found_desc': 'قد يكون المكان الذي تبحث عنه غير موجود أو تم إزالته.',
    'back_to_spots': 'العودة إلى قائمة الأماكن',
    'view_on_map': 'عرض على الخريطة',
    'phone_number': 'رقم الهاتف',
    'website_url': 'الموقع الإلكتروني',

    // New animations and loading
    'hero_title': 'ابحث عن مكانك المفضل القادم',
    'hero_subtitle': 'اكتشف أماكن رائعة من حولك مع مراجعات من أشخاص تثق بهم',
    'start_exploring': 'ابدأ الاستكشاف',
    'scroll_down': 'اسحب للأسفل',
    'loading_experience': 'جاري تحميل تجربتك...',
    'about_mission': 'مهمتنا هي مساعدة الناس على اكتشاف أفضل الأماكن المحلية ومشاركة التجارب الحقيقية مع الآخرين.',
    'why_hotspots': 'لماذا تختار هوت سبوتس؟',
    'feature1_title': 'اكتشف أماكن جديدة',
    'feature1_desc': 'ابحث عن أفضل الأماكن في مدينتك والتي قد لا تعرف عنها بعد',
    'feature2_title': 'مراجعات المستخدمين',
    'feature2_desc': 'اقرأ مراجعات حقيقية من أشخاص حقيقيين لاتخاذ قرارات مستنيرة',
    'feature3_title': 'الوصول عبر الجوال',
    'feature3_desc': 'خذ هوت سبوتس معك في كل مكان من خلال تطبيق الهاتف المحمول',
    'spots': 'أماكن',
    'lets_go': 'هيا بنا!',
    'join_us': 'انضم إلينا الآن!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const fontFamily = language === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, fontFamily }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 