export interface ProjectDetail {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
  slug: string;
  links?: {
    website?: string;
    github?: string;
    demo?: string;
  };
  // Case study details
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  challenges: string[];
  learnings: string[];
  images?: string[];
  featured?: boolean;
}

export const projectsData: ProjectDetail[] = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "University capstone project collaborating with Sokratech to build a comprehensive no-code fraud detection platform for fintech applications.",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker'],
    slug: "sokratech-fraud-detection",
    featured: false,
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    },
    overview: "A comprehensive capstone project developed in collaboration with Sokratech, a fintech startup, to create a no-code fraud detection platform that empowers non-technical users to build and deploy real-time fraud prevention systems.",
    problem: "Financial institutions struggle with fraud detection due to complex rule creation processes that require technical expertise, time-consuming deployment cycles, and difficulty in adapting to new fraud patterns quickly.",
    solution: "Developed a comprehensive no-code platform featuring ML-powered rule recommendations using AutoWoE, an intuitive drag-and-drop interface, real-time processing capabilities, and comprehensive analytics dashboard for fraud monitoring.",
    process: [
      "Collaborated with Sokratech team to understand fintech fraud detection requirements",
      "Designed microservices architecture for scalable real-time processing",
      "Built frontend using Next.js with TypeScript for type safety and performance",
      "Implemented backend API using Bun and Hono for high-performance request handling",
      "Integrated AutoWoE for automated feature engineering and ML recommendations",
      "Set up Supabase with Drizzle ORM for robust database management",
      "Deployed on Google Cloud Platform with Docker containerization"
    ],
    challenges: [
      "Building intuitive no-code interfaces for complex fraud rule creation",
      "Ensuring real-time processing performance for high-volume transactions",
      "Integrating ML recommendations seamlessly into user workflow",
      "Balancing feature richness with user experience simplicity"
    ],
    learnings: [
      "Experience in fintech domain and fraud detection systems",
      "Advanced microservices architecture and deployment",
      "Collaboration skills working with startup environment",
      "No-code platform design and user experience principles"
    ],
    images: ["/images/sokratech.png"]
  },
  {
    title: "Anomaly Detection in Customer Purchasing Patterns",
    description: "Advanced data mining project analyzing 541,909 customer transactions using machine learning algorithms to detect purchasing anomalies and segment customers.",
    date: "2025",
    imageUrl: "/images/anomaly_detection_datmin.png",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "CRISP-DM", "Machine Learning", "Data Mining", "FP-Growth", "K-Means Clustering"],
    slug: "anomaly-detection",
    featured: true,
    links: {
      website: "https://outlier-data.streamlit.app/",
      github: "https://github.com/wahyuhiddayat/anomaly-detection-in-customer-purchasing-pattern"
    },
    overview: "A comprehensive data mining project that applies machine learning techniques to analyze customer purchasing behaviors in online retail. The project processes over 540,000 transactions to identify anomalous purchasing patterns and create meaningful customer segments for business insights.",
    problem: "Online retailers struggle to identify unusual customer purchasing behaviors that could indicate fraud, system errors, or valuable business opportunities. Traditional rule-based systems are insufficient for handling the complexity and scale of modern e-commerce transaction data.",
    solution: "Developed a hybrid anomaly detection system combining multiple machine learning algorithms including Isolation Forest and Local Outlier Factor. Implemented RFM (Recency, Frequency, Monetary) analysis for customer segmentation and FP-Growth algorithm for association rule mining to discover hidden patterns in purchasing behavior.",
    process: [
      "Applied CRISP-DM methodology for structured data mining approach",
      "Performed comprehensive data cleaning and preprocessing on 541,909 transactions",
      "Implemented RFM analysis to segment customers based on purchasing behavior",
      "Developed hybrid anomaly detection using Isolation Forest and LOF algorithms",
      "Applied FP-Growth algorithm for association rule mining",
      "Created interactive Streamlit dashboard for real-time visualization",
      "Conducted statistical analysis and model evaluation"
    ],
    challenges: [
      "Handling large-scale transaction data with memory efficiency",
      "Balancing false positive and false negative rates in anomaly detection",
      "Optimizing algorithm parameters for different customer segments",
      "Creating meaningful visualizations for complex multidimensional data"
    ],
    learnings: [
      "Deep understanding of ensemble methods for anomaly detection",
      "Experience with large-scale data processing and optimization",
      "Skills in creating production-ready data science dashboards",
      "Knowledge of business applications of data mining techniques"
    ],
    images: ["/images/anomaly_detection_datmin.png"]
  },
  {
    title: "wahyuht",
    description: "Modern portfolio website built with Next.js 14, featuring responsive design, dark mode, smooth animations, and comprehensive testing suite.",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jest", "React Testing Library"],
    slug: "portfolio-website",
    featured: true,
    links: {
      website: "https://wahyuht.com",
      github: "https://github.com/wahyuhiddayat/wahyuht"
    },
    overview: "A professional portfolio website designed to showcase projects and technical skills. Built with modern web technologies focusing on performance, accessibility, and user experience.",
    problem: "Needed a professional online presence to showcase technical projects and skills for internship and job applications. Required a clean, fast, and responsive website that reflects attention to detail and modern development practices.",
    solution: "Developed a modern portfolio using Next.js 14 with TypeScript for type safety, Tailwind CSS for efficient styling, and Framer Motion for smooth animations. Implemented dark mode, comprehensive testing, and optimized performance for excellent user experience.",
    process: [
      "Designed clean, professional layout focusing on readability and navigation",
      "Implemented responsive design with mobile-first approach",
      "Set up TypeScript for enhanced development experience and type safety",
      "Created reusable components with consistent design patterns",
      "Integrated Framer Motion for subtle, professional animations",
      "Implemented dark/light mode with system preference detection",
      "Set up comprehensive testing suite with Jest and React Testing Library",
      "Optimized images and implemented performance best practices"
    ],
    challenges: [
      "Balancing visual appeal with professional, resume-style aesthetics",
      "Optimizing animation performance across different devices",
      "Ensuring accessibility compliance while maintaining design vision",
      "Creating a scalable component architecture for future updates"
    ],
    learnings: [
      "Advanced Next.js 14 features and optimization techniques",
      "Professional web design principles and user experience",
      "Testing strategies for React applications",
      "Performance optimization and accessibility best practices"
    ],
    images: ["/images/wahyuht.png"]
  },
  {
    title: "Letterbookd",
    description: "Full-stack web application designed to connect readers with books and build literary communities through personal libraries and social features.",
    date: "2023",
    imageUrl: "/images/letterbookd_web.png",
    skills: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Bootstrap", "jQuery", "Docker", "Heroku"],
    slug: "letterbookd",
    featured: false,
    links: {
      github: "https://github.com/letterbookd/letterbookd"
    },
    overview: "A comprehensive full-stack web application inspired by platforms like Goodreads, designed to help readers discover books, manage personal libraries, write reviews, and engage with a community of fellow book enthusiasts.",
    problem: "Book lovers often struggle to track their reading progress, discover new books, and connect with like-minded readers. Existing platforms can be overwhelming or lack community features that encourage meaningful literary discussions.",
    solution: "Built a user-friendly platform featuring personal library management, comprehensive book catalog with detailed information, user review system, discussion forums, and social interaction capabilities with multi-role access control.",
    process: [
      "Designed database schema for books, users, reviews, and social interactions",
      "Implemented Django backend with robust authentication and authorization",
      "Created REST API endpoints for mobile client integration",
      "Built responsive frontend using Bootstrap and jQuery",
      "Integrated PostgreSQL for efficient data management",
      "Implemented multi-role access control (guest, reader, librarian, admin)",
      "Set up Docker containerization for consistent deployment",
      "Deployed on Heroku with continuous integration"
    ],
    challenges: [
      "Designing scalable database relationships for complex book data",
      "Implementing efficient search and filtering for large book catalogs",
      "Building responsive UI that works across different devices",
      "Managing different user roles and permissions effectively"
    ],
    learnings: [
      "Full-stack web development with Django framework",
      "RESTful API design and implementation",
      "Database design for complex relational data",
      "User experience design for community-driven platforms"
    ],
    images: ["/images/letterbookd_web.png"]
  }
];

export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
export const getProjectBySlug = (slug: string) => projectsData.find(project => project.slug === slug);
export const getAllProjects = () => projectsData;