import { mobile, backend, web, javascript, typescript, html, css, reactjs, angular, tailwind, nodejs, mongodb, git, bootstrap, docker, react, librevoyage,ecommerce,quantummind, cryptohouse, whazzaaap,uniguideai, sql } from "../assets";

export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
  {
    id: "work",
    title: "Email Me",
    href: "mailto:eitanlander@gmail.com",
  },
  {
    id: "contact",
    title: "Whatsapp",
    href: "https://wa.me/+972547305049",
  },
  {
    id: "resume",
    title: "Resume",
    href: "/eitanlander-resume-fullstack-developer.pdf",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Angular",
    icon: angular,
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
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Libre-Voyage",
    project_name: "Fullstack Vacation Website",
    icon: react,
    iconBg: "#383E56",
    date: "Sep 2023",
    points: [
      "Libre-Voyage is a travel and vacation platform that empowers users to explore,",
      "plan, and engage with dream vacations.",
      "allowing users to discover, plan, and interact with their dream vacations..",
      "Whether you're seeking beach getaways, mountain adventures, city exploration,",
    ],
  },
  {
    title: "React Native Developer",
    project_name: "TEST",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    project_name: "TEST",
    icon: react,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    project_name: "TEST",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Libre-Voyage",
    description: "Explore a user-friendly website for easy date and vacation management. Mark favorites, receive personalized recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: librevoyage,
    source_code_link: "https://github.com/EitanLander/Libre-Voyage-Third-Project",
  },
  
  {
    name: "QuantumMind-Ai",
    description: "Unlock the potential of QuantumMind-Ai – Your all-in-one creative hub! Seamlessly generate photos, compose music, produce videos, write code."
,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: quantummind,
    source_code_link: "https://quantummind-ai.vercel.app/",
  },
  {
    name: "CryptoHouse",
    description: "A Web Application for Real-Time Cryptocurrency Information. Live reports of selected cryptocurrencies are displayed in a graph format.    ",
    tags: [
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
    ],
    image: cryptohouse,
    source_code_link: "https://cryptohouse-eitanlander.firebaseapp.com/",
  },
  {
    name: "Whazzaaap",
    description: "WhatsApp-like project! It uses Socket.IO for quick messaging. Send and get messages, connect with friends, pick an avatar, and start chatting in a snap!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: whazzaaap,
    source_code_link: "https://github.com/EitanLander/Whazzaaap",
  },
  {
    name: "UniGuideAI",
    description: "UniGuideAI is your go-to companion for navigating university studies. Personalized learning paths and make informed decisions about what to learn.",
    tags: [
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Chat-GPT",
        color: "blue-text-gradient",
      },
      {
        name: "Fetch API",
        color: "pink-text-gradient",
      },
    ],
    image: uniguideai,
    source_code_link: "https://github.com/EitanLander/UniGuideAI",
  },
{
    name: "E-Commerce Shop",
    description: "Real - Working E-Commerce Shop, Add to cart,Pay with ease with credit card. Buying experience from selection to checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/EitanLander/E-Commerce-Shop",
  },

];

export { services, technologies, experiences, testimonials, projects };
