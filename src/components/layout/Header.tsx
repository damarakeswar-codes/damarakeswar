import React, { useEffect, useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-5 md:px-10 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors hover:text-teal-500 dark:hover:text-teal-400"
          aria-label="Logo"
        >
          DG
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8  font-mono">
          <ul className="flex items-center space-x-5">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-xs text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  <span className="text-teal-500 dark:text-teal-400 mr-1">{`0${index + 1}.`}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-teal-500 rounded font-medium text-teal-500 hover:bg-teal-500/10 transition-colors text-xs"
          >
            Resume <ExternalLink className="ml-1 h-3 w-3" />
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-4  font-mono">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="text-slate-800 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex justify-end z-50 transition-transform duration-300 ${mobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          } md:hidden  font-mono`}
      >
        <div className="w-3/4 bg-white dark:bg-slate-800 h-full p-8 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-800 dark:text-slate-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col mt-10 space-y-6">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-slate-800 dark:text-slate-200"
                onClick={toggleMobileMenu}
              >
                <span className="text-teal-500 dark:text-teal-400 mr-2">{`0${index + 1}.`}</span>
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-8 flex items-center justify-center px-4 py-2 border border-teal-500 rounded text-teal-500 hover:bg-teal-500/10 transition-colors"
            >
              Resume <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;