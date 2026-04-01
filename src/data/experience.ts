export type Experience = {
  id: string;
  company: string;
  title: string;
  range: string;
  url: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: 'upstatement',
    company: 'Upstatement',
    title: 'Lead Engineer',
    range: 'May 2018 - Present',
    url: 'https://upstatement.com',
    responsibilities: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, and more',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into fully functioning websites and applications',
      'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
    ]
  },
  {
    id: 'apple',
    company: 'Apple',
    title: 'UI Engineer',
    range: 'July 2017 - May 2018',
    url: 'https://apple.com',
    responsibilities: [
      'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
      'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal APIs',
      'Architected and implemented the user interface of Apple Music\'s embeddable web player widget, which lets users log in and listen to full songs in the browser',
      'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
    ]
  },
  {
    id: 'scout',
    company: 'Scout Studio',
    title: 'Studio Developer',
    range: 'January 2017 - June 2017',
    url: 'https://scout.camd.northeastern.edu/',
    responsibilities: [
      'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout\'s online presence',
      'Worked closely with designers to implement a design system using WordPress, HTML, and SCSS',
      'Developed and maintained the in-house content management system powering the student-led design studio\'s website'
    ]
  },
  {
    id: 'starry',
    company: 'Starry',
    title: 'Software Engineer Co-op',
    range: 'July 2016 - December 2016',
    url: 'https://starry.com',
    responsibilities: [
      'Engineered and maintained major features of Starry\'s customer-facing web app using ES6, Handlebars, Backbone, Marionette, and CSS',
      'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry\'s iOS and Android mobile apps'
    ]
  },
  {
    id: 'mullen',
    company: 'MullenLowe',
    title: 'Creative Technologist Co-op',
    range: 'July 2015 - December 2015',
    url: 'https://us.mullenlowe.com',
    responsibilities: [
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
      'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
    ]
  }
];