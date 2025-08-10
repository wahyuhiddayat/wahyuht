export interface ProjectDetail {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
  links?: {
    website?: string;
    github?: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "University capstone project collaborating with Sokratech to build a comprehensive no-code fraud detection platform for fintech applications.",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker'],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "Anomaly Detection in Customer Purchasing Patterns",
    description: "Advanced data mining project analyzing 541,909 customer transactions using machine learning algorithms to detect purchasing anomalies and segment customers.",
    date: "2025",
    imageUrl: "/images/anomaly_detection_datmin.png",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "CRISP-DM", "Machine Learning", "Data Mining", "FP-Growth", "K-Means Clustering"],
    links: {
      website: "https://outlier-data.streamlit.app/",
      github: "https://github.com/wahyuhiddayat/anomaly-detection-in-customer-purchasing-pattern"
    }
  },
  {
    title: "wahyuht",
    description: "Modern portfolio website built with Next.js 14, featuring responsive design, dark mode, smooth animations, and comprehensive testing suite.",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jest", "React Testing Library"],
    links: {
      website: "https://wahyuht.com",
      github: "https://github.com/wahyuhiddayat/wahyuht"
    }
  },
  {
    title: "Letterbookd",
    description: "Full-stack web application designed to connect readers with books and build literary communities through personal libraries and social features.",
    date: "2023",
    imageUrl: "/images/letterbookd_web.png",
    skills: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Bootstrap", "jQuery", "Docker", "Heroku"],
    links: {
      github: "https://github.com/letterbookd/letterbookd"
    }
  }
];

export const getAllProjects = () => projectsData;