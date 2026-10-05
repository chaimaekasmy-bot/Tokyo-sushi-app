import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, UI_TEXT } from '../data/restaurantData';
import { MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setActiveTab } = useCart();
  const t = UI_TEXT[language];

  return (
    <footer className="bg-[#08080a] border-t border-neutral-900 text-neutral-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Kanji */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-zen text-lg font-bold text-white tracking-widest uppercase">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-red-500 font-semibold text-sm">
                {RESTAURANT_INFO.kanji}
              </span>
            </div>
            <p className="text-neutral-500">
              {RESTAURANT_INFO.slogan[language]}
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex items-center gap-6 text-neutral-300">
            <button
              onClick={() => setActiveTab('home')}
              className="hover:text-red-400 transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className="hover:text-red-400 transition-colors"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="hover:text-red-400 transition-colors"
            >
              {t.nav.contact}
            </button>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Google Maps
            </a>
          </div>

          {/* Contact summary */}
          <div className="text-center md:text-right space-y-1 font-mono text-neutral-400">
            <div>{RESTAURANT_INFO.phonePrimary}</div>
            <div>{RESTAURANT_INFO.phoneSecondary}</div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-neutral-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name} Oujda. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            <span>{RESTAURANT_INFO.address.fr}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
