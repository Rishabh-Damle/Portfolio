import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `A creative developer who loves building beautiful and functional projects. I combine technical skills with artistic flair to create unique digital experiences.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "12/09/2025 - 01/02/2026",
    role: "Junior Software Engineer",
    company: "Cravita Technologies India Private Limited, Pune, Maharashtra",
    description: `
Selected for a 6-month structured internship program with training and live project development.
Currently working on building and optimizing modern web applications that focus on performance and user experience. Involved in designing RESTful APIs for smooth and secure data flow while collaborating with teams to deliver reliable and high-quality software solutions.

`,
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Alzheimer – Your Second Brain",
    image: project1,
    description:
      "Alzheimer is a Second Brain application that lets you collect and organize content from multiple sources — such as Twitter, YouTube, and Google Docs — into a centralized knowledge hub, Not only this even you can share your brain with others with just one link and a simple click. ",
    githubLink: "https://github.com/Rishabh-Damle/Alzheimer",
    technologies: [
      "Tailwind",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    title: "Paisa-Pe",
    image: project2,
    description:
      "Paisa-Pe is a basic digital wallet and peer-to-peer payment application inspired by platforms like Paytm. It allows users to securely register, manage their balance, and send money to other users using an initial dummy balance. This project focuses on understanding real-world payment flows, authentication, and transaction handling using a modern full-stack setup.",
    githubLink: "https://github.com/Rishabh-Damle/Paisa-Pe",
    technologies: [
      "Tailwind",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    title: "Chat-Room",
    image: project3,
    description:
      "Chat-Room is a real-time messaging application built using WebSockets to enable seamless, live communication between users. It allows users to connect instantly, exchange messages without page refresh, and experience low-latency conversations. This project focuses on understanding real-time event handling, bidirectional communication, and managing multiple concurrent user connections using a modern full-stack architecture.",
    githubLink: "https://github.com/Rishabh-Damle/Chat-Room",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSocket",
    ],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "8390949242",
  email: "dwrushabh@gmail.com",
};
