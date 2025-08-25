export const siteConfig = {
  company: {
    name: "base2ML",
    tagline: "AI-Enabled Web Applications Built for the Future",
    description: "Professional AI-enabled web application development for business, government, and consumer markets. Founded by experienced AI engineers and machine learning instructors.",
    logo: {
      src: "/base2ml-logo.png",
      alt: "base2ML Logo",
      width: 48,
      height: 48,
    },
  },
  
  contact: {
    email: "hello@base2ml.com",
    phone: "+1 (240) 883-6657",
    address: {
      street: "340 Main St",
      city: "Kennerdell",
      state: "PA",
      zip: "16375",
      country: "United States",
    },
    social: {
      linkedin: "https://linkedin.com/company/base2ml",
      twitter: "https://twitter.com/base2ml",
      github: "https://github.com/base2ml",
    },
  },

  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Demos", href: "/demos" },
      { name: "About", href: "/about" },
      { name: "Legal", href: "/legal" },
    ],
    cta: {
      name: "Get Started",
      href: "/contact",
    },
  },

  hero: {
    headline: "AI-Enabled Web Applications",
    subheadline: "Built for the Future",
    description: "Professional development solutions for business, government, and consumer markets. Founded by experienced AI engineers and machine learning instructors.",
    primaryCta: {
      text: "Start Your Project",
      href: "/contact",
    },
    secondaryCta: {
      text: "View Our Work",
      href: "/portfolio",
    },
  },

  services: {
    primary: [
      {
        title: "AI-Powered Solutions",
        description: "Cutting-edge artificial intelligence and machine learning integrated into every application we build.",
        icon: "Brain",
      },
      {
        title: "Expert Development",
        description: "Professional web applications built with modern technologies and best practices by experienced engineers.",
        icon: "Code",
      },
      {
        title: "Multi-Sector Expertise",
        description: "Serving business, government, and consumer markets with tailored solutions for each sector's unique needs.",
        icon: "Users",
      },
    ],
  },

  projectAreas: {
    business: {
      title: "Business Solutions",
      description: "Enterprise-grade applications with AI integration for improved efficiency and decision-making.",
      examples: [
        "Customer Analytics Dashboards",
        "Automated Workflow Systems",
        "Predictive Business Intelligence",
        "Supply Chain Optimization",
      ],
    },
    government: {
      title: "Government Services",
      description: "Secure, compliant applications for public sector organizations with robust AI capabilities.",
      examples: [
        "Citizen Service Portals",
        "Document Processing Systems",
        "Public Safety Analytics",
        "Regulatory Compliance Tools",
      ],
    },
    consumer: {
      title: "Consumer Applications",
      description: "User-friendly applications with intelligent features that enhance daily experiences.",
      examples: [
        "Health & Wellness Trackers",
        "Personal Finance Management",
        "Educational Platforms",
        "Smart Home Integration",
      ],
    },
  },

  team: {
    founders: [
      {
        name: "Chistopher Lindeman",
        role: "Founder & CEO",
        bio: "US Intelligence Sector AI consultant with 5+ years in machine learning research and implementation.",
        image: "/professional-ai-researcher.png",
      },
      {
        name: "Michael Rodriguez",
        role: "Co-Founder & CTO",
        bio: "Full-stack engineer and AI instructor with experience building scalable web applications.",
        image: "/professional-ai-engineer.png",
      },
      {
        name: "Dr. Emily Watson",
        role: "Lead Data Scientist",
        bio: "PhD in Computer Science, specializing in natural language processing and computer vision.",
        image: "/professional-woman-data-scientist.png",
      },
    ],
  },

  portfolio: {
    featured: [
      {
        title: "Modern Business Dashboard",
        description: "AI-powered analytics dashboard for enterprise resource planning and business intelligence.",
        image: "/modern-business-dashboard.png",
        technologies: ["React", "TypeScript", "Python", "TensorFlow"],
        category: "business",
      },
      {
        title: "Government Portal Security",
        description: "Secure citizen services portal with advanced authentication and document processing.",
        image: "/government-portal-security.png",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "OAuth"],
        category: "government",
      },
      {
        title: "Health Tracking Application",
        description: "Personal health monitoring app with AI-driven insights and recommendations.",
        image: "/health-tracking-app.png",
        technologies: ["React Native", "Firebase", "ML Kit", "HealthKit"],
        category: "consumer",
      },
      {
        title: "Supply Chain AI Dashboard",
        description: "Intelligent supply chain management system with predictive analytics and optimization.",
        image: "/supply-chain-ai-dashboard.png",
        technologies: ["Vue.js", "Python", "Apache Kafka", "scikit-learn"],
        category: "business",
      },
      {
        title: "Civic Engagement Platform",
        description: "Public participation platform for local government with sentiment analysis and engagement metrics.",
        image: "/civic-engagement-platform.png",
        technologies: ["Angular", "Express", "MongoDB", "Natural Language API"],
        category: "government",
      },
    ],
  },

  company_values: [
    {
      title: "Innovation First",
      description: "We stay at the forefront of AI and web technologies to deliver cutting-edge solutions.",
    },
    {
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and follows industry best practices.",
    },
    {
      title: "Client Partnership",
      description: "We work closely with clients as partners to understand and exceed their expectations.",
    },
    {
      title: "Ethical AI",
      description: "We build responsible AI solutions that are transparent, fair, and beneficial to society.",
    },
  ],

  legal: {
    lastUpdated: "2025-08-15",
    companyRegistration: "base2ML LLC",
    jurisdiction: "Pennsylvania, United States",
  },

  seo: {
    defaultTitle: "base2ML - AI-Enabled Web Application Development",
    titleTemplate: "%s | base2ML",
    defaultDescription: "Professional AI-enabled web application development for business, government, and consumer markets. Founded by experienced AI engineers and ML instructors.",
    siteUrl: "https://base2ml.com",
    keywords: [
      "AI development",
      "machine learning",
      "web applications",
      "artificial intelligence",
      "software development",
      "business solutions",
      "government technology",
      "consumer apps",
    ],
  },
} as const

export type SiteConfig = typeof siteConfig