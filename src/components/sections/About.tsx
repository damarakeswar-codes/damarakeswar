import React from 'react';
import ProfileImage from '../../data/profile.jpg';

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Tailwind CSS',
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="flex items-center mb-10">
        <h2 className="section-title mr-4">
          <span className="type-eyebrow text-xl mr-2">01.</span>
          About Me
        </h2>
        <div className="flex-grow h-px bg-slate-300 dark:bg-slate-700"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4 type-body">
          <p>
            I am a <strong>Frontend Engineer</strong> dedicated to building high-performance, user-centric web applications. By blending technical architecture with a keen eye for design, I specialize in transforming complex requirements into seamless digital experiences—from scalable dashboards to custom component libraries built with <strong>React, Ant Design, MUI, Shadcn, and TailwindCSS</strong>.
          </p>

          <p>
            My approach centers on creating <strong>intuitive, accessible, and high-impact interfaces</strong>. Whether engineering finance-focused platforms or integrating AI-driven modules, I focus on delivering code that is as clean as the UI it powers. I don’t just build to meet specifications; I build to elevate the end-user experience.
          </p>

          <p>
            <strong>Core Toolkit:</strong>
            <br />
            React.js • TailwindCSS • Ant Design • Redux • Axios • Zustand • mui • TypeScript • Framer Motion • Vite • GitHub 
          </p>

          <p>
            I am deeply committed to <strong>design systems</strong>, <strong>modular code architecture</strong>, and the belief that great software should be as enjoyable to use as it is robust.
          </p>

          <p>
            Skills:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-4 text-sm tracking-[0.01em]">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-start">
                <span className="text-teal-500 dark:text-teal-400 mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group cursor-pointer w-64 sm:w-72 md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] mx-auto md:mx-0">
          {/* Offset Border */}
          <div className="absolute inset-0 border-2 border-teal-400 rounded-xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 md:translate-x-5 md:translate-y-5 group-hover:translate-x-2 group-hover:translate-y-2 sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 transition-all duration-500 ease-out"></div>
          {/* Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-400/30 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>

            {/* Image */}
            <img
              src={ProfileImage}
              alt="Profile"
              className="
              relative z-0
              w-full
              h-full
              object-cover
              grayscale
              contrast-110
              brightness-90
              group-hover:grayscale-0
              group-hover:brightness-100
              scale-100
              group-hover:scale-105
              transition-all
              duration-700
              ease-out
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;