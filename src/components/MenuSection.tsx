import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES, MENU_ITEMS, UI_TEXT } from '../data/restaurantData';
import { CategoryId, MenuItem } from '../types';
import { Plus, Minus, Check, Search, Sparkles } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { language, addToCart, updateQuantity, cart } = useCart();
  const t = UI_TEXT[language];

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchName =
        item.name.fr.toLowerCase().includes(q) ||
        item.name.ar.toLowerCase().includes(q);
      const matchDesc =
        item.description.fr.toLowerCase().includes(q) ||
        item.description.ar.toLowerCase().includes(q);

      return matchCategory && (matchName || matchDesc);
    });
  }, [selectedCategory, searchQuery]);

  const getItemQuantity = (id: string): number => {
    const item = cart.find((ci) => ci.item.id === id);
    return item ? item.quantity : 0;
  };

  const handleAdd = (item: MenuItem) => {
    addToCart(item, 1);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((curr) => (curr === item.id ? null : curr));
    }, 1200);
  };

  return (
    <section id="menu-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
          Tokyo Sushi Menu
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-zen">
          {t.menu.title}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400">
          {t.menu.subtitle}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        
        {/* Category Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-700 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.name[language]}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] max-w-sm">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.menu.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl">
          <p className="text-neutral-400 text-sm">{t.menu.noItems}</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-red-400 hover:underline"
          >
            {language === 'ar' ? 'إعادة ضبط البحث' : 'Réinitialiser la recherche'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            const isJustAdded = justAddedId === item.id;

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#111114] border border-neutral-800/90 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Photo container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter brightness-95"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed badge or subtle tag */}
                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-red-700/90 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded shadow-sm">
                      {item.badge[language]}
                    </div>
                  )}

                  {item.pieces && (
                    <div className="absolute bottom-3 left-3 text-[11px] text-neutral-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.pieces}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                        {item.name[language]}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-lg font-bold text-amber-400 tabular-nums">
                          {item.price}
                        </span>
                        <span className="text-xs text-neutral-400 ml-1 font-medium">
                          DH
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                      {item.description[language]}
                    </p>
                  </div>

                  {/* Add to Cart / Quantity Selector */}
                  <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {item.categoryId === 'crunchy-rolls'
                        ? 'Crunchy Roll'
                        : item.categoryId === 'specialite-mitsuki'
                        ? 'Mitsuki'
                        : item.categoryId === 'ramen-soups'
                        ? 'Ramen & Soup'
                        : 'Dessert'}
                    </span>

                    {qty > 0 ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700/80 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center rounded text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors active:scale-95"
                          aria-label="Diminuer quantité"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white tabular-nums">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center rounded bg-red-700 text-white hover:bg-red-600 transition-colors active:scale-95"
                          aria-label="Augmenter quantité"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(item)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
                          isJustAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-red-700 hover:bg-red-600 text-white shadow-sm shadow-red-950/40'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.menu.added}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{t.menu.addToCart}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
