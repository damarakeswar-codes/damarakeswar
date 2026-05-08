import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    url: 'https://github.com/damarakeswar-codes'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    url: 'https://www.linkedin.com/in/damarakeswarguddanti/'
  },
  {
    name: 'Email',
    icon: <Mail className="h-5 w-5" />,
    url: 'mailto:damarakeswarguddanti@gmail.com'
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-5 md:px-10 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Social links on desktop (side) */}
        <div className="hidden md:block fixed left-8 bottom-0">
          <div className="flex flex-col items-center gap-y-6">
            <div className="flex flex-col gap-y-6 mb-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 transform hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="h-24 w-px bg-slate-400 dark:bg-slate-600"></div>
          </div>
        </div>

        {/* Email on desktop (side) */}
        <div className="hidden md:block fixed right-8 bottom-0">
          <div className="flex flex-col items-center">
            <a
              href="mailto:damarakeswarguddanti@gmail.com"
              className="type-ui uppercase text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-transform duration-300 transform rotate-90 -translate-x-3 -translate-y-12 origin-bottom-right tracking-[0.14em] text-xs"
            >
              damarakeswarguddanti@gmail.com
            </a>

            <div className="h-24 w-px bg-slate-400 dark:bg-slate-600 transform translate-x-36"></div>
          </div>
        </div>

        {/* Footer center content */}
        <div className="flex flex-col items-center justify-center">
          {/* Mobile social links */}
          <div className="flex justify-center space-x-6 md:hidden mb-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="type-ui text-slate-500 dark:text-slate-400 text-center">
            Designed & Built by <a href="#" className="interactive-link text-teal-500 dark:text-teal-400 hover:underline">Damarakeswar Guddanti</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;