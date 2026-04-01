import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
          <span className="text-teal-500 dark:text-teal-400 font-mono text-xl mr-2">03.</span>
          Some Things I've Built
        </h2>
        <div className="flex-grow h-px bg-slate-300 dark:bg-slate-700"></div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-24 mb-20">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="relative md:grid md:grid-cols-12 md:gap-4 items-center"
          >
            {/* Project Image */}
            <div className={`relative col-span-full md:col-span-7 ${index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
              }`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/9] relative rounded overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
                />
              </a>
            </div>

            {/* Project Content */}
            <div
              className={`relative col-span-full md:col-span-7 ${index % 2 === 0
                ? 'md:col-start-1 md:text-left'
                : 'md:col-start-6 md:text-right'
                } ${index % 2 === 0
                  ? 'md:pr-4 lg:pr-8'
                  : 'md:pl-4 lg:pl-8'
                } mt-4 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 w-full`}
            >
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <p className="text-teal-500 dark:text-teal-400 font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                <ul className={`flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono mb-6 ${index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`External Link - ${project.title}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Section */}
      <h3 className="text-center text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">
        Other Noteworthy Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map(project => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-800 rounded-md shadow-md hover:cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-teal-500 dark:text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`External Link - ${project.title}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {project.title}
              </h4>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;