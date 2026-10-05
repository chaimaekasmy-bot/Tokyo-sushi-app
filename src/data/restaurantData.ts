import { CategoryInfo, MenuItem } from '../types';

import heroSushiImg from '../assets/images/hero_sushi_tokyo_1791209038071.jpg';
import crunchyRollsImg from '../assets/images/crunchy_sushi_rolls_1791209049292.jpg';
import mitsukiImg from '../assets/images/mitsuki_specialty_roll_1791209060264.jpg';
import ramenImg from '../assets/images/japanese_ramen_bowl_1791209070952.jpg';

export const RESTAURANT_INFO = {
  name: 'Tokyo Sushi',
  kanji: '東京鮨',
  slogan: {
    fr: 'A Taste of Japan in Oujda',
    ar: 'مذاق اليابان في وجدة',
  },
  address: {
    fr: 'Derriere CIH Bank, Rue Annakhil, Bilal, Oujda 60000, Maroc',
    ar: 'خلف بنك CIH، شارع النخيل، حي بلال، وجدة 60000، المغرب',
  },
  phonePrimary: '+212 5365-08123',
  phoneSecondary: '0550 13 07 99',
  phonePrimaryRaw: '+212536508123',
  phoneSecondaryRaw: '+212550130799',
  whatsappUrl: 'https://wa.me/212550130799',
  mapsUrl: 'https://maps.app.goo.gl/SQH4bEvoE3ERhiUq5?g_st=aw',
  rating: 4.7,
  reviewsCount: 19,
  openingHours: {
    standardLunch: '12:00 - 15:00',
    standardDinner: '18:30 - 00:00',
    fridayNote: {
      fr: 'Vendredi : ouverture à 16:00',
      ar: 'الجمعة : الافتتاح ابتداءً من 16:00',
    },
    display: {
      fr: '12:00 - 15:00 & 18:30 - 00:00 (Ven: dès 16:00)',
      ar: '12:00 - 15:00 و 18:30 - 00:00 (الجمعة: من 16:00)',
    },
  },
  deliveryFee: 0, // Free delivery in Oujda perimeter
  deliveryTimeEstimate: '30 - 45 min',
  images: {
    hero: heroSushiImg,
    crunchy: crunchyRollsImg,
    mitsuki: mitsukiImg,
    ramen: ramenImg,
  },
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: {
      fr: 'Tout le Menu',
      ar: 'كامل القائمة',
    },
  },
  {
    id: 'crunchy-rolls',
    name: {
      fr: 'Crunchy Rolls',
      ar: 'كرانشي رولز',
    },
    subtitle: {
      fr: 'Croustillants, garnis de tobiko et crèmes savoureuses',
      ar: 'مقرمشة ومغطاة بالتوبيكو والكريمة الشهية',
    },
  },
  {
    id: 'specialite-mitsuki',
    name: {
      fr: 'Spécialité Mitsuki',
      ar: 'مختارات ميتسوكي الخاصة',
    },
    subtitle: {
      fr: 'Créations signatures du chef au saumon et fromage fondant',
      ar: 'ابتكارات الشيف المميزة بالسلمون والأجبان اللذيذة',
    },
  },
  {
    id: 'ramen-soups',
    name: {
      fr: 'Ramen & Soupes',
      ar: 'رامن وحساء',
    },
    subtitle: {
      fr: 'Bouillons traditionnels mijotés avec nouilles fraîches',
      ar: 'مرق تقليدي ساخن مع النودلز الطازجة',
    },
  },
  {
    id: 'desserts',
    name: {
      fr: 'Desserts',
      ar: 'حلويات',
    },
    subtitle: {
      fr: 'Douceurs japonaises artisanales',
      ar: 'حلويات يابانية تقليدية منعشة',
    },
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Category: Crunchy Rolls
  {
    id: 'pacific-roll',
    categoryId: 'crunchy-rolls',
    name: {
      fr: 'Pacific Roll',
      ar: 'باسيفيك رول',
    },
    description: {
      fr: 'Surimi, Avocat, Tobiko, Crème de Saumon',
      ar: 'سيريمي، أفوكادو، توبيكو، كريمة السلمون',
    },
    price: 49,
    image: crunchyRollsImg,
    pieces: '8 pcs',
    badge: {
      fr: 'Populaire',
      ar: 'الأكثر طلباً',
    },
  },
  {
    id: 'spicy-roll',
    categoryId: 'crunchy-rolls',
    name: {
      fr: 'Spicy Roll',
      ar: 'سبايسي رول',
    },
    description: {
      fr: 'Crevettes, Avocat, Cheese, Saumon épicée',
      ar: 'جمبري، أفوكادو، جبنة، سلمون حار',
    },
    price: 49,
    image: crunchyRollsImg,
    pieces: '8 pcs',
    badge: {
      fr: 'Épicé',
      ar: 'حار',
    },
  },
  {
    id: 'cheese-roll',
    categoryId: 'crunchy-rolls',
    name: {
      fr: 'Cheese Roll',
      ar: 'تشيز رول',
    },
    description: {
      fr: "Crevettes Panée, Saumon, Crème d'anguille, Tobiko",
      ar: 'جمبري مقرمش، سلمون، كريمة الأنقليس، توبيكو',
    },
    price: 49,
    image: crunchyRollsImg,
    pieces: '8 pcs',
  },
  {
    id: 'kamikaze',
    categoryId: 'crunchy-rolls',
    name: {
      fr: 'Kamikaze',
      ar: 'كاميكازي',
    },
    description: {
      fr: 'Crevettes Panées, Surimi, Crème de Saumon, Tobiko',
      ar: 'جمبري مقرمش، سيريمي، كريمة السلمون، توبيكو',
    },
    price: 55,
    image: crunchyRollsImg,
    pieces: '8 pcs',
    badge: {
      fr: 'Coup de cœur',
      ar: 'المفضل',
    },
  },

  // Category: Spécialité Mitsuki
  {
    id: 'shake-creation',
    categoryId: 'specialite-mitsuki',
    name: {
      fr: 'Shake Création',
      ar: 'شاكي كرياسيـون',
    },
    description: {
      fr: 'Crevettes, Saumon, Cheese, Riz, Avocat',
      ar: 'جمبري، سلمون، جبن، أرز، أفوكادو',
    },
    price: 59,
    image: mitsukiImg,
    pieces: '8 pcs',
    badge: {
      fr: 'Signature',
      ar: 'مميز',
    },
  },
  {
    id: 'la-sirene',
    categoryId: 'specialite-mitsuki',
    name: {
      fr: 'La Sirène',
      ar: 'لا سيرين',
    },
    description: {
      fr: 'Crevettes Panées, Saumon, Cheese Edam',
      ar: 'جمبري مقرمش، سلمون، جبن إيدام',
    },
    price: 65,
    image: mitsukiImg,
    pieces: '8 pcs',
  },
  {
    id: 'saumon-fondu',
    categoryId: 'specialite-mitsuki',
    name: {
      fr: 'Saumon Fondu',
      ar: 'سالمون فوندو',
    },
    description: {
      fr: 'Saumon Cuit, Cheese',
      ar: 'سلمون مطهو، جبن ذائب',
    },
    price: 59,
    image: mitsukiImg,
    pieces: '8 pcs',
  },
  {
    id: 'ebi-creation',
    categoryId: 'specialite-mitsuki',
    name: {
      fr: 'Ebi Création',
      ar: 'إيبي كرياسيـون',
    },
    description: {
      fr: 'Crevettes, Riz, Avocat, fromage Edam',
      ar: 'جمبري، أرز، أفوكادو، جبن إيدام',
    },
    price: 65,
    image: mitsukiImg,
    pieces: '8 pcs',
  },
  {
    id: 'miami',
    categoryId: 'specialite-mitsuki',
    name: {
      fr: 'Miami',
      ar: 'ميامي',
    },
    description: {
      fr: 'Crevettes, Surimi, Cheese Edam, Avocat, Tobiko',
      ar: 'جمبري، سيريمي، جبن إيدام، أفوكادو، توبيكو',
    },
    price: 49,
    image: mitsukiImg,
    pieces: '8 pcs',
  },

  // Category: Ramen & Soups
  {
    id: 'ramen-poulet',
    categoryId: 'ramen-soups',
    name: {
      fr: 'Ramen Poulet',
      ar: 'رامن بالدجاج',
    },
    description: {
      fr: 'Nouilles artisanales, filet de poulet tendre, œuf mariné, oignons verts et bouillon riche mijoté',
      ar: 'نودلز طازجة، شرائح دجاج طرية، بيض متبل، بصل أخضر ومرق ياباني غني',
    },
    price: 70,
    image: ramenImg,
    pieces: '1 Bol',
    badge: {
      fr: 'Chaud & Réconfortant',
      ar: 'ساخن ولذيذ',
    },
  },
  {
    id: 'ramen-boeuf',
    categoryId: 'ramen-soups',
    name: {
      fr: 'Ramen Boeuf',
      ar: 'رامن بلحم البقر',
    },
    description: {
      fr: 'Émincé de bœuf savoureux, nouilles japonaises, légumes croquants, œuf ajitsuke et bouillon profond',
      ar: 'شرائح لحم بقر متبلة، نودلز، خضار مقرمشة، بيض متبل ومرق شهي',
    },
    price: 75,
    image: ramenImg,
    pieces: '1 Bol',
  },
  {
    id: 'miso-soup',
    categoryId: 'ramen-soups',
    name: {
      fr: 'Miso Soup',
      ar: 'شوربة ميسو',
    },
    description: {
      fr: 'Bouillon dashi traditionnel à la pâte de miso, tofu soyeux, algues wakame et ciboule fraîche',
      ar: 'حساء الداشي التقليدي مع معجون الميسو، التوفو، أعشاب واكامي والبصل الأخضر',
    },
    price: 35,
    image: ramenImg,
    pieces: '1 Bol',
  },

  // Category: Desserts
  {
    id: 'mochi-ice-cream',
    categoryId: 'desserts',
    name: {
      fr: 'Mochi Ice Cream',
      ar: 'آيس كريم موتشي',
    },
    description: {
      fr: 'Douceur japonaise à base de pâte de riz gluant garnie de crème glacée artisanale fondante',
      ar: 'حلوى أرز يابانية تقليدية محشوة بآيس كريم كريمي منعش',
    },
    price: 35,
    image: heroSushiImg,
    pieces: '2 pcs',
    badge: {
      fr: 'Traditionnel',
      ar: 'تقليدي',
    },
  },
];

export const UI_TEXT = {
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      about: 'Le Restaurant',
      contact: 'Contact & Accès',
      orderNow: 'Commander',
    },
    hero: {
      tag: 'Cuisine Japonaise Authentique · Oujda',
      title: 'L’Art du Sushi d’Exception à Oujda',
      subtitle: 'Découvrez des créations fraîches préparées avec passion, des crunchy rolls croustillants et nos ramen réconfortants.',
      viewMenu: 'Découvrir la Carte',
      callNow: 'Appeler le Restaurant',
      ratingNote: 'Note Google Maps basée sur 19 avis vérifiés',
      openNow: 'Ouvert maintenant',
      closedNow: 'Actuellement fermé',
      locationShort: 'Derrière CIH Bank, Bilal · Oujda',
    },
    menu: {
      title: 'Notre Carte',
      subtitle: 'Des ingrédients nobles, une découpe minutieuse et le savoir-faire nippon.',
      searchPlaceholder: 'Rechercher un plat, roll ou ingrédient...',
      all: 'Tout',
      addToCart: 'Ajouter',
      added: 'Ajouté',
      currency: 'DH',
      noItems: 'Aucun plat ne correspond à votre recherche.',
    },
    cart: {
      title: 'Votre Commande',
      empty: 'Votre panier est encore vide.',
      emptySub: 'Parcourez notre carte et composez votre festin japonais.',
      startBrowsing: 'Voir la carte',
      itemsCount: 'articles',
      itemCount: 'article',
      subtotal: 'Sous-total',
      deliveryFee: 'Frais de livraison',
      freeDelivery: 'Gratuit (Oujda)',
      total: 'Total à payer',
      checkoutBtn: 'Valider ma commande',
      clearCart: 'Vider le panier',
    },
    checkout: {
      title: 'Validation de Commande',
      subtitle: 'Livraison express à domicile à Oujda',
      fullName: 'Nom et Prénom',
      fullNamePlaceholder: 'Ex: Mohammed Amine',
      phone: 'Numéro de Téléphone',
      phonePlaceholder: '06XX XX XX XX ou +212 6XX XX XX XX',
      address: 'Adresse de Livraison précise',
      addressPlaceholder: 'Quartier (Bilal, Al Qods...), Rue, Bâtiment / N°',
      paymentMethod: 'Mode de Paiement',
      cashOnDelivery: 'Paiement en espèces à la livraison (Cash)',
      notes: 'Instructions spéciales pour le chef ou livreur (facultatif)',
      notesPlaceholder: 'Sans sauce pimentée, sonner à la porte...',
      submitOrder: 'Confirmer la Commande',
      securityNote: 'Paiement sécurisé en espèces à la réception de votre commande',
      backToCart: 'Retour au panier',
      requiredError: 'Veuillez remplir tous les champs obligatoires.',
    },
    confirmation: {
      title: 'Merci pour votre commande !',
      subtitle: 'Votre commande est en cours de préparation en cuisine.',
      orderNumber: 'Commande N°',
      estimatedTime: 'Temps estimé de préparation & livraison',
      customerDetails: 'Détails du destinataire',
      itemsOrdered: 'Plats commandés',
      totalPaid: 'Total à régler en espèces',
      whatsappBtn: 'Envoyer la confirmation sur WhatsApp',
      callBtn: 'Appeler le restaurant',
      newOrderBtn: 'Passer une nouvelle commande',
      etaText: '30 à 45 minutes',
    },
    contact: {
      title: 'Contact & Accès',
      subtitle: 'Venez déguster sur place ou commandez à emporter et en livraison.',
      bigCall: 'Appeler Maintenant',
      bigWhatsApp: 'Commander sur WhatsApp',
      bigMaps: 'Ouvrir sur Google Maps',
      phoneNumbers: 'Lignes Téléphoniques',
      addressTitle: 'Notre Adresse',
      addressText: 'Derriere CIH Bank, Rue Annakhil, Bilal, Oujda 60000, Maroc',
      hoursTitle: 'Horaires d’Ouverture',
      hoursDesc: 'Du Lundi au Jeudi, Samedi et Dimanche : 12:00 - 15:00 & 18:30 - 00:00\nVendredi : ouverture à 16:00 jusqu’à minuit.',
      ratingTitle: 'Avis Clients',
      ratingText: '4.7 étoiles avec 19 avis vérifiés sur Google Maps',
    },
    footer: {
      slogan: 'Tokyo Sushi Oujda · A Taste of Japan in Oujda',
      rights: 'Tous droits réservés.',
      addressSummary: 'Derrière CIH Bank, Bilal, Oujda',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'قائمة الطعام',
      about: 'عن المطعم',
      contact: 'التواصل والموقع',
      orderNow: 'اطلب الآن',
    },
    hero: {
      tag: 'مأكولات يابانية أصيلة · وجدة',
      title: 'فن السوشي الياباني الراقي في وجدة',
      subtitle: 'استمتع بأشهى أطباق السوشي المحضرة بعناية فائقة، الكرانشي رولز المقرمشة، وحساء الرامن الدافئ.',
      viewMenu: 'تصفح قائمة الطعام',
      callNow: 'اتصل بالمطعم مباشرة',
      ratingNote: 'تقييم 4.7 على خرائط Google بناءً على 19 تقييماً',
      openNow: 'مفتوح الآن للخدمة',
      closedNow: 'مغلق حالياً',
      locationShort: 'خلف بنك CIH، حي بلال · وجدة',
    },
    menu: {
      title: 'قائمة طعامنا المختارة',
      subtitle: 'مكونات طازجة عالية الجودة، تقطيع احترافي وأسرار المطبخ الياباني.',
      searchPlaceholder: 'ابحث عن طبق، رول أو مكون...',
      all: 'الكل',
      addToCart: 'إضافة للطلب',
      added: 'تمت الإضافة',
      currency: 'درهم',
      noItems: 'لا توجد أطباق تطابق بحثك الحالي.',
    },
    cart: {
      title: 'سلة الطلبات',
      empty: 'سلة طلباتك فارغة حالياً.',
      emptySub: 'تصفح قائمتنا واختر وجبتك اليابانية المفضلة.',
      startBrowsing: 'عرض القائمة',
      itemsCount: 'أطباق',
      itemCount: 'طبق',
      subtotal: 'المجموع الجزئي',
      deliveryFee: 'رسوم التوصيل',
      freeDelivery: 'مجاني (داخل وجدة)',
      total: 'المجموع الإجمالي',
      checkoutBtn: 'متابعة إتمام الطلب',
      clearCart: 'تفريغ السلة',
    },
    checkout: {
      title: 'تأكيد بيانات التوصيل',
      subtitle: 'توصيل سريع إلى باب منزلك في مدينة وجدة',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'مثال: محمد أمين',
      phone: 'رقم الهاتف',
      phonePlaceholder: '06XX XX XX XX أو +212 6XX XX XX XX',
      address: 'عنوان التوصيل بدقة',
      addressPlaceholder: 'الحي (بلال، القدس...)، الشارع، العمارة أو رقم المنزل',
      paymentMethod: 'طريقة الدفع',
      cashOnDelivery: 'الدفع نقداً عند الاستلام (كاش)',
      notes: 'ملاحظات خاصة للشيف أو موظف التوصيل (اختياري)',
      notesPlaceholder: 'بدون صلصة حارة، رن الجرس...',
      submitOrder: 'تأكيد وإرسال الطلب',
      securityNote: 'الدفع بأمان نقداً عند استلام طلبك طازجاً',
      backToCart: 'العودة للسلة',
      requiredError: 'يرجى ملء جميع الحقول المطلوبة.',
    },
    confirmation: {
      title: 'شكراً لك، تم استلام طلبك بنجاح!',
      subtitle: 'طلبك قيد التحضير بعناية في المطبخ وسينطلق إليك قريباً.',
      orderNumber: 'رقم الطلب',
      estimatedTime: 'الوقت المقدر للتحضير والتوصيل',
      customerDetails: 'معلومات العميل',
      itemsOrdered: 'الأطباق المطلوبة',
      totalPaid: 'المبلغ الإجمالي للدفع كاش',
      whatsappBtn: 'إرسال تفاصيل الطلب عبر واتساب',
      callBtn: 'الاتصال بالمطعم',
      newOrderBtn: 'بدء طلب جديد',
      etaText: '30 إلى 45 دقيقة',
    },
    contact: {
      title: 'التواصل والوصول إلينا',
      subtitle: 'يسعدنا استقبالكم في المطعم أو خدمتكم بالتوصيل المنزلي السريع.',
      bigCall: 'اتصال هاتفي فوري',
      bigWhatsApp: 'مراسلة عبر واتساب',
      bigMaps: 'فتح الموقع على خرائط Google',
      phoneNumbers: 'أرقام الهاتف المباشرة',
      addressTitle: 'العنوان',
      addressText: 'خلف بنك CIH، شارع النخيل، حي بلال، وجدة 60000، المغرب',
      hoursTitle: 'أوقات العمل',
      hoursDesc: 'من الإثنين إلى الخميس، والسبت والأحد : 12:00 - 15:00 و 18:30 - 00:00\nالجمعة : ابتداءً من 16:00 إلى منتصف الليل.',
      ratingTitle: 'تقييم الزبائن',
      ratingText: '4.7 من 5 نجوم مع 19 تقييماً معتمداً على Google Maps',
    },
    footer: {
      slogan: 'طوكيو سوشي وجدة · مذاق اليابان في وجدة',
      rights: 'جميع الحقوق محفوظة.',
      addressSummary: 'خلف بنك CIH، حي بلال، وجدة',
    },
  },
};
