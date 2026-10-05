import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, UI_TEXT } from '../data/restaurantData';
import { Phone, MessageSquare, MapPin, Clock, Star, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useCart();
  const t = UI_TEXT[language];

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#0d0d10] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
            {language === 'ar' ? 'الموقع وخدمة الزبائن' : 'Restaurant & Emplacement'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-zen">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 3 BIG ACTION BUTTONS (User Requirement: Contact page with 3 big buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          
          {/* 1. Big Call Button */}
          <a
            href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-[#141418] hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/60 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              {t.contact.bigCall}
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              {language === 'ar' ? 'اتصال مباشر فوري للحجز أو الطلب' : 'Ligne fixe & réservations'}
            </p>
            <span className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm font-bold text-red-400 font-mono tabular-nums group-hover:bg-red-700 group-hover:text-white transition-colors">
              {RESTAURANT_INFO.phonePrimary}
            </span>
          </a>

          {/* 2. Big WhatsApp Button */}
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-[#141418] hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/60 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8 fill-emerald-500/20" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              {t.contact.bigWhatsApp}
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              {language === 'ar' ? 'محادثة وتوصيل سريع عبر واتساب' : 'Commandes express et assistance'}
            </p>
            <span className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm font-bold text-emerald-400 font-mono tabular-nums group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              {RESTAURANT_INFO.phoneSecondary}
            </span>
          </a>

          {/* 3. Big Google Maps Button */}
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-[#141418] hover:bg-neutral-900 border border-neutral-800 hover:border-blue-500/60 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Navigation className="w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              {t.contact.bigMaps}
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              {language === 'ar' ? 'الاتجاهات ونظام الملاحة GPS' : 'Itinéraire & GPS direct'}
            </p>
            <span className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-semibold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

        </div>

        {/* Detailed Info Cards (Address, Hours, Verified Rating) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address & Landmark Card */}
          <div className="p-6 bg-[#111114] border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-red-500">
              <MapPin className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">
                {t.contact.addressTitle}
              </h4>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {RESTAURANT_INFO.address[language]}
            </p>
            <div className="p-3 bg-neutral-900/80 border border-neutral-800/80 rounded-xl text-xs text-neutral-400">
              <strong className="text-white block mb-0.5">
                {language === 'ar' ? 'نقطة علامة مميزة :' : 'Repère visuel :'}
              </strong>
              {language === 'ar'
                ? 'خلف وكالة بنك CIH مباشرة في شارع النخيل بحي بلال في مدينة وجدة.'
                : 'Juste derrière l’agence CIH Bank sur l’avenue Annakhil dans le quartier Bilal.'}
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-6 bg-[#111114] border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-red-500">
              <Clock className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">
                {t.contact.hoursTitle}
              </h4>
            </div>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">
                  {language === 'ar' ? 'السبت - الخميس' : 'Samedi - Jeudi'}
                </span>
                <span className="text-white font-medium tabular-nums">
                  12:00 - 15:00 & 18:30 - 00:00
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-800">
                <span className="text-neutral-400">
                  {language === 'ar' ? 'الجمعة' : 'Vendredi'}
                </span>
                <span className="text-red-400 font-medium tabular-nums">
                  {language === 'ar' ? '16:00 - 00:00' : '16:00 - 00:00'}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400">
              {language === 'ar'
                ? 'الخدمة متاحة داخل المطعم، للطلبات الخارجية وللتوصيل المنزلي السريع.'
                : 'Service sur place, à emporter et livraison à domicile disponible.'}
            </p>
          </div>

          {/* Google Reviews & Direct Contacts Card */}
          <div className="p-6 bg-[#111114] border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
              <h4 className="text-base font-bold text-white">
                {t.contact.ratingTitle}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-white font-mono tabular-nums">
                {RESTAURANT_INFO.rating}
              </span>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-neutral-400">
                  {RESTAURANT_INFO.reviewsCount} {language === 'ar' ? 'تقييماً حقيقياً' : 'avis Google vérifiés'}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-800 text-xs text-neutral-400 space-y-1">
              <span className="block font-semibold text-white">
                {t.contact.phoneNumbers} :
              </span>
              <div className="flex flex-col gap-1 tabular-nums font-mono text-neutral-300">
                <a href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`} className="hover:text-red-400 transition-colors">
                  📞 {RESTAURANT_INFO.phonePrimary}
                </a>
                <a href={`tel:${RESTAURANT_INFO.phoneSecondaryRaw}`} className="hover:text-red-400 transition-colors">
                  📱 {RESTAURANT_INFO.phoneSecondary}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
