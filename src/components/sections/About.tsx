import React from 'react';

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
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
          <span className="text-teal-500 dark:text-teal-400 font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        <div className="flex-grow h-px bg-slate-300 dark:bg-slate-700"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400">
          <p>
            I’m a passionate frontend developer who thrives on building seamless, responsive, and user-first web applications. From architecting dynamic layouts using React, Ant Design, and TailwindCSS, to crafting pixel-perfect dashboards and custom component libraries, I believe in delivering clarity through code and impact through design. <br />
            💡 Whether it’s a Dashboard, a finance-focused screen, or a chatbot-enhanced help module, I focus on creating intuitive, accessible, and high-performing interfaces across web and mobile. I bring frontend experiences to life not just to meet requirements, but to elevate them.
          </p>
          <p>
          🔧 My toolkit includes:
          <br />
          React JS • TailwindCSS • Ant Design • Redux • Axios • Framer Motion • Vite • Responsive Design • GitHub CI/CD
          </p>
          <p>
          ✨ I care deeply about design systems, code reusability, and creating experiences that users don’t just use but enjoy.
          </p>
          <p>
            Skills:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {SKILLS.map((skill) => (
              <li key={skill} className="flex items-start">
                <span className="text-teal-500 dark:text-teal-400 mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 relative group">
          <div className="relative rounded overflow-hidden">
            <div className="absolute inset-0 bg-teal-500/20 dark:bg-teal-400/20 z-10 group-hover:bg-transparent transition duration-300"></div>
            <div className="border-solid border-2 border-teal-500 dark:border-teal-400 absolute inset-0 translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 rounded"></div>
            <img
              src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="rounded relative z-0 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;