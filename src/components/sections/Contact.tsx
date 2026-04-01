import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="text-teal-500 dark:text-teal-400 font-mono mb-4">04. What's Next?</p>

      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        Get In Touch
      </h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-10">
        Although I'm not currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a
        href="mailto:damarakeswarg1999@gmail.com"
        className="inline-flex items-center px-6 py-3 border-2 border-teal-500 border-solid rounded-md text-teal-500 hover:bg-teal-500/10 transition-colors duration-300 font-mono"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;