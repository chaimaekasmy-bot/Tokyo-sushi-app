import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, UI_TEXT } from '../data/restaurantData';
import { Star, MapPin, Clock, Phone, ArrowRight, Utensils, MessageSquare } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, setActiveTab } = useCart();
  const t = UI_TEXT[language];

  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] border-b border-neutral-900">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.images.hero}
          alt="Tokyo Sushi Oujda Platter"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/70 to-[#0b0b0d]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/90 via-[#0b0b0d]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl space-y-6">
          
          {/* Metadata Line (Zero-pill discipline, clean typographic separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
            <span className="text-red-500 font-semibold tracking-wider uppercase">
              {t.hero.tag}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <div className="flex items-center gap-1.5 text-amber-400">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-amber-400/40 text-amber-400'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-white tabular-nums">
                {RESTAURANT_INFO.rating}
              </span>
              <span className="text-neutral-400 text-xs">
                ({RESTAURANT_INFO.reviewsCount} {language === 'ar' ? 'تقييم' : 'avis'})
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-zen leading-[1.15]">
              {language === 'ar' ? (
                <span className="font-ar font-bold leading-tight block">
                  {t.hero.title}
                </span>
              ) : (
                <>
                  <span className="block">{t.hero.title}</span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Quick Info Grid: Address & Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-start gap-3 p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white mb-0.5">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-neutral-300 leading-snug">
                  {RESTAURANT_INFO.address[language]}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg backdrop-blur-sm">
              <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white mb-0.5">
                  {language === 'ar' ? 'أوقات العمل اليومية' : 'Horaires du Restaurant'}
                </span>
                <span className="text-neutral-300 leading-snug tabular-nums">
                  {RESTAURANT_INFO.openingHours.display[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('menu')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-red-700 hover:bg-red-600 active:scale-95 rounded-lg shadow-lg shadow-red-950/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <Utensils className="w-4 h-4" />
              <span>{t.hero.viewMenu}</span>
              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{t.hero.callNow}</span>
            </a>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400">
            <span>✨ {language === 'ar' ? 'مكونات طازجة 100%' : 'Ingrédients ultra-frais du jour'}</span>
            <span aria-hidden="true">·</span>
            <span>⚡ {language === 'ar' ? 'توصيل سريع داخل وجدة' : 'Livraison rapide à Oujda'}</span>
            <span aria-hidden="true">·</span>
            <span>💵 {language === 'ar' ? 'الدفع نقداً عند الاستلام' : 'Paiement Cash à la livraison'}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
