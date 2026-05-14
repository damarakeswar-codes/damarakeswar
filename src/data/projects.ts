import VortexlyImage from '../data/vortexly.png';
import BooktheshowImage from '../data/booktheshow.png';
import PomodoroImage from '../data/pomodoro.png';

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
      "A responsive Weather Dashboard built with React.js, Vite, and TailwindCSS for a sleek and modern UI. It fetches real-time weather data from the Weather API, including temperature, conditions, and forecasts. Designed with a mobile-first approach, it delivers fast performance and an intuitive user experience.",
    tags: ["React", "Tailwind CSS", "Weather API", "Styled Components"],
    image: VortexlyImage,
    link: "https://vortexly-v1.netlify.app/",
    github: "https://github.com/damarakeswar-codes/vortexly",
    featured: true,
  },
  {
    title: "Book The Show",
    description: "A high-performance event booking application with real-time seat availability, secure email authentication, and integrated Razorpay payments. Designed with a mobile-first approach using Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Firebase Console", "Razorpay"],
    image: BooktheshowImage,
    link: "https://booktheshow-bts.netlify.app/",
    github: "https://github.com/damarakeswar-codes/book-the-show",
    featured: true,
  },
  {
    title:
      "The Ultimate Guide to useEffect Dependencies (Without Losing Your Mind)",
    description:
      "Dive deep into useEffect dependencies — how to manage them without pulling your hair out.",
    tags: ["React", "Node.js", "Express"],
    image:"https://miro.medium.com/1*ys1l9Q6WVW5hkGOtIYc7SQ.png",
    link: "https://medium.com/@damarakeswar/the-ultimate-guide-to-useeffect-dependencies-without-losing-your-mind-fb52fd8162f6",
    github: "",
    featured: true,
  },
  {
    title: "PoMotive",
    description:
      "A high-performance productivity timer built with a focus on sleek UI and seamless user experience. It features customizable work/break intervals and persistent state management, utilizing Styled Components for dynamic theming and Tailwind CSS for rapid, responsive layout construction.",
    tags: ["React", "Tailwind CSS", "Styled Components"],
    image: PomodoroImage,
    link: "https://pomotive.netlify.app/",
    github: "https://github.com/damarakeswar-codes/pomodoro",
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
    "title": "Civic Pulse",
    "description": "A dynamic, high-performance news platform delivering real-time civic updates and community stories. Featuring a mobile-first design and elegant motion transitions, it provides a seamless, interactive reading experience for the socially conscious citizen.",
    "tags": [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design"
    ],
    "image": "https://images.pexels.com/photos/8097011/pexels-photo-8097011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "link": "https://civic-pulse-v1.netlify.app/",
    "github": "https://github.com/damarakeswar-codes/civic-pulse",
    "featured": false
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
      "Why Conditional Probability Is the Secret to Smarter Decisions in Life",
    description:
      "Conditional probability is the key to making better decisions in life. Learn how to use it to your advantage.",
    tags: ["Probability", "Mathematics"],
    image:
      "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://damarakeswar.medium.com/why-conditional-probability-is-the-secret-to-smarter-decisions-in-life-9126730281ca",
    github: "",
    featured: false,
  },
  {
    "title": "What is Web Server - Working & Architecture",
    "description": "Explore the fundamental concepts of web servers, covering both hardware and software components. This guide explains how they process HTTP requests, manage data delivery, and the architecture powering modern websites.",
    "tags": ["Web Server", "HTTP Protocol", "Server Architecture", "Backend Development"],
    "image": "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "link": "https://www.geeksforgeeks.org/websites-apps/what-is-a-web-server-working-and-architecture/",
    "github": "",
    "featured": false
  },
  {
    title: "JavaScript Program to put an Image file in a JSON Object",
    description: "Learn how to convert image files into Base64 strings using the FileReader API to efficiently store, transport, and embed image data directly within JSON objects for web applications.",
    tags: ["JavaScript", "Base64", "JSON", "FileReader"],
    image: "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.geeksforgeeks.org/javascript/javascript-program-to-put-an-image-file-in-a-json-object/",
    github: "",
    featured: false,
  },
  {
    title: "Notium",
    description: "A streamlined, collaborative note-taking application designed for seamless organization. Features a minimalist interface with real-time syncing to help users capture thoughts, manage tasks, and boost daily productivity efficiently.",
    tags: ["Productivity", "React", "Note-taking", "Open-source"],
    image:
      "https://images.pexels.com/photos/8097011/pexels-photo-8097011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://notium-v1.netlify.app/",
    github: "https://github.com/damarakeswar-codes/notium",
    featured: false,
  },
  {
    title: "Exchangely",
    description: "A sleek, real-time currency converter providing instant exchange rate calculations. Built with a focus on accuracy and responsive design to ensure seamless financial tracking across all modern devices.",
    tags: ["React", "Tailwind CSS", "ExchangeRate-API"],
    image:
      "https://images.pexels.com/photos/8097011/pexels-photo-8097011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://exchangely-web.netlify.app/",
    github: "https://github.com/damarakeswar-codes/exchangely",
    featured: false,
  },
  {
    title: "Oven Diaries",
    description: "A digital storefront for a premium bakery, showcasing artisanal cakes, fresh pastries, and handcrafted treats for every celebration.",
    tags: ["Bakery", "Cake Shop", "Static Site", "Food Industry"],
    image:
      "https://images.pexels.com/photos/8097011/pexels-photo-8097011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://ovendiaries.netlify.app/",
    github: "https://github.com/Oven-Diaries/oven-diaries",
    featured: false,
  },
];
