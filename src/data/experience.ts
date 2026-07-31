export interface Experience {
  position: string;
  company: string;
  period: string;
  logo: string;
  url?: string;
  details?: {
    description: string;
    achievements: string[];
    skills?: string[];
    metric?: string;
  };
}

export const experienceData: Experience[] = [
  {
    position: "Teaching Assistant, Cloud Computing (Incoming)",
    company: "Faculty of Computer Science, Universitas Indonesia",
    period: "Aug 2026",
    logo: "/images/makara_fasilkom.png",
    url: "https://cs.ui.ac.id",
    details: {
      description: "Selected to support the undergraduate Cloud Computing course, covering cloud service models and modern deployment infrastructure.",
      achievements: [
        "Covers AWS-based deployment, IaaS/PaaS/SaaS, containers, Kubernetes, and serverless services."
      ],
      skills: ["AWS", "Kubernetes", "Docker", "Cloud Computing"]
    }
  },
  {
    position: "Software Engineer Intern",
    company: "PT Badr Interactive",
    period: "Jan 2026 – May 2026",
    logo: "/images/badr-interactive.png",
    details: {
      description: "Built and hardened features for a medical imaging platform as a full-stack engineering intern.",
      achievements: [
        "Delivered a full-stack export feature across a Python backend and React/Vue 3 frontends, generating standard DICOMDIR archives so hospitals could move radiology studies to CD/DVD or other imaging systems.",
        "Fixed a bug that showed stale study results during rapid filtering by canceling outdated requests, and added a 10-second background refresh so new AI-processed radiology studies appear without manual page reloads.",
        "Audited and hardened role-based access control (RBAC) across the viewer and admin modules, replacing a fragile permission-count check with the authenticated role and fixing denials that returned 502 instead of 403."
      ],
      skills: ["Python", "React", "Vue.js", "RBAC", "Full-Stack Development"],
      metric: "502 → 403 (correct denial code)"
    }
  },
  {
    position: "Artificial Intelligence Engineer Intern",
    company: "Universitas Indonesia Center for Legal Informatics",
    period: "Jul 2025 – Dec 2025",
    logo: "/images/lexin.png",
    url: "https://lexin.cs.ui.ac.id",
    details: {
      description: "Researched and developed AI solutions for legal informatics, focusing on retrieval-augmented generation for legal question answering.",
      achievements: [
        "Cut response time on a retrieval-augmented generation (RAG) legal chatbot from 60-120s to 20-30s per query by parallelizing hybrid retrieval and batching Gemini embedding requests.",
        "Added a citation-validation layer that checks every legal reference against Elasticsearch to reduce AI hallucinations, surfacing them as clickable numbered citations in a React/TypeScript interface.",
        "Hardened the FastAPI microservices with split environment configs, RabbitMQ retry limits, and a fallback from Pinecone to Elasticsearch, and expanded the legal corpus with Presidential Regulations."
      ],
      skills: ["RAG", "FastAPI", "Elasticsearch", "Pinecone", "RabbitMQ", "React", "TypeScript", "LLMs"],
      metric: "60-120s → 20-30s per query"
    }
  },
  {
    position: "Vice President",
    company: "BEM Fasilkom UI",
    period: "May 2025 – Feb 2026",
    logo: "/images/bem_fasilkom.png",
    url: "https://bem.cs.ui.ac.id",
    details: {
      description: "Co-led the student executive board, overseeing strategic initiatives and representing 2000+ Computer Science students in faculty governance.",
      achievements: [
        "Co-led a 167-member student executive board alongside the President, overseeing six divisions comprising eleven departments and bureaus.",
        "Reviewed and approved program proposals during the exploration phase, filtering initiatives against organizational priorities before execution.",
        "Represented the organization externally in a company visit to GoTo, a partnership proposal to PwC, inter-university exchanges with HMIF ITB and HIMATIF UNPAD, and university-wide forums on tuition policy."
      ],
      skills: ["Leadership", "Project Management", "Strategic Planning", "External Relations"],
      metric: "167-member board · 6 divisions · 11 departments"
    }
  },
  {
    position: "Teaching Assistant, Introduction to Computer Organization",
    company: "Faculty of Computer Science, Universitas Indonesia",
    period: "Aug 2024 – Jan 2025",
    logo: "/images/makara_fasilkom.png",
    url: "https://cs.ui.ac.id",
    details: {
      description: "Supported student learning in MIPS and AVR Assembly through labs, tutorials, and exam reviews.",
      achievements: [
        "Guided and evaluated 46 students through labs and tutorials",
        "Collaborated with 3 TAs and the professor to meet course goals",
        "Provided one-on-one support on complex computer organization topics"
      ],
      skills: ["MIPS", "AVR Assembly", "Teaching", "Computer Organization"],
      metric: "46 students mentored"
    }
  },
  {
    position: "Deputy of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Mar 2024 – Feb 2025",
    logo: "/images/bem_fasilkom.png",
    url: "https://bem.cs.ui.ac.id",
    details: {
      description: "Led a 9-member team to deliver 7 programs enhancing student welfare and advocacy.",
      achievements: [
        "Advocated on tuition fees, mental health, and financial aid",
        "Acted as liaison between students and faculty administration",
        "Negotiated solutions to address academic and social concerns"
      ],
      skills: ["Advocacy", "Team Leadership", "Policy Negotiation"],
      metric: "9-member team · 7 programs delivered"
    }
  },
  {
    position: "Staff of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Apr 2023 – Feb 2024",
    logo: "/images/bem_fasilkom.png",
    url: "https://bem.cs.ui.ac.id",
    details: {
      description: "Managed department social media to promote welfare programs and engage the student community.",
      achievements: [
        "Created and shared content on academic policies, aid, and mental health",
        "Handled student inquiries with accurate and timely responses",
        "Collaborated on strategies to increase student engagement"
      ],
      skills: ["Social Media Management", "Content Creation", "Student Engagement"]
    }
  },
];
