import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, OrderConfirmation, OrderForm, Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  
  // UI states
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  confirmedOrder: OrderConfirmation | null;
  setConfirmedOrder: (order: OrderConfirmation | null) => void;
  
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  
  // Active navigation view
  activeTab: 'home' | 'menu' | 'contact';
  setActiveTab: (tab: 'home' | 'menu' | 'contact') => void;
  
  // Place order
  handleCheckoutSubmit: (formData: OrderForm) => OrderConfirmation;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'tokyo_sushi_oujda_cart_v1';
const LANG_STORAGE_KEY = 'tokyo_sushi_oujda_lang';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar' || saved === 'fr') return saved;
      return 'fr';
    } catch {
      return 'fr';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmation | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'menu' | 'contact'>('home');

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          quantity: copy[existingIndex].quantity + quantity,
        };
        return copy;
      }
      return [...prev, { item, quantity }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const deliveryFee = RESTAURANT_INFO.deliveryFee;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleCheckoutSubmit = (formData: OrderForm): OrderConfirmation => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `TS-${randomNum}`;
    const newOrder: OrderConfirmation = {
      ...formData,
      orderId,
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedDeliveryTime: RESTAURANT_INFO.deliveryTimeEstimate,
    };

    setConfirmedOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal,
        deliveryFee,
        total,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        confirmedOrder,
        setConfirmedOrder,
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        handleCheckoutSubmit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
