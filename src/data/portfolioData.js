// ============================================================
// portfolioData.js — Centralized configuration for Abdullah's Portfolio
// ============================================================

export const personalInfo = {
  name: "Abdullah Jamil Khan",
  firstName: "Abdullah",
  brandName: "Abdullah",
  title: "Cybersecurity & IT Enthusiast",
  location: "Islamabad, Pakistan",
  phone: "", // No phone number provided
  emails: {
    primary: "abdullajamil971@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated Computer Science student at the International Islamic University Islamabad with a strong passion for cybersecurity and technology. Known for problem-solving, teamwork, and a continuous desire to learn and apply technical skills.",
  resumeUrl: "/Abdullah_Resume.docx", // I will use docx since pdf is missing
};

export const socialLinks = {
  github: "https://github.com/Hi-Five-Ghost",
  linkedin: "https://www.linkedin.com/in/abdullah-jamil-b01239388/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Abdullah",
  titleHighlight: "Cybersecurity Enthusiast",
  subtitle:
    "I'm a Computer Science student passionate about IT, security, and solving complex problems.",
  ctaPrimary: { text: "View My Skills", href: "#skills" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:abdullajamil971@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Abdullah,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Abdullah_Resume.docx" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abdullah Jamil Khan</span>, an aspiring cybersecurity professional based in Islamabad, Pakistan, dedicated to learning and applying technical skills to contribute to organizational security.`,
  techStack: ["C++", "Python", "Cybersecurity", "PC Troubleshooting"],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "How I tackle problems and learn new technologies",
  description:
    "I follow a structured, proactive approach to IT and problem-solving.",
  cards: [
    {
      number: "01",
      title: "Analyze",
      text: "Understanding the core issue and technical constraints before diving into solutions.",
    },
    {
      number: "02",
      title: "Troubleshoot",
      text: "Applying PC troubleshooting and hardware fundamentals to diagnose and resolve issues.",
    },
    {
      number: "03",
      title: "Learn & Adapt",
      text: "Quickly picking up new tools, languages, and cybersecurity concepts.",
    },
    {
      number: "04",
      title: "Communicate",
      text: "Working effectively in teams and communicating complex technical ideas clearly.",
    },
  ],
  endText: "Ready for new challenges!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 80 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "IT & Hardware",
      skills: [
        { name: "Windows Installation", level: 90 },
        { name: "Computer Hardware", level: 85 },
        { name: "PC Troubleshooting", level: 90 },
        { name: "Technical Support", level: 85 }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Microsoft Office", level: 95 },
        { name: "Prompt Engineering", level: 80 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Cybersecurity Basics", level: 80 }
      ]
    }
  ]
};

export const projects = [
  {
    id: "portfolio",
    number: "01",
    badge: "🚀 First Project",
    title: "Personal Portfolio",
    description:
      "A premium, cinematic personal portfolio built with React and Tailwind CSS. Features dynamic video backgrounds, glassmorphism UI, smooth scroll animations using AOS, and fully responsive design.",
    techTags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "AOS Animations"
    ],
    links: {
      github: "https://github.com/Hi-Five-Ghost",
      demo: null,
    },
    isFlagship: true,
  }
];

export const internshipsList = [
  {
    organization: "Deloitte (Forage)",
    role: "Cyber Job Simulation",
    duration: "2026",
    skills: ["Cybersecurity", "Risk Assessment", "Threat Modeling", "Security Policies"],
    tech: ["Deloitte Tools", "Security Frameworks"]
  }
];

export const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "International Islamic University Islamabad",
    duration: "In Progress",
    status: "Undergraduate",
    description: "Focusing on core computer science subjects, programming, and cybersecurity fundamentals. Active participant in the Computer Club."
  },
  {
    degree: "Intermediate (FBISE)",
    institution: "Pakistan Urdu School",
    duration: "Completed",
    status: "Grade A",
    description: "Completed higher secondary education with a focus on science and mathematics, achieving an 'A' grade."
  }
];

export const leadershipList = [
  {
    title: "Computer Club Member",
    description: "Active member, participating in various technical events and discussions.",
    role: "Member",
    badge: "Club"
  },
  {
    title: "Winning English Debate Team",
    description: "Participated and won in English debates, demonstrating strong communication and critical thinking skills.",
    role: "Team Member",
    badge: "Public Speaking"
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex issues into logical solutions." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating effectively with peers and contributing to group success." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions, proven through debate success." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn new skills and adapt to changing technological landscapes." }
];

export const certificates = {
  featured: [
    {
      name: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM Skills Network (Coursera)",
      icon: "🧠",
    },
    {
      name: "Cyber Job Simulation",
      issuer: "Deloitte (Forage)",
      icon: "🛡️",
    }
  ],
  viewAllUrl: "/Certificates.pdf",
};

export const footerContent = {
  taglines: [
    "Cybersecurity Enthusiast",
    "IT Support & Problem Solving",
    "Computer Science Student",
  ],
  credential: "BS Computer Science (In Progress)",
  copyright: `© ${new Date().getFullYear()} Abdullah Jamil Khan`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
