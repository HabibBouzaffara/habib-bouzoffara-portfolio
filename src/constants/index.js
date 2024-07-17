import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  portfolio,
  weatherapp,
  mealsapp,
  threejs,
  countopia,
  gamma,
  ieee,
  ras,
  flutterPhotoroom,
  flask,
  expressjs,
  certificate,
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
    id: "Projects",
    title: "Projects",
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Animation Artist",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "flutter",
    icon: flutterPhotoroom,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git/Github",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "End of studies Project",
    company_name: "Elite Council Consulting",
    icon: countopia,
    iconBg: "#383E56",
    date: "February 2024 - May 2024",
    points: [
      "Developing a solution for intelligent automation and analysis of financial data.",
      "Developing a platform to automate accounting tasks using MERN stack and Flask micro-framework.",
      "Integrate a system for automatic import and cleaning of invoices, accompanied by the generation of financial reports and statistics, as well as an intelligent assistance system.",
    ],
    source_code_link: "github.com/HabibBouzaffara/Countopia",
  },
  {
    title: "Summer Internship",
    company_name: "Gamma Lean Engineering",
    icon: gamma,
    iconBg: "#E6DEDD",
    date: "Juin 2022 - July 2022",
    points: [
      "Developed a static website for Gamma company as one of my first developer projects, utilizing HTML, CSS, and basic JavaScript to create a responsive and visually appealing online presence.",
      "Managed the company's social media accounts, creating engaging content including my first video using After Effects and designing posts with Photoshop and Illustrator, enhancing my skills in digital content creation and marketing.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    source_code_link: "github.com/HabibBouzaffara/page-web-Gamma",
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const responsabilities = [
  {
    title: "Student Branch Vice President",
    company_name: "IEEE ISIMa Student Branch",
    icon: ieee,
    iconBg: "#FFFCFB",
    date: "November 2022 - December 2023",
    points: [
      "For a year, I served as Vice President of our school's IEEE student branch. This role put me in charge of 34 officers and 180 members. It was a great chance to develop important soft skills. I learned how to lead a big team, organize events, and communicate effectively. I got better at solving problems, managing my time, and speaking in public. This experience taught me a lot about working with different people and guiding a group toward common goals. It helped me grow as a leader and team player in the tech world.",
    ],
  },
  {
    title: "RAS Chapter Vice President",
    company_name: "ISIMa, IEEE RAS Chapter",
    icon: ras,
    iconBg: "#FFFCFB",
    date: "November 2021 - December 2022",
    points: [
      "As vice president of the IEEE Robotics and Automation Society (RAS) chapter, I had my first taste of professional leadership.",
      "This role was a big step in my career journey. I was in charge of organizing various events and managing a team of 4 officers and 25 members.",
      "I improved my ability to communicate clearly, work well in a team, and solve problems.",
      "Planning and running events taught me how to manage time and resources effectively. This experience helped me understand what it takes to lead in a professional setting and gave me confidence in my abilities.",
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
    name: "3D Interactive Portfolio",
    description:
      "By integrating 3D elements, I crafted a unique and visually engaging way to showcase my skills and projects, pushing the boundaries of traditional web design portfolios.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/HabibBouzaffara/HabibBouzaffara.github.io",
  },
  {
    name: "Weather App",
    description:
      "Developed a weather app leveraging API integration to spot user location, delivering real-time weather reports, hourly forecasts and comprehensive meteorological data.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/HabibBouzaffara/weather_app",
  },
  {
    name: "Meal App",
    description:
      "Developed an animated app that enables users to effortlessly filter and select meals & recipes based on their dietary preferences: vegan, gluten-free, and lactose-free options.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mealsapp,
    source_code_link: "https://github.com/HabibBouzaffara/MealsApp",
  },
];

const certifications = {
  title: "Certificates",
  name: "IEEE volunteering certifications",
  link: "https://drive.google.com/drive/folders/1m4sPhahY62dgXc08_FkQ47nk8XlYbNMW",
  image: certificate,
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  responsabilities,
  certifications,
};
