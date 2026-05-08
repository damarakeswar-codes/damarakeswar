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
    id: 'validus',
    company: 'Validus',
    title: 'Software Engineer',
    range: 'Sept 2022 - Mar 2026',
    url: 'https://validusfintech.com/',
    responsibilities: [
      'Developed and deployed AIF and Mutual Fund web applications from scratch using React.js, Ant Design (AntD), Material UI (mui), and Tailwind CSS, implementing investment portfolio management, user authentication, and responsive UI features to enhance user experience and engagement.',
      'Diagnosed and resolved complex frontend issues through debugging, performance optimization, and close collaboration with backend developers and QA teams, ensuring high application stability and efficiency across environments.',
      'Collaborated with cross-functional teams to seamlessly integrate Redux, Context API, and UI component libraries, driving scalable architecture, code reusability, and consistent design standards throughout the development lifecycle.'
    ]
  },
  {
    id: 'enlume',
    company: 'Enlume',
    title: 'Associate Software Engineer',
    range: 'Aug 2021 - Nov 2021',
    url: 'https://www.enlume.com/',
    responsibilities: [
      'Designed and implemented application modules with RESTful API integration, executing CRUD operations to enhance user profile management and sign-up workflows, while maintaining alignment with established software architecture and design principles.',
      'Developed dynamic web interfaces using event-driven programming, building custom reusable components to improve scalability, maintainability, and overall UI consistency across platforms.',
      'Integrated third-party SMS APIs and applied Adapter Design Patterns to automate SMS template management for training schedules and user notifications, ensuring seamless and efficient communication between the app and external services.'
    ]
  },
  {
    id: 'eruvaka',
    company: 'Eruvaka',
    title: 'Software Developer',
    range: 'Feb 2021 - Aug 2021',
    url: 'https://www.enlume.com/',
    responsibilities: [
      'Developed RESTful APIs using Node.js and Express.js to enable seamless front-end and back-end integration, supporting efficient data retrieval, manipulation, and real-time updates for dynamic web applications.',
      'Designed and implemented interactive dashboards, pie charts, and data tables using React.js, Ant Design, and Chart.js, enhancing data visualization, navigation, and user engagement through intuitive UI/UX design.'    
    ]
  },
];