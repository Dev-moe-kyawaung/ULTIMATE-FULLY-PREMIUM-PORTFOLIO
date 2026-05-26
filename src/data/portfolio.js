const portfolioData = {
  profile: {
    name: "Moe Kyaw Aung",
    title: "Full-Stack Developer & UI Engineer",
    bio: "I build high-performance web applications with a focus on clean architecture, premium UI, and developer experience. Specializing in React, Next.js, and modern full-stack solutions.",
    email: "moekyawaung@example.com",
    github: "https://github.com/Dev-moe-kyawaung",
    location: "Myanmar",
    availability: "Available for Freelance & Full-Time",
    resume: "/resume.pdf",
  },

  stats: [
    { label: "Projects Shipped", value: "20+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Technologies", value: "12+" },
  ],

  skillGroups: [
    {
      category: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML & CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Edge Functions"],
    },
    {
      category: "Tooling",
      skills: ["GitHub Actions", "Vercel", "Figma", "Git", "Docker"],
    },
  ],

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "GitHub Actions",
    "Figma",
    "Vercel",
    "REST APIs",
    "Git",
  ],

  timeline: [
    {
      year: "2024",
      title: "Senior Full-Stack Engineer",
      company: "Freelance",
      description: "Building premium web applications for clients worldwide using Next.js, Supabase, and modern tooling.",
    },
    {
      year: "2023",
      title: "Full-Stack Developer",
      company: "Tech Startup",
      description: "Led frontend architecture for a SaaS platform serving 10K+ users. Migrated legacy codebase to Next.js App Router.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Delivered responsive, accessible web interfaces for e-commerce and marketing clients across Southeast Asia.",
    },
    {
      year: "2021",
      title: "Self-Taught Developer",
      company: "Independent",
      description: "Began the journey into web development, mastering HTML, CSS, JavaScript, and React fundamentals.",
    },
  ],

  projects: [
    {
      slug: "premium-nextjs-portfolio",
      title: "Premium Next.js Portfolio",
      excerpt:
        "A high-fidelity developer portfolio built with Next.js 14, Tailwind CSS, and real-time GitHub stats integration. Features glassmorphism design and smooth animations.",
      description:
        "This portfolio template showcases modern web development best practices with a focus on visual excellence. Built with the App Router in Next.js 14, it integrates live GitHub stats, an animated hero section, and a contact form powered by Formspree. The design uses glassmorphism effects, subtle particle animations, and a carefully crafted dark color scheme with cyan accents.",
      technologies: ["Next.js", "Tailwind CSS", "GitHub API", "Formspree"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
      github: "https://github.com/Dev-moe-kyawaung",
      live: "https://your-portfolio.vercel.app",
      featured: true,
    },
    {
      slug: "developer-dashboard-ui",
      title: "Developer Dashboard UI",
      excerpt:
        "A full-featured analytics dashboard for developers, featuring real-time data visualization, project tracking, and team management in a clean dark interface.",
      description:
        "A comprehensive developer dashboard built with React and Supabase. Features real-time project metrics, task management, team activity feeds, and GitHub repository insights. The UI is designed for maximum productivity with a minimal cognitive load approach.",
      technologies: ["React", "Supabase", "TypeScript", "Recharts"],
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200",
      github: "https://github.com/Dev-moe-kyawaung",
      live: "https://dashboard-demo.vercel.app",
      featured: true,
    },
    {
      slug: "github-profile-branding",
      title: "GitHub Profile Branding Kit",
      excerpt:
        "A dynamic GitHub profile README generator with custom stats cards, skill badges, and animated banners. Designed to help developers make a strong first impression.",
      description:
        "A web-based toolkit for creating compelling GitHub profile READMEs. Generate customized stats cards, animated contribution graphs, skill badge collections, and professional bios. Supports markdown export and live preview.",
      technologies: ["Next.js", "GitHub API", "SVG", "Markdown"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      github: "https://github.com/Dev-moe-kyawaung",
      live: "https://github-branding.vercel.app",
      featured: false,
    },
    {
      slug: "responsive-contact-section",
      title: "Responsive Contact Section",
      excerpt:
        "A beautifully designed, fully accessible contact section component with animated form validation, Formspree integration, and mobile-first layout.",
      description:
        "A standalone contact section component ready to drop into any project. Features smooth form validation animations, accessible markup, a glassmorphism card design, and seamless Formspree backend integration. Fully responsive across all screen sizes.",
      technologies: ["React", "Tailwind CSS", "Formspree", "Framer Motion"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      github: "https://github.com/Dev-moe-kyawaung",
      live: "https://contact-demo.vercel.app",
      featured: false,
    },
  ],

  features: [
    {
      title: "Real-Time GitHub Stats",
      description:
        "Live integration with the GitHub API to display up-to-date repository counts, followers, and profile data.",
      icon: "github",
    },
    {
      title: "Premium UI Design",
      description:
        "Glassmorphism cards, smooth animations, particle effects, and a meticulously crafted dark theme.",
      icon: "design",
    },
    {
      title: "SEO Optimized",
      description:
        "Built-in sitemap generation, semantic HTML, and metadata management for maximum search visibility.",
      icon: "seo",
    },
    {
      title: "Fully Responsive",
      description:
        "Mobile-first design that looks exceptional on every screen size from 320px to 4K.",
      icon: "responsive",
    },
  ],
};

export default portfolioData;
