export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Vortexly - Weather Dashboard",
    description:
      "A responsive Weather Dashboard built with React.js, Vite, and TailwindCSS for a sleek and modern UI. It fetches real-time weather data from the OpenWeather API, including temperature, conditions, and forecasts. Designed with a mobile-first approach, it delivers fast performance and an intuitive user experience.",
    tags: ["React", "Tailwind CSS", "Openweather API", "Styled Components"],
    image:
      "https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://vortexly.netlify.app/",
    github: "https://github.com/amar-1999/weatherdashboard",
    featured: true,
  },
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    image:
      "https://images.pexels.com/photos/8097011/pexels-photo-8097011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://halcyon-theme.netlify.com/",
    github: "https://github.com/bchiang7/halcyon-site",
    featured: true,
  },
  {
    title: "Damarakeswar Guddanti v4",
    description:
      "The fourth iteration of my personal website built with Gatsby and hosted on Netlify. The design inspiration came from my love for minimalism, clean lines, subtle animations, and efficient page performance.",
    tags: ["Gatsby", "React", "GraphQL", "Netlify"],
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://v4.brittanychiang.com/",
    github: "https://github.com/bchiang7/v4",
    featured: true,
  },
  {
    title: "Environment Variables in React and Node.js: The Complete Guide",
    description:
      "Learn how to master environment variables in React and Node.js with this complete, practical guide.",
    tags: ["React", "Node.js", "Express"],
    image:
      "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://medium.com/@damarakeswar/environment-variables-in-react-and-node-js-the-complete-guide-e2f475be35cc",
    github: "",
    featured: false,
  },
  {
    title:
      "The Real Story of Redux Toolkit: Still Relevant or Overkill in 2025?",
    description:
      "Redux Toolkit: the full story — Is it essential or excessive in today’s React landscapes?",
    tags: ["React", "Node.js", "Express"],
    image:
      "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://medium.com/@damarakeswar/the-real-story-of-redux-toolkit-still-relevant-or-overkill-in-2025-a350037415da",
    github: "",
    featured: false,
  },
  {
    title: "Understanding CORS: What, Why & How?",
    description:
      "A clear walkthrough of CORS: understanding the problem, its purpose, and how to solve it.",
    tags: ["React", "Node.js", "Express"],
    image:
      "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://medium.com/@damarakeswar/understanding-cors-what-why-how-56516bbb1391",
    github: "",
    featured: false,
  },
  {
    title:
      "The Ultimate Guide to useEffect Dependencies (Without Losing Your Mind)",
    description:
      "Dive deep into useEffect dependencies — how to manage them without pulling your hair out.",
    tags: ["React", "Node.js", "Express"],
    image:
      "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://medium.com/@damarakeswar/the-ultimate-guide-to-useeffect-dependencies-without-losing-your-mind-fb52fd8162f6",
    github: "",
    featured: false,
  },
];
