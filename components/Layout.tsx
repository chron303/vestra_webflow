import React from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Hide bottom nav on Auth, Onboarding, and Assistant screens
  const hideNav = ['/auth', '/onboarding', '/assistant'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      <div className="max-w-md mx-auto min-h-screen bg-stone-50 shadow-2xl overflow-hidden relative">
        {children}
        {!hideNav && <BottomNav />}
      </div>
    </div>
  );
};