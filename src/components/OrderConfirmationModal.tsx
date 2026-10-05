import React from 'react';
import { useCart } from '../context/CartContext';
import { UI_TEXT, RESTAURANT_INFO } from '../data/restaurantData';
import { CheckCircle2, Phone, MessageSquare, Clock, MapPin, Receipt, ArrowRight, Utensils } from 'lucide-react';

export const OrderConfirmationModal: React.FC = () => {
  const { confirmedOrder, setConfirmedOrder, language, setActiveTab } = useCart();
  const t = UI_TEXT[language];

  if (!confirmedOrder) return null;

  // Generate WhatsApp message string
  const itemsText = confirmedOrder.items
    .map(
      (ci) =>
        `• ${ci.quantity}x ${ci.item.name[language]} (${ci.item.price * ci.quantity} DH)`
    )
    .join('%0A');

  const waMessage = `*COMMANDE TOKYO SUSHI OUJDA* - ${confirmedOrder.orderId}%0A%0A*Client:* ${confirmedOrder.fullName}%0A*Téléphone:* ${confirmedOrder.phone}%0A*Adresse:* ${confirmedOrder.address}%0A${confirmedOrder.notes ? `*Notes:* ${confirmedOrder.notes}%0A` : ''}%0A*Plats commandés:*%0A${itemsText}%0A%0A*Total à payer:* ${confirmedOrder.total} DH (Espèces à la livraison)`;

  const whatsappDirectUrl = `https://wa.me/212550130799?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#111114] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Banner with zen seal */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-red-950/40 via-neutral-900/40 to-transparent border-b border-neutral-800/80 text-center space-y-3">
          <div className="inline-flex p-3 rounded-full bg-red-700/20 border border-red-600/40 text-red-500 mb-1">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          
          <h2 className="text-xl sm:text-3xl font-bold text-white font-zen">
            {t.confirmation.title}
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
            {t.confirmation.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-xs text-neutral-300">
            <span className="text-neutral-400">{t.confirmation.orderNumber}</span>
            <span className="font-mono font-bold text-white text-sm">
              {confirmedOrder.orderId}
            </span>
          </div>
        </div>

        {/* Content details */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Estimated Preparation & Delivery Box */}
          <div className="flex items-center justify-between p-4 bg-red-950/20 border border-red-900/40 rounded-2xl">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-red-500 shrink-0" />
              <div>
                <span className="text-xs text-neutral-400 block">
                  {t.confirmation.estimatedTime}
                </span>
                <span className="text-base font-bold text-white">
                  {t.confirmation.etaText}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-400 font-semibold block">
                {language === 'ar' ? 'في المطبخ الآن' : 'En préparation'}
              </span>
              <span className="text-[11px] text-neutral-400">
                {confirmedOrder.createdAt}
              </span>
            </div>
          </div>

          {/* Customer & Address Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-1">
              <span className="text-neutral-500 font-medium">{t.checkout.fullName}</span>
              <p className="text-white font-semibold text-sm">{confirmedOrder.fullName}</p>
              <p className="text-neutral-400 tabular-nums">{confirmedOrder.phone}</p>
            </div>

            <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-1">
              <span className="text-neutral-500 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-500" />
                {t.checkout.address}
              </span>
              <p className="text-white text-xs leading-snug line-clamp-2">{confirmedOrder.address}</p>
              {confirmedOrder.notes && (
                <p className="text-neutral-400 italic text-[11px]">« {confirmedOrder.notes} »</p>
              )}
            </div>
          </div>

          {/* Itemized Receipt */}
          <div className="space-y-2 border border-neutral-800/80 rounded-2xl p-4 bg-neutral-900/30">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 pb-2 border-b border-neutral-800">
              <Receipt className="w-4 h-4 text-red-500" />
              <span>{t.confirmation.itemsOrdered}</span>
            </div>

            <div className="divide-y divide-neutral-800/60 max-h-44 overflow-y-auto">
              {confirmedOrder.items.map((ci) => (
                <div key={ci.item.id} className="py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center bg-neutral-800 text-neutral-300 rounded font-bold text-[11px] tabular-nums">
                      {ci.quantity}
                    </span>
                    <span className="text-white font-medium">{ci.item.name[language]}</span>
                  </div>
                  <span className="text-neutral-300 tabular-nums font-semibold">
                    {ci.item.price * ci.quantity} DH
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-sm">
              <span className="text-neutral-300 font-semibold">{t.confirmation.totalPaid}</span>
              <span className="text-xl font-bold text-amber-400 tabular-nums">
                {confirmedOrder.total} DH
              </span>
            </div>
          </div>

          {/* Action CTAs: WhatsApp + Phone */}
          <div className="space-y-2.5 pt-2">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-950/50 transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.confirmation.whatsappBtn}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white rounded-xl text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>{t.confirmation.callBtn}</span>
              </a>

              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  setActiveTab('menu');
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{t.confirmation.newOrderBtn}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
