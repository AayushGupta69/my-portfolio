export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on expanding my knowledge of JavaScript, its libraries, and frameworks, as I continue to enhance my web development skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medium Clone",
    des: "This is a clone of a popular blogging platform Medium. It is built using modern web technologies and follows a fullstack architechture.",
    img: "/p1.png",
    className: "bottom-1",
    iconLists: [
      "/react.svg",
      "/tailwind.svg",
      "/ts.svg",
      "/workers.svg",
      "/prisma.svg",
      "/postgresql.svg",
    ],
    text: "Check Github Link",
    link: "https://github.com/AayushGupta69/medium-clone",
  },
  {
    id: 2,
    title: "LiveDocs",
    des: "Google Docs clone built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS.",
    img: "/p2.png",
    className: "-bottom-16",
    iconLists: [
      "/react.svg",
      "/next.svg",
      "/tailwind.svg",
      "/ts.svg",
      "/liveblocks.webp",
      "/c.svg",
    ],
    text: "Check Live Site",
    link: "https://live-docs-aayushgupta69.vercel.app/",
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
  {
    quote:
      "I highly recommend Aayush for his exceptional technical expertise and innovative approach to software development. He has consistently demonstrated the ability to design and implement scalable, efficient, and user-friendly solutions, resulting in significant improvements in performance and productivity. Aayush's strong problem-solving skills, attention to detail, and commitment to excellence make him a valuable asset to any organization. He is a collaborative team player with excellent communication skills, able to effectively translate complex technical concepts into actionable insights. I strongly endorse Aayush for any opportunity, and I am confident he will continue to drive innovation and deliver outstanding results.",
    name: "Sagar Vats",
    profile: "/Sagar Vats.png",
    title:
      "CTO Multyfi | Ex- SDE Amazon | Won 8 National Hackathons | Raised Funds from NIC | Algo Trader",
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
