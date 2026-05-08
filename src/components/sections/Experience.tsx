import React, { useState } from 'react';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  
  const activeExperience = experiences.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className="py-24">
      <div className="flex items-center mb-10">
        <h2 className="section-title mr-4">
          <span className="type-eyebrow text-xl mr-2">02.</span>
          Where I've Worked
        </h2>
        <div className="flex-grow h-px bg-slate-300 dark:bg-slate-700"></div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-6 md:mb-0 md:w-32 border-b md:border-b-0 md:border-l border-slate-300 dark:border-slate-700">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              onClick={() => setActiveTab(experience.id)}
              className={`px-4 py-3 type-ui whitespace-nowrap md:border-l-2 transition-colors duration-200 ${
                activeTab === experience.id 
                  ? 'text-teal-500 dark:text-teal-400 md:border-teal-500 dark:md:border-teal-400 bg-teal-50 dark:bg-teal-900/10' 
                  : 'text-slate-600 dark:text-slate-400 md:border-transparent hover:text-teal-500 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/10'
              }`}
            >
              {experience.company}
            </button>
          ))}
        </div>
        
        {/* Content */}
        {activeExperience && (
          <div className="md:pl-8 flex-1">
            <h3 className="type-title text-xl font-semibold">
              {activeExperience.title}{' '}
              <a 
                href={activeExperience.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-500 dark:text-teal-400 interactive-link"
              >
                @ {activeExperience.company}
              </a>
            </h3>
            
            <p className="type-eyebrow mt-1 mb-4 text-slate-500 dark:text-slate-500">
              {activeExperience.range}
            </p>
            
            <ul className="space-y-3">
              {activeExperience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex type-body text-base">
                  <span className="text-teal-500 dark:text-teal-400 mr-2 flex-shrink-0">▹</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;