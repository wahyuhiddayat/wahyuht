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
    description: "Collaborated with fintech startup Sokratech to migrate and rebuild a real-time fraud detection dashboard using Next.js and Bun, integrating FastAPI-based risk modeling with Weight of Evidence methodology.",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ["Next.js", "Bun", "FastAPI", "Supabase", "Docker", "Prometheus", "Grafana", "Docker", "Weight of Evidence (WoE)"],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "Anomaly Detection in Customer Purchasing Patterns",
    description: "Designed a multi-step data mining pipeline on 541K+ retail transactions for customer segmentation, association rule mining, and anomaly detection.",
    date: "2025",
    imageUrl: "/images/anomaly_detection_datmin.png",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "K-Means Clustering", "FP-Growth", "Isolation Forest", "CRISP-DM"],
    links: {
      website: "https://outlier-data.streamlit.app/",
      github: "https://github.com/wahyuhiddayat/anomaly-detection-in-customer-purchasing-pattern"
    }
  },
  {
    title: "wahyuht",
    description: "Modern, fully responsive portfolio website built with Next.js 14 and TypeScript, featuring dark/light mode and smooth animations with Framer Motion.",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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