import { NavItem, Activity, DonationTier } from './types';

// =================================================================
// Cloudinary Image Configuration & Generation
// =================================================================
const CLOUD_NAME = 'dv63ov9v0';
const FOLDER = 'site';
const IMAGE_COUNT = 100;

// Generate an array of 100 URLs using the specific format requested.
// We use a new static version (v1725000000) to ensure we get the latest assets from the 'site' folder.
// Structure: https://res.cloudinary.com/<CLOUD_NAME>/image/upload/<TRANSFORMS>/<VERSION>/<FOLDER>/<NUMBER>.jpg
const CLOUDINARY_IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => 
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/v1725000000/${FOLDER}/${i + 1}.jpg`
);

// Helper to get a specific image safely
const getImage = (index: number) => CLOUDINARY_IMAGES[index % CLOUDINARY_IMAGES.length];

// Helper to get a range of images
const getSlice = (start: number, count: number) => 
  CLOUDINARY_IMAGES.slice(start, start + count);

// Distribution Plan:
// 0: Hero Background (Header area) -> site/1.jpg
// 1: About Section -> site/2.jpg
// 2: Charity Section -> site/3.jpg
// 3-22: Activities (Products)
// 23-99: Main Gallery

// =================================================================
// Site Images
// =================================================================

// Luxury Golden Crown Logo (SVG)
const CROWN_LOGO_SVG = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMzAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ29sZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkVFNjg1O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0Q0QUYzNztzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2ZZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0I1OTAyMDtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJZHJvcFNoYWRvdyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIvPgogICAgICA8ZmVPZmZzZXQgZHg9IjIiIGR5PSIyIiByZXN1bHQ9Im9mZnNldGJsdXIiLz4KICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgICAgPGZlRnVuY0EgdHlwZT0ibGluZWFyIiBzbG9wZT0iMC4zIi8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlLz4KICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDwhLS0gQ3Jvd24gLS0+CiAgPHBhdGggZmlsbD0idXJsKCNnb2xkR3JhZCkiIGZpbHRlcj0idXJsKCNkcm9wU2hhZG93KSIgZD0iTTI1MCA1MCBDMjMwIDgwIDIwMCAxMjAgMTgwIDEyMCBDMTYwIDEyMCAxMzAgNzAgMTMwIDcwIEMxMzAgNzAgMTEwIDE1MCA4MCAxNTAgTDUwIDE1MCBMNTAgMjIwIEw0NTAgMjIwIEw0NTAgMTUwIEw0MjAgMTUwIEw0MjAgMTUwIEMzOTAgMTUwIDM3MCA3MCAzNzAgNzAgQzM3MCA3MCAzNDAgMTIwIDMyMCAxMjAgQzMwMCAxMjAgMjcwIDgwIDI1MCA1MCBaIE01MCAyMzAgTDQ1MCAyMzAgTDQ1MCAyNTAgTDUwIDI1MCBaIiAvPgogIDwhLS0gVGV4dCAtLT4KICA8dGV4dCB4PSIyNTAiIHk9IjI5MCIgZm9udC1mYW1pbHk9IidGcmFuayBSdWhsIExpYnJlJywgc2VyaWYiIGZvbnQtc2l6ZT0iNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9InVybCgjZ29sZEdyYWQpIiBmb250LXdlaWdodD0iYm9sZCIgbGV0dGVyLXNwYWNpbmc9IjIiPteX15zXkSDXl9eZ15jXmdeVPC90ZXh0Pgo8L3N2Zz4=`;

export const SITE_IMAGES = {
  LOGO: CROWN_LOGO_SVG,
  HERO_BACKGROUND: getImage(0), // site/1.jpg
  ABOUT_IMAGE: getImage(1),     // site/2.jpg
  CHARITY_IMAGE: getImage(2),   // site/3.jpg
  // Taking a large slice for the main gallery (30 images)
  GALLERY: getSlice(23, 30)     
};

// =================================================================
// Links & Data
// =================================================================
export const EXTERNAL_LINKS = {
  DONATE: 'https://www.matara.pro/nedarimplus/online/?mosad=0', 
  CONTACT_EMAIL: 'office@halavhitim.co.il',
  WHATSAPP: 'https://wa.me/972500000000',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'אודות', href: '#about' },
  { label: 'פעילות המוסדות', href: '#activities' },
  { label: 'חסד ונתינה', href: '#charity' },
  { label: 'גלריה', href: '#gallery' },
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'kollel',
    title: 'כולל אברכים',
    description: 'קול התורה מהדהד מסביב לשעון. אברכים מצוינים העמלים בתורה יומם ולילה.',
    longDescription: 'הלב הפועם של המוסדות. עשרות אברכים תלמידי חכמים, העמלים בתורה מבוקר ועד ליל, בוקעים את שערי שמיים בתפילה ובלימוד. הכולל מהווה מגדלור רוחני המקרין על כל העיר טירת כרמל, ומגן על תושביה בזכות התורה. האברכים נבחנים מדי חודש ומגלים בקיאות מרשימה בכל מכמני ההלכה והגמרא.',
    image: getImage(3), // site/4.jpg
    gallery: getSlice(4, 3) 
  },
  {
    id: 'yeshiva',
    title: 'ישיבה גדולה',
    description: 'בית היוצר לנשמת האומה. בחורים צעירים המתעלים בתורה ויראת שמים.',
    longDescription: 'הישיבה הגדולה היא כור ההיתוך של דור העתיד. כאן נבנים מנהיגי המחר, באווירה של שטייגען (לימוד מעמיק) ושמחת חיים. הצוות החינוכי המסור מלווה כל בחור ובחור באופן אישי, דואג לרווחתו הגשמית והרוחנית, ומעניק כלים לחיים של משמעות ועשייה.',
    image: getImage(7), // site/8.jpg
    gallery: getSlice(8, 3)
  },
  {
    id: 'women',
    title: 'מדרשה לנשים',
    description: 'שיעורי תורה והעצמה לנשות העיר. חיזוק הבית היהודי ולימוד משותף.',
    longDescription: 'מדרשת הנשים שלנו היא בית חם לכל אישה ובת. שיעורים מרתקים בהלכה, השקפה וחינוך ילדים, ערבי הפרשת חלה מרגשים, ומפגשי גיבוש קהילתיים. המקום מעניק כוחות רוחניים לאמהות ונשים, המהוות את עמוד התווך של הבית היהודי.',
    image: getImage(11), // site/12.jpg
    gallery: getSlice(12, 3)
  },
  {
    id: 'kindergarten',
    title: 'גני ילדים',
    description: 'חינוך טהור מגיל ינקות. חום, אהבה וערכים יהודיים שורשיים.',
    longDescription: 'בגני הילדים של "חלב חיטים", אנו מגדלים את פרחי הכהונה באהבה אינסופית. גננות מסורות ומקצועיות, סביבה עשירה ומטפחת, ודגש חזק על מידות טובות ודרך ארץ. הילדים סופגים את טעמה המתוק של המסורת כבר מגיל הרך, באווירה שמחה ובטוחה.',
    image: getImage(15), // site/16.jpg
    gallery: getSlice(16, 3)
  },
  {
    id: 'classes',
    title: 'שיעורים לבעלי בתים',
    description: 'שיעורים יומיים בגמרא והלכה. מחברים את חיי המעשה לנצח.',
    longDescription: 'בית המדרש פתוח לכולם. מדי ערב מתקיימים שיעורי תורה לבעלי בתים, אנשי עמל המקדישים עיתים לתורה. השיעורים מועברים בשפה ברורה ונעימה, ומחברים את סוגיות הגמרא לחיי המעשה היומיומיים. זהו המקום להתמלא בתוכן ומשמעות בסיומו של יום עבודה.',
    image: getImage(19), // site/20.jpg
    gallery: getSlice(20, 3)
  }
];

export const DONATION_TIERS: DonationTier[] = [
  { amount: 30, label: 'ארוחה חמה', description: 'תרומת ארוחה חמה אחת לנזקק' },
  { amount: 180, label: 'סל מזון', description: 'סל מזון עשיר למשפחה לשבת' },
  { amount: 1000, label: 'פרנס החודש', description: 'שותפות מלאה בהחזקת המוסדות' },
];
