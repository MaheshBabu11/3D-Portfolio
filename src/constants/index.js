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
  ntfy,
  springshell,
  vika,
  rcds,
  sesphr,
  excel,
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
      "He is very passionate in the works that he is involved with. I really feel happy to have him in my network as he is really supportive and is a role model for everyone in this network.",
    name: "Hari Priya",
    designation: "Program Manager",
    company: "TechTaliya Informatics (P) Ltd.",
    image: "./src/assets/reference/priya.jpg",
  },
  {
    testimonial:
      "He is a detail oriented, goal oriented, ambitious and powerful co-worker, his knowledge is vast and thorough. Whenever I had a problem, there has never been a time he has left me without a solution.",
    name: "Advaith Narayan",
    designation: "Cyber Security Engineer",
    company: "UST",
    image: "./src/assets/reference/advaith.jpg",
  },
  {
    testimonial:
      "His drive to achieve perfection in his work has been a motivating factor for me throughout our journey in Capgemini.",
    name: "Parakh Chowdhary",
    designation: "Software Engineer",
    company: "Capgemini",
    image: "./src/assets/reference/parakh.jpg",
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
    name: "SpringShell",
    description:
      "A CLI application built using the spring shell. This application demonstrate how the spring ecosystem can be used to built CLI tools for a qide range of applications like Internal tools, custom installation etc.",
    tags: [
      {
        name: "SpringShell",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: springshell,
    source_code_link: "https://github.com/",
  },
  {
    name: "VIKA",
    description:
      "This is a virtual assistant that can detect depression using neural networks and help the user to overcome depression and stress. It is build using tensorflow, keras and nltk as the core libraries. ",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "sentiment_analysis",
        color: "pink-text-gradient",
      },
    ],
    image: vika,
    source_code_link: "https://github.com/MaheshBabu11/VIKA",
  },
  {
    name: "Railway Track Crack Detection System",
    description:
      "This is an application that is used to identify cracks on railways tracks using images/videos. It uses CNN to identify the cracks and then sends a warning message using twilio to the authorities.Its powered by tensorflow and flask.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: rcds,
    source_code_link: "https://github.com/MaheshBabu11/Railway-Crack-Detection-System",
  },
  {
    name: "Secure Health Record Management System",
    description:
      "This is an encrypted health record management system built using Flask and Mysql. It uses b64decode and b64encode to encrypt and decrypt the data.The encrypted data is stored in the database and can be accessed only by the user and the doctor.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: sesphr,
    source_code_link: "https://github.com/MaheshBabu11/Sesphr",
  },
  {
    name: "Excel2DataMap - Excel to HashMap Converter",
    description:
      "This is a java package that is used to convert Excel files from various formats like .xls,xls,csv to datamaps so that they can be directly used to insert data into database tables.It can be used to simplify the process of inserting data into database tables.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "maven",
        color: "green-text-gradient",
      },
      {
        name: "package",
        color: "pink-text-gradient",
      },
    ],
    image: excel,
    source_code_link: "https://github.com/MaheshBabu11/Excel2DataMap",
  },
];


export { services, technologies, experiences, testimonials, projects};
