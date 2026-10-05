import React from 'react';
import { useCart } from '../context/CartContext';
import { UI_TEXT, RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, Phone, MapPin, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    activeTab,
    setActiveTab,
    totalCount,
    total,
    setIsCartOpen,
  } = useCart();

  const t = UI_TEXT[language];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0d]/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('home')}
              className="text-left group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
              aria-label="Tokyo Sushi Oujda Homepage"
            >
              <div className="w-9 h-9 rounded-full bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500 font-semibold text-sm transition-transform group-hover:scale-105">
                鮨
              </div>
              <div>
                <span className="font-zen text-lg sm:text-xl font-bold tracking-widest text-white uppercase group-hover:text-red-400 transition-colors">
                  Tokyo Sushi
                </span>
                <span className="hidden sm:block text-[11px] text-neutral-400 tracking-wider">
                  Oujda · {RESTAURANT_INFO.kanji}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors pb-1 ${
                activeTab === 'home'
                  ? 'text-white border-b-2 border-red-600 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`transition-colors pb-1 ${
                activeTab === 'menu'
                  ? 'text-white border-b-2 border-red-600 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`transition-colors pb-1 ${
                activeTab === 'contact'
                  ? 'text-white border-b-2 border-red-600 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: Actions (Language toggle + Cart CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-md transition-colors"
              title={RESTAURANT_INFO.phonePrimary}
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="tabular-nums">{RESTAURANT_INFO.phonePrimary}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 bg-neutral-900 border border-neutral-800 rounded-lg">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  language === 'fr'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all font-ar ${
                  language === 'ar'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="العربية"
              >
                العربية
              </button>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-red-700 hover:bg-red-600 active:scale-95 rounded-lg shadow-md shadow-red-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 whitespace-nowrap"
              aria-label={`Ouvrir le panier, ${totalCount} articles`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.orderNow}</span>
              {totalCount > 0 ? (
                <div className="flex items-center gap-1 bg-black/30 px-1.5 py-0.5 rounded text-[11px] font-bold tabular-nums">
                  <span>{totalCount}</span>
                  <span className="hidden md:inline">·</span>
                  <span className="hidden md:inline">{total} DH</span>
                </div>
              ) : null}
            </button>
          </div>

        </div>

        {/* Mobile Tab Strip */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-neutral-800/60 text-xs">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'home' ? 'text-red-400 font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'menu' ? 'text-red-400 font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.nav.menu}
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'contact' ? 'text-red-400 font-semibold' : 'text-neutral-400'
            }`}
          >
            {t.nav.contact}
          </button>
        </div>

      </div>
    </header>
  );
};
