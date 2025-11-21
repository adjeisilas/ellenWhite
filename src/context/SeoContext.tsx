import React, { createContext, useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SeoContextType {
  setSeo: (seo: SeoProps) => void;
}

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SeoContext = createContext<SeoContextType | undefined>(undefined);

export const SeoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export const useSeo = () => {
  const context = useContext(SeoContext);
  if (context === undefined) {
    throw new Error('useSeo must be used within a SeoProvider');
  }
  return context;
};