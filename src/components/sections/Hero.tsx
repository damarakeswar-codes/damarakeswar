import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-16">
      <p className="text-teal-500 dark:text-teal-400 font-mono mb-5">Hi, my name is</p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        Damarakeswar Guddanti.
      </h1>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-8">
        I build things for the web.
      </h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-12 text-lg">
        I’m a software engineer passionate about building and occasionally designing exceptional digital experiences. Currently, I’m focused on developing innovative AIF and Mutual Fund products at{' '}
        <a
          href="https://upstatement.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 dark:text-teal-400 hover:underline"
        >
          Validus
        </a>.
      </p>

      <a
        href="#projects"
        className="font-mono inline-flex items-center px-6 py-3 border-2 border-teal-500 border-solid rounded w-fit text-teal-500 transition-transform duration-500 group text-xs hover:-translate-y-1 hover:-translate-x-1 "
      >
        Check out my work
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </section>
  );
};

export default Hero;