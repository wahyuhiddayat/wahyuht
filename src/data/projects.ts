import { personalData } from './personal';

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
    title: "Vectorless vs. Vector Retrieval for Legal Documents",
    description: "Undergraduate thesis comparing vectorless LLM reasoning against dense vector retrieval on Qdrant for locating provisions across 308 Indonesian regulations, tested with paired randomization tests over 10,000 permutations and Holm-Bonferroni correction.",
    date: "2026",
    skills: ["Python", "Qdrant", "Hugging Face", "BM25", "LLM Evaluation"],
    metric: "MAP@10: 0.88 (vector) vs. 0.95 (vectorless)"
  },
  {
    title: "Multimodal Image Search Engine",
    description: "Combined BM25 lexical and CLIP semantic retrieval with reciprocal rank fusion over 31,783 captioned images, adding Rocchio pseudo-relevance feedback and Gemini query expansion, then replaced brute-force FAISS search with an HNSW approximate index for faster retrieval.",
    date: "2026",
    skills: ["Python", "FastAPI", "FAISS", "CLIP", "Gemini"],
    metric: "31,783 images indexed"
  },
  {
    title: "CV-to-Job Matching Platform",
    description: "Built the AI matching service for a 5-person team on a Dockerized FastAPI backend on AWS EC2 with private S3 storage and Lambda PDF extraction, applying prompt engineering to Gemini 2.5 Flash for structured match scores, summaries, and skill gaps.",
    date: "2025",
    skills: ["Python", "FastAPI", "Gemini", "AWS", "Docker"]
  },
  {
    title: "Diffusion-Based Image Inpainting",
    description: "Adapted RePaint diffusion inpainting to emoji restoration, training a denoising diffusion probabilistic model from scratch on 3,440 triplets over 100 epochs at 256x256 resolution, evaluated with PSNR, SSIM, and LPIPS against ground truth.",
    date: "2025",
    skills: ["PyTorch", "Diffusers", "DDPM", "Computer Vision"],
    metric: "12.65s per image at 100 diffusion steps"
  },
  {
    title: "Political Sentiment Analysis on YouTube",
    description: "Collected 115,187 comments from 1,257 videos via the YouTube Data API, normalized Indonesian slang and political terms, then extended the InSet sentiment lexicon with contextual negation handling to correct its negative bias.",
    date: "2025",
    skills: ["Python", "NLP", "YouTube Data API", "Pandas"],
    metric: "115,187 comments classified"
  },
  {
    title: "Biomedical Organ Classification from CT Scans",
    description: "Trained a ResNet-34 from scratch to classify 11 organ types across 61,486 CT scans with class-weighted loss, affine augmentation, and Optuna hyperparameter search, then isolated the effect of residual connections through an ablation study.",
    date: "2025",
    skills: ["PyTorch", "ResNet-34", "Optuna", "Deep Learning"],
    metric: "0.974 validation F1"
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
      website: personalData.siteUrl,
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
