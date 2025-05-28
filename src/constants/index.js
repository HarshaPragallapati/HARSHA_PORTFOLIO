import {
  srkr,
  portfolio,
  aditya,
  ISTE,
  eduskills,
  leetcode,
  medic,
  codechef,
  nipuna,
  employee
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiC,
  SiSpring,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiIntellijidea,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiHibernate,
  SiFlask,
  SiLeetcode,
  SiThymeleaf,
  SiSpringsecurity,
  SiCodechef
} from "react-icons/si";


import { DiCss3, DiJava, DiMsqlServer } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1z7nuP8YkmYl1w7ZSp3_hwg3HXEch8Aai/view?usp=drive_link";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/harsha-pragallapati-16a61b324";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: srkr,
    title: "SRKR Engineering College, Bhimavaram",
    degree: "B.Tech in CSE",
    duration: "November 2022 - May 2026",
    content1: "Studied foundational software engineering subjects including DSA, DBMS, Operating Systems etc.",
    content2: "CGPA: 9.19",
  },
  {
    id: "education-2",
    icon: aditya,
    title: "Aditya Junior College, Palakollu",
    degree: "Intermediate",
    duration: "September 2020 - August 2022",
    content1: "Graduated with a percentage of 93.2 ",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: leetcode,
    event: "LeetCode | 100+ problems solved",
    position: "",
    content1: "Developed strong algorithmic thinking through regular coding challenges.",
    content2: "Explored topics including trees, backtracking, searching, recursion, and sliding window etc.",
    content3: "Improved efficiency and accuracy in solving complex problems.",
    project: "https://www.leetcode.com/harsha_1824",
  },
  {
    id: "a-2",
    icon: codechef,
    event: "CodeChef",
    position: "",
    content1: "Active competitive programmer on CodeChef and a regular participant in weekly contests.",
    content3: "Solved 50+ problems across diverse DSA topics.",
    project: "https://www.codechef.com/users/harsha1824",
  }
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      
      {
        id: "f-2",
        icon: SiSpring,
        name: "Spring",
      },
      
      {
        id: "f-3",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "f-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-5",
        icon: SiHibernate,
        name: "Hibernate",
      },
      {
        id: "f-6",
        icon: SiThymeleaf,
        name: "Thymeleaf",
      },
      {
        id: "f-7",
        icon: SiSpringsecurity,
        name: "Spring Security",
      },
      {
        id: "f-8",
        icon: SiBootstrap,
        name: "Bootstrap",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiIntellijidea,
        name: "Intellij IDEA",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      }
    ],
  },
];

export const experiences = [
  {
    organisation: "SRKR ISTE",
    logo: ISTE,
    positions: [
      {
        title: "Web Lead",
        duration: "Sep 2024 - Present",
        content: [
          {
            text: "Led a team of 6 peer developers while also overlooking multiple modules.",
            link: "",
          },
          {
            text: "Developed an interactive website for Nipuna, AP's premier techno-management symposium with over 17 events.",
            link:""
          },
          {
            text: "Integrated a responsive UI, event registration system, and backend functionalities using Node.js.",
            link: "",
          },
          {
            text: "Deployment & Version Control: Managed GitHub repositories, and deployed applications on Hostinger, ensuring seamless accessibility and performance.",
            link: "",
          },
        ],
      }
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Nipuna25",
    github: "https://github.com/HarshaPragallapati/Nipuna25",
    link: "",
    image: nipuna,
    content:
      "Developed Nipuna's dynamic website with event registration and backend features, ensuring a seamless user experience and optimized performance during the fest.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB"
      }
    ],
  },
  
  {
    id: "project-2",
    title: "Employee Management",
    github: "https://github.com/HarshaPragallapati/RESTful-Employee-Management-API",
    link: "",
    image: employee,
    content:
      "Built a secure RESTful API with Spring Boot for employee management, integrating role-based access control and MySQL. Implemented best practices for security, exception handling, and API design.",
    stack: [
      {
        id: "icon-1",
        icon: SiSpringboot,
        name: "SpringBoot"
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "My SQL"
        
      },
      {
        id: "icon-3",
        icon: SiPostman,
        name: "Postman"
      },
      {
        id: "icon-4",
        icon: SiSpringsecurity,
        name: "Spring Security"
      }
    ],
  },
  {
    id: "project-3",
    title: "Portfolio",
    github: "https://github.com/HarshaPragallapati/HARSHA_PORTFOLIO",
    link: "https://harsha-pragallapati.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
  {
    id: "project-4",
    title: "Insurance Price Prediction",
    github: "https://github.com/HarshaPragallapati/MedicalInsurancePrediction",
    link: "",
    image: medic,
    content:
      "Developed a web app for medical insurance price prediction with user registration, login, and an intuitive interface for predictions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiPhp,
        name: "PHP"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      }
    ],
  },
  
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];


export const extraCurricular = [
  {
    id: 1,
    organisation: "SRKR ISTE",
    title: "Executive Body Member",
    duration: "August 2024 - Present",
    content: [
      {
        text: "Actively contributing to the professional growth and collaboration among ISTE members by organizing various interactive events and workshops.",
        link: "https://www.instagram.com/srkriste/p/DAU0yWCydB7/",
      },
      {
        text: "Co-organized Nipuna, AP’s largest techno-management fest, successfully managing 17+ events, ensuring seamless coordination, team collaboration, event planning, and impactful student engagement under ISTE leadership.",
        link: "https://www.instagram.com/nipuna2k25/p/DHDnW0ZNjEg/",
      },
    ],
    logo: ISTE,
  },
  
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/harsha-pragallapati-16a61b324",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/HarshaPragallapati",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:harshapragallapati2005@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/harsha_pragallapati",
  },
  {
    id: "social-media-5",
    icon: SiLeetcode,
    link: "https://www.leetcode.com/harsha_1824",
  }
];

// professional summary
export const aboutMe = {
    name: "Harsha Pragallapati",
    githubUsername: 'HarshaPragallapati',
    tagLine: "Java Full Stack Developer",
    intro: "Java Full Stack Developer from India who is either busy improving his craft or pondering over the next big idea."
}



