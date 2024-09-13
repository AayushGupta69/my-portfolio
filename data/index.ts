export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Medium Clone",
    des: "This is a clone of a popular blogging platform Medium. It is built using modern web technologies and follows a fullstack architechture.",
    img: "/p1.svg",
    iconLists: [
      "/react.svg",
      "/tailwind.svg",
      "/ts.svg",
      "/workers.svg",
      "/prisma.svg",
      "/postgresql.svg",
    ],
    link: "https://github.com/AayushGupta69/medium-clone",
  },
];

export const testimonials = [
  {
    quote:
      "Aayush consistently demonstrated exceptional dedication and efficiency, ensuring all tasks were completed promptly. Aayush is a true team player and brings great value to any project he is involved in.",
    name: "Sadam Hussain",
    profile: "/Sadam Hussain.png",
    title: "M.Tech student at NIT Warangal, Ex-SDE Intern at IIT Bombay",
  },
  {
    quote:
      "Throughout his internship, Aayush has consistently demonstrated exceptional timeliness and efficiency. His keen understanding of task urgency has resulted in swift and reliable deliveries. Aayush possesses a remarkable ability to quickly grasp new feature workflows, allowing him to contribute meaningfully. His cooperative nature and proactive approach have been invaluable assets to our team. Based on his performance, I wholeheartedly recommend Aayush for software development roles. I am confident that he will bring significant value to any position he undertakes, leveraging his technical competence, adaptability, and commitment to excellence.",
    name: "Nishant Wankhede",
    profile: "/Nishant Wankhede.png",
    title: "M.Tech student at IIT Delhi, Ex-SDE Intern at IIT Bombay",
  },
  {
    quote:
      "Aayush was an invaluable member of our team during his twelve-month internship at IIT Bombay, where he successfully developed and maintained the LEAP-PE Tool, a desktop application for post-editing machine-translated documents. He effectively incorporated new features, resolved bugs, and conducted user research. Aayush demonstrated exceptional achievements, showcasing strong team management, problem-solving skills, and the ability to quickly learn new technologies like QT. His technical expertise, commitment to quality, and effective communication skills make him an ideal candidate for future opportunities in software development.",
    name: "Prof. Ganesh Ramakrishnan",
    profile: "/Prof. Ganesh Ramakrishnan.png",
    title:
      "Dept. of Computer Science and Engineering, Indian Institute of Technology Bombay",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern - Multyfi",
    date: "July 2024 to August 2024 · 2 mos",
    desc: "Developed a comprehensive Analytics ecosystem for visualizing the performance of proprietary trading algorithms, optimized Paper Trading System performance, enchanced KYC processes and created internal tools for reconciliation of data using technologies like Next.js, Node.js, Material UI and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern - IIT Bombay",
    date: "July 2023 to July 2024 · 1 yr",
    desc: "Developed and maintained an open-source post-editing tool using the Qt Framework for the Udaan Project, focusing on translation and OCR error correction in Indian languages.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/AayushGupta69",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    url: "https://x.com/AayushGupta69",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/aayush-gupta-works/",
  },
];
