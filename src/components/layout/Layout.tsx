import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />
      <main className="pt-24 px-5 md:px-10">
        <div className="mx-auto px-0 md:px-8 lg:px-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;