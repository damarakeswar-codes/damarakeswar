import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-16">
      <p className="type-eyebrow mb-5">Hi, my name is</p>

      <h1 className="type-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
        Damarakeswar Guddanti
      </h1>

      <h2 className="type-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-600 dark:text-slate-400 mb-8">
        I build things for the web.
      </h2>

      <p className="type-body max-w-2xl mb-12">
        I'm a Software Engineer with a passion for bridging the gap between robust code and exceptional design. Specialized in crafting high-impact digital products and am currently seeking new opportunities to build scalable, user-centric solutions.
      </p>

      <a
        href="#projects"
        className="btn-premium w-fit group"
      >
        Check out my work
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </section>
  );
};

export default Hero;