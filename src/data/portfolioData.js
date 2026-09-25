export const profile = {
  name: "Moin Ud Din Shah",
  shortName: "Moin",
  role: "Full-Stack Developer based in Pakistan.",
  badge: "💻 Full-Stack Dev",
  email: "moheenshahtrimzi@gmail.com",
  phone: "+92 343 9597052",
  linkedIn: "https://www.linkedin.com/in/syed-moin-shah-397b50247/",
  intro:
    "Junior Full-Stack Developer with a Computer Science degree and hands-on experience building production-ready web applications using React, Node.js, Express, and relational databases.",
  about:
    "I am Moin Ud Din Shah, a Junior Full-Stack Developer with a Computer Science degree from COMSATS University Islamabad. I have hands-on experience building production-ready web applications with a strong backend focus — REST APIs, RBAC, database design, and system architecture. I translate requirements into scalable, real-world solutions."
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My work", href: "#work" },
  { label: "Contact me", href: "#contact" }
];

export const aboutCards = [
  {
    icon: "💼",
    title: "Experience",
    text: "Self-Employed Full-Stack Developer (2023–Present). Full-Stack Developer at Orixity (Feb 2024 – Mar 2025). Visual Content Annotator & AI Data Quality Evaluator at CrowdGen by Appen."
  },
  {
    icon: "🎓",
    title: "Education",
    text: "BS Computer Science, COMSATS University Islamabad, Abbottabad Campus (2021–2025)."
  },
  {
    icon: "🚀",
    title: "Projects",
    text: "Keystone Care healthcare management system for a UK-based client, plus 10+ client websites and web applications."
  }
];

export const tools = [
  "React.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Vite",
  "Git",
  "REST APIs",
  "Auth0",
  "Socket.io",
  "AWS S3"
];

export const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Responsive and scalable web applications using React, Node.js, and Express.js. Tailored full-stack solutions for client-specific business goals."
  },
  {
    icon: "🗄️",
    title: "Back-End Development",
    description:
      "Efficient back-end systems using Node.js, Express, NestJS, MySQL, and PostgreSQL. REST APIs, authentication, RBAC, and MVC architecture."
  },
  {
    icon: "🎨",
    title: "Frontend UI/UX",
    description:
      "Clean, responsive user interfaces with React.js, Tailwind CSS, and modern JavaScript. Pixel-perfect, accessible designs across devices."
  },
  {
    icon: "🤖",
    title: "AI & QA Integration",
    description:
      "Experience with ML/NLP concepts, AI model training, structured evaluation, and data quality assurance workflows."
  }
];

export const projects = [
  {
    icon: "🏘️",
    accent: "blue",
    tag: "Real Estate · NestJS · React",
    title: "Lemara Commercial",
    description:
      "Web solution for a real estate firm with property listings, client inquiries, role-based dashboards, and a responsive frontend.",
    link: "https://lemara-commercial.vercel.app/"
  },
  {
    icon: "🛡️",
    accent: "indigo",
    tag: "Recruitment · ReactJS · Node.js · Auth0",
    title: "S4 – Security Recruitment App",
    description:
      "Recruitment platform for security jobs with company posts, applicant tracking, interview scheduling, and clearance verification.",
    link: "https://sfour.co.uk/login"
  },
  {
    icon: "🎰",
    accent: "orange",
    tag: "Analytics · React · NestJS · Socket.io",
    title: "4 Rays – Casino Management Tool",
    description:
      "Casino management tool with real-time analytics, user account management, transaction tracking, and Socket.io data updates.",
    link: "https://4rays.vercel.app/"
  },
  {
    icon: "🌿",
    accent: "green",
    tag: "Environment · UK · Full-Stack",
    title: "Biodiversity Consult (UK)",
    description:
      "Platform supporting UK environmental initiatives with biodiversity metrics, ecological value calculations, and conservation management.",
    link: "https://www.biodiversityconsult.co.uk/"
  },
  {
    icon: "☁️",
    accent: "purple",
    tag: "Corporate · UK · Responsive UI",
    title: "Cloudswish Software House (UK)",
    description:
      "Corporate website for Cloudswish highlighting services, client portfolio, testimonials, and a modern responsive UI.",
    link: "https://www.cloudswish.co.uk/"
  },
  {
    icon: "🏥",
    accent: "red",
    tag: "Healthcare · Full-Stack · FYP",
    title: "Keystone Care – Healthcare Management System",
    description:
      "Full-stack healthcare system with Admin, Resident, Doctor, and Staff dashboards, REST APIs, RBAC, and a normalized relational database.",
    link: "https://github.com/Moheen-Shah/FYP",
    linkLabel: "View on GitHub ↗"
  }
];

export const contactLinks = [
  { icon: "📞", label: profile.phone, href: "tel:+923439597052" },
  { icon: "✉️", label: profile.email, href: `mailto:${profile.email}` },
  { icon: "💼", label: "LinkedIn Profile", href: profile.linkedIn }
];
