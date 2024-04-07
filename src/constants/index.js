import {
  logo,
  star,
  badge,
  cocktail,
  heart,
  blender,
  css,
  git,
  html,
  js,
  mongo,
  node,
  react,
  tailwind,
  three,
  meta,
  starbucks,
  tesla,
  shopify
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Technology",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const ballLogo = [
  {
    name: "logo",
    icon: logo,
  },
]

const services = [
  {
    title: "Web Developer",
    icon: star,
  },
  {
    title: "Content Creator",
    icon: badge,
  },
  {
    title: "Bartender",
    icon: cocktail,
  },
  {
    title: "People Person",
    icon: heart,
  },
];

const badges = [
  {
    name: "5",
    icon: blender,
  },
  {
    name: "10",
    icon: css,
  },
  {
    name: "20",
    icon: git,
  },
  {
    name: "30",
    icon: html,
  },
  {
    name: "Happy Hour",
    icon: js,
  },
  {
    name: "Night Owl",
    icon: mongo,
  },
  {
    name: "Brunch",
    icon: node,
  },
  {
    name: "Drink of Choice",
    icon: react,
  },
  {
    name: "Regular",
    icon: tailwind,
  },
  {
    name: "Whiskey",
    icon: three,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
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
    company_name: "Shopify",
    icon: shopify,
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
    company_name: "Meta",
    icon: meta,
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

export { ballLogo, services, badges, experiences, testimonials };