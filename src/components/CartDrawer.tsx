import React from 'react';
import { useCart } from '../context/CartContext';
import { UI_TEXT } from '../data/restaurantData';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    totalCount,
    setIsCheckoutOpen,
    language,
    setActiveTab,
  } = useCart();

  const t = UI_TEXT[language];

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111114] border-l border-neutral-800 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold text-white font-zen">
                {t.cart.title}
              </h2>
              {totalCount > 0 && (
                <span className="text-xs text-neutral-400 font-mono">
                  ({totalCount} {totalCount === 1 ? t.cart.itemCount : t.cart.itemsCount})
                </span>
              )}
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800/80 transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <p className="text-base font-semibold text-white">
                  {t.cart.empty}
                </p>
                <p className="text-xs text-neutral-400 max-w-xs">
                  {t.cart.emptySub}
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActiveTab('menu');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
                >
                  {t.cart.startBrowsing}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-neutral-900/70 border border-neutral-800/80 rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name[language]}
                      className="w-16 h-16 rounded-lg object-cover bg-neutral-800 shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {item.name[language]}
                      </h4>
                      <div className="text-xs text-amber-400 font-bold tabular-nums">
                        {item.price} DH
                        <span className="text-neutral-500 font-normal ml-1">
                          x {quantity}
                        </span>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-neutral-700 rounded bg-neutral-800/80">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-neutral-400 hover:text-white"
                            aria-label="Diminuer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white tabular-nums">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-neutral-400 hover:text-white"
                            aria-label="Augmenter"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-neutral-500 hover:text-red-400 transition-colors ml-auto"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-sm font-bold text-white tabular-nums self-end">
                      {item.price * quantity} DH
                    </div>
                  </div>
                ))}

                <div className="pt-2 text-right">
                  <button
                    onClick={clearCart}
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {t.cart.clearCart}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-neutral-800 bg-[#0d0d0f] space-y-3">
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>{t.cart.subtotal}</span>
                  <span className="text-white font-medium tabular-nums">{subtotal} DH</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>{t.cart.deliveryFee}</span>
                  <span className="text-emerald-400 font-medium">
                    {deliveryFee === 0 ? t.cart.freeDelivery : `${deliveryFee} DH`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800">
                  <span>{t.cart.total}</span>
                  <span className="text-amber-400 tabular-nums text-lg">{total} DH</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-700 hover:bg-red-600 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-red-950/40 transition-all"
              >
                <span>{t.cart.checkoutBtn}</span>
                <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
