import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  panaseer,
  anime,
  ecomm,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Panaseer",
    icon: panaseer,
    iconBg: "#383E56",
    date: "April 2021 - Present",
    points: [
      "Improved response speed to customer requests by an average of 30% and tackled long-standing unresolved tasks.",

      "Refactored and optimized thousands of lines of legacy code for better readability, understandability, and performance.",
      
      "Resolved hundreds of bugs, including critical application crashing bugs.",
      
      "I contributed to achieving 100% test coverage by creating unit, integration, and end-to-end tests, as well as supporting the team.",
      
      "Created and updated documentation to facilitate developer onboarding, development environment setup, and software tool usage.",
    ],
  }
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Anime Picker",
    description:
      "Anime Picker Client is a web application built with React.js that allows users to browse, search, and filter through a collection of anime shows.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node/Express",
        color: "pink-text-gradient",
      },
    ],
    image: anime,
    source_code_link: "https://github.com/ItamarTati/anime-picker-client",
    live_link: "https://anime-picker.vercel.app/",
    youtube_video: "https://www.youtube.com/watch?v=kzVyWzea0as"
  },
  {
    name: "Angular E-Commerce",
    description:
      "An Angular e-commerce web app, with shopping cart, checkout, and payment integration for online transactions using Stripe and Auth0.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Auth0",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/ItamarTati/Angular-E-Commerce-Store",
    live_link: "https://angular-e-commerce-store.vercel.app/",
    youtube_video: "https://www.youtube.com/watch?v=BXI9bAYHn30"
  }
];

export { services, technologies, experiences, testimonials, projects };
