import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { UI_TEXT, RESTAURANT_INFO } from '../data/restaurantData';
import { OrderForm } from '../types';
import { X, ShieldCheck, Banknote, MapPin, Phone, User, FileText, ArrowRight } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    setIsCartOpen,
    cart,
    total,
    handleCheckoutSubmit,
    language,
  } = useCart();

  const t = UI_TEXT[language];

  const [formData, setFormData] = useState<OrderForm>({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
    paymentMethod: 'cash',
  });

  const [error, setError] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setError(t.checkout.requiredError);
      return;
    }
    setError(null);
    handleCheckoutSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#111114] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div>
            <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
              Tokyo Sushi Oujda
            </span>
            <h3 className="text-xl font-bold text-white font-zen">
              {t.checkout.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {t.checkout.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          
          {error && (
            <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-lg text-xs text-red-300">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-red-500" />
                {t.checkout.fullName} *
              </span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder={t.checkout.fullNamePlaceholder}
              className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                {t.checkout.phone} *
              </span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.checkout.phonePlaceholder}
              className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {/* Delivery Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {t.checkout.address} *
              </span>
            </label>
            <textarea
              required
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder={t.checkout.addressPlaceholder}
              className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
            />
          </div>

          {/* Payment Method (Fixed to Cash on Delivery) */}
          <div className="space-y-1.5 pt-1">
            <label className="block text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                {t.checkout.paymentMethod}
              </span>
            </label>
            <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full border-4 border-emerald-500 bg-black" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {t.checkout.cashOnDelivery}
                </span>
              </div>
              <span className="text-xs text-neutral-400">Cash / كاش</span>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-neutral-400">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-neutral-500" />
                {t.checkout.notes}
              </span>
            </label>
            <input
              type="text"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={t.checkout.notesPlaceholder}
              className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {/* Order Summary Recap */}
          <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-1 text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>{cart.length} {language === 'ar' ? 'أصناف في الطلب' : 'articles sélectionnés'}</span>
              <span className="text-white font-medium">{total} DH</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>{language === 'ar' ? 'مدة التوصيل التقريبية' : 'Délai moyen'}</span>
              <span className="text-emerald-400 font-medium">{RESTAURANT_INFO.deliveryTimeEstimate}</span>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-700 hover:bg-red-600 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-red-950/40 transition-all cursor-pointer"
            >
              <span>{t.checkout.submitOrder} ({total} DH)</span>
              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => {
                setIsCheckoutOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full py-2 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              {t.checkout.backToCart}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.checkout.securityNote}</span>
          </div>

        </form>

      </div>
    </div>
  );
};
