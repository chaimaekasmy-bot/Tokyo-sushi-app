/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { Footer } from './components/Footer';

function MainApp() {
  const { activeTab } = useCart();

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-neutral-100 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <MenuSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'menu' && (
          <div className="pt-4">
            <MenuSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-4">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Slide-out & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
