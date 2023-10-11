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
  springboot,
  java,
  postman,
  meta,
  starbucks,
  tesla,
  shopify,
  acmatek,
  capgemini,
  carrent,
  jobit,
  tripguide,
  threejs,
  eclipse,
  swagger,
  python,
  intellij,
  azure,
  mysql,
  pgsql,
  ntfy
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Spring Boot Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Microsoft Azure",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "swagger",
    icon: swagger,
  },
  {
    name: "intellij",
    icon: intellij,
  },
  {
    name: "eclipse",
    icon: eclipse,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "pgsql",
    icon: pgsql,
  },
  {
    name: "azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Acmatek Inc",
    icon: acmatek,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using Spring Boot and other related technologies.",
      "Collaborated with clients to understand their business requirements and translate them into technical solutions, ensuring client satisfaction and project success.",
      "Collaborated with cross-functional teams to develop and maintain robust backend solutions using Java, Spring, and Hibernate frameworks.",
      "Conducted thorough testing and debugging to identify and resolve issues, ensuring the delivery of high-quality code on time.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "August 2021 - September 2023",
    points: [
      "Developing and maintaining web applications using Spring Boot and other related technologies.",
      "Designed and implemented RESTful APIs for seamless integration with frontend systems, ensuring efficient data exchange and optimal performance.",
      "Developed and optimized database structures using SQL, ensuring data integrity, scalability, and efficient querying.",
      "Kept up to date with industry trends and advancements in backend technologies, applying them to enhance the development process and deliver innovative solutions.",
      "Worked in Agile development environments, actively participating in scrum meetings, sprint planning, and providing accurate estimations for project timelines.",
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

const projects = [
  {
    name: "Ntfy Java",
    description:
      "This is a Java package for publishing/receiving messages from a ntfy server. ntfy (pronounce: notify) is a simple HTTP-based pub-sub notification service. ntfy-java is a Java wrapper for this service.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "ntfy",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
    ],
    image: ntfy,
    source_code_link: "https://github.com/MaheshBabu11/ntfy-java",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
