import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Baby, Library, X, ArrowLeft, Heart, School, Flower2 } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

// רשימת הפעילויות המלאה - מעודכנת עם התמונות החדשות שביקשת
const UPDATED_ACTIVITIES = [
  {
    id: 'kollel',
    title: 'כולל אברכים',
    image: '/images/gallery/9.jpg', // תמונה 9 כפי שביקשת
    description: 'לימוד מעמיק ותמיכה באברכים מצטיינים המקדישים את חייהם לתורה.',
    longDescription: 'הכולל מהווה את הלב הפועם של המוסדות, בו לומדים עשרות אברכים השוקדים על תלמודם ביום ובלילה באווירת התעלות מיוחדת, תוך צמיחה תורנית מתמדת.',
    gallery: ['/images/gallery/9.jpg', '/images/gallery/2.jpg']
  },
  {
    id: 'yeshiva',
    title: 'ישיבה גדולה',
    image: '/images/gallery/11.jpg', // תמונה 11 כפי שביקשת
    description: 'היכל של תורה ועבודה שבו מעצבים את דור העתיד של עולם הרבנות.',
    longDescription: 'בישיבה הגדולה שלנו, הבחורים זוכים למעטפת רוחנית ולימודית ברמה הגבוהה ביותר, עם דגש על פיתוח האישיות, בניין התורה ויראת שמיים.',
    gallery: ['/images/gallery/11.jpg', '/images/gallery/16.jpg']
  },
  {
    id: 'women',
    title: 'מדרשה לנשים',
    image: '/images/gallery/24.jpg', // תמונה 24 כפי שביקשת
    description: 'בית חם לאישה הדתית - שיעורים, סדנאות והתעלות רוחנית.',
    longDescription: 'המדרשה מציעה מגוון עשיר של שיעורי אמונה, זוגיות וחינוך ילדים, המעניקים כוח, השראה וכלים מעשיים לבית היהודי המודרני.',
    gallery: ['/images/gallery/24.jpg', '/images/gallery/8.jpg']
  },
  {
    id: 'synagogue',
    title: 'בית כנסת',
    image: '/images/gallery/15.jpg',
    description: 'מרכז תפילה שוקק חיים המהווה בית לכל תושבי האזור.',
    longDescription: 'בית הכנסת שלנו פתוח לרווחה לכל יהודי. מקום של אחדות, תפילה בציבור, ושיעורי תורה יומיומיים באווירה חמה ומזמינה לכל הגילאים.',
    gallery: ['/images/gallery/15.jpg', '/images/gallery/14.jpg']
  },
  {
    id: 'daycare',
    title: 'מעונות יום',
    image: '/images/gallery/3.jpg', // תמונה 3 כפי שביקשת
    description: 'חינוך חם, אוהב ומקצועי לדור העתיד בסביבה בטוחה וערכית.',
    longDescription: 'מעונות היום שלנו מספקים לילדיכם את המעטפת הטובה ביותר - צוות מסור ומנוסה, ארוחות מזינות ותכנים חינוכיים המותאמים לגיל הרך.',
    gallery: ['/images/gallery/3.jpg', '/images/gallery/10.jpg']
  },
  {
    id: 'householders',
    title: 'שיעורים לבעלי בתים',
    image: '/images/gallery/5.jpg',
    description: 'קביעת עתים לתורה באווירה נעימה המותאמת לאנשים עובדים.',
    longDescription: 'מדי ערב מתקבצים עשרות משתתפים לשיעורי גמרא, הלכה ומחשבה. המפגש מאפשר לכל יהודי עובד לשאוב כוחות רוחניים ולהתחבר למסורת.',
    gallery: ['/images/gallery/5.jpg', '/images/gallery/6.jpg']
  }
];

const Activities: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailSectionRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setTimeout(() => {
      detailSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const selectedActivity = UPDATED_ACTIVITIES.find(a => a.id === selectedId);

  const getIcon = (id: string) => {
    switch(id) {
      case 'kollel': return <Library className="w-5 h-5 md:w-6 md:h-6" />;
      case 'yeshiva': return <School className="w-5 h-5 md:w-6 md:h-6" />;
      case 'women': return <Flower2 className="w-5 h-5 md:w-6 md:h-6" />;
      case 'synagogue': return <BookOpen className="w-5 h-5 md:w-6 md:h-6" />;
      case 'daycare': return <Baby className="w-5 h-5 md:w-6 md:h-6" />;
      default: return <Users className="w-5 h-5 md:w-6 md:h-6" />;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src.endsWith('.jpg')) {
      target.src = target.src.replace('.jpg', '.JPG');
    } else if (target.src.endsWith('.JPG')) {
      target.src = target.src.replace('.JPG', '.jpg');
    }
  };

  return (
    <section id="activities" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-4 md:px-12 text-right" dir="rtl">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 md:mb-4"
          >
             <span className="text-gold-700 text-sm font-bold tracking-widest-luxury uppercase border-b-2 border-gold-400 pb-1">העשייה שלנו</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-serif font-bold text-royal-900"
          >
            אימפריית החינוך והתורה
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-20 text-right">
          {UPDATED_ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => handleSelect(activity.id)}
              className={`group relative bg-white h-[280px] md:h-[450px] cursor-pointer overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm ${
                selectedId === activity.id ? 'ring-2 ring-gold-400' : ''
              }`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-royal-900/50 md:bg-royal-900/30 md:group-hover:bg-royal-900/70 transition-colors duration-500"></div>
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-gold-400 mb-2 md:mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 text-right">
                    {getIcon(activity.id)}
                  </div>
                  <h3 className="text-2xl md:text-2xl font-serif font-bold mb-2 group-hover:text-gold-100 transition-colors shadow-sm text-right">
                    {activity.title}
                  </h3>
                  <p className="hidden md:block text-gray-100 text-base leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 transition-all duration-500 overflow-hidden font-medium text-right">
                    {activity.description}
                  </p>
                  <div className="mt-2 md:mt-6 flex items-center justify-end text-gold-300 text-xs md:text-sm font-bold tracking-widest uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-200">
                    לפרטים נוספים <ArrowLeft size={16} className="mr-2 rotate-180" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 md:w-0 md:h-1.5 bg-gold-400 transition-all duration-700 md:group-hover:w-full z-20"></div>
            </motion.div>
          ))}
        </div>

        <div ref={detailSectionRef}>
          <AnimatePresence mode="wait">
            {selectedActivity && (
              <motion.div
                key={selectedActivity.id}
                initial={{ opacity: 0, height: 0, y: 40 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 40 }}
                transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="bg-white shadow-luxury relative rounded-sm overflow-hidden">
                   <button 
                     onClick={() => setSelectedId(null)}
                     className="absolute top-4 right-4 md:top-6 md:left-6 md:right-auto p-2 text-gray-400 hover:text-royal-900 transition-colors z-20 bg-white/80 rounded-full md:bg-transparent"
                   >
                     <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
                   </button>

                   <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px]">
                      <div className="p-8 md:p-10 lg:p-20 lg:w-1/2 flex flex-col justify-center bg-white order-2 lg:order-1 text-right">
                        <div className="flex items-center gap-3 text-gold-600 mb-4 md:mb-6 justify-start flex-row-reverse">
                          {getIcon(selectedActivity.id)}
                          <span className="font-bold tracking-widest uppercase text-sm">הרחבה על הפעילות</span>
                        </div>
                        <h3 className="text-2xl md:text-5xl font-serif font-bold text-royal-900 mb-4 md:mb-8">
                          {selectedActivity.title}
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-loose font-normal mb-8 md:mb-10">
                          {selectedActivity.longDescription}
                        </p>
                        
                        <a 
                          href="https://causematch.com/helev-hitim"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center items-center gap-4 bg-royal-900 text-white px-8 py-3 md:px-10 md:py-4 hover:bg-gold-600 transition-all duration-300 shadow-xl group self-start w-full md:w-auto rounded-sm"
                        >
                          <span className="tracking-widest font-bold text-base md:text-lg">היו שותפים לעשייה</span>
                          <Heart size={20} className="text-gold-400 group-hover:text-white transition-colors" />
                        </a>
                      </div>

                      <div className="h-64 md:h-auto lg:w-1/2 bg-gray-100 relative order-1 lg:order-2">
                        <img 
                            src={selectedActivity.image} 
                            alt="Main view" 
                            onError={handleImageError}
                            className="w-full h-full object-cover absolute inset-0" 
                        />
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Activities;