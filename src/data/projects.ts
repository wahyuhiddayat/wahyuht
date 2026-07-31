export interface ProjectDetail {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
  metric?: string;
  links?: {
    website?: string;
    github?: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "Built a fraud risk platform with a 7-person team for Sokratech, migrating its dashboard from Django to Next.js and Bun and adding FastAPI-based Weight of Evidence scoring.",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ["Next.js", "Bun", "FastAPI", "Supabase", "Docker", "Prometheus", "Grafana", "Weight of Evidence (WoE)"],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "Anomaly Detection in Customer Purchasing Patterns",
    description: "Mined association rules across 541,909 retail transactions and helped package a 7-person team's segmentation, rule-mining, and anomaly-detection pipeline into Streamlit.",
    date: "2025",
    imageUrl: "/images/anomaly_detection_datmin.png",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "K-Means Clustering", "FP-Growth", "Isolation Forest", "CRISP-DM"],
    metric: "541,909 transactions analyzed",
    links: {
      website: "https://outlier-data.streamlit.app/",
      github: "https://github.com/wahyuhiddayat/anomaly-detection-in-customer-purchasing-pattern"
    }
  },
  {
    title: "wahyuht",
    description: "Responsive portfolio website built with Next.js and TypeScript, featuring light and dark themes and restrained motion with Framer Motion.",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      website: "https://wahyuht.com",
      github: "https://github.com/wahyuhiddayat/wahyuht"
    }
  },
  {
    title: "Letterbookd",
    description: "Full-stack social platform for book enthusiasts with a Django web app and Flutter mobile app, enabling profile management, search, and real-time data sync.",
    date: "2023",
    imageUrl: "/images/letterbookd_web.png",
    skills: ["Django", "Flutter", "Dart", "Bootstrap", "SQL", "REST API"],
    links: {
      github: "https://github.com/letterbookd/letterbookd"
    }
  }
];

export const getAllProjects = () => projectsData;
