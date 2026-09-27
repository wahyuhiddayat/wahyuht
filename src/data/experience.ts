/** A single position held at an organization. */
export interface Role {
  position: string;
  period: string;
  details?: {
    description: string;
    achievements: string[];
    skills?: string[];
  };
}

/** One organization, with its roles listed newest first. */
export interface Experience {
  company: string;
  logo: string;
  url?: string;
  roles: Role[];
}

export const experienceData: Experience[] = [
  {
    company: "Telkom Indonesia",
    logo: "/images/logos/telkom-indonesia.png",
    url: "https://www.telkom.co.id",
    roles: [
      {
        position: "AI Engineer Intern",
        period: "Aug 2026 – Present",
        details: {
          description: "Building data pipelines, recommendation logic, and reporting automation for the sales team in Telkom's enterprise business (EBIS) division.",
          achievements: [
            "Built a Python pipeline that classified 231,770 customer records by business sector, combining rule-based keyword matching with LLM-assisted labeling, validated against a 141-record benchmark.",
            "Built a rule-based product recommendation system that profiled 32,535 subscriber lines by usage and tenure, flagging upgrade, additional-line, and fraud-review candidates for the sales team through a Tableau dashboard.",
            "Automated a daily sales performance report by replacing a manual Excel process with a Python pipeline, matching every previously verified figure and fixing a data-counting error in the old process."
          ],
          skills: ["Python", "LLMs", "Recommendation Systems", "Tableau", "Automation"]
        }
      },
    ],
  },
  {
    company: "Faculty of Computer Science, Universitas Indonesia",
    logo: "/images/logos/fasilkom-ui.png",
    url: "https://cs.ui.ac.id",
    roles: [
      {
        position: "Teaching Assistant, Cloud Computing",
        period: "Aug 2026 – Present",
        details: {
          description: "One of three teaching assistants supporting 63 students through weekly AWS labs.",
          achievements: [
            "Support 63 students through weekly AWS labs on virtual machine provisioning, cloud storage, container orchestration with Kubernetes, serverless functions, and autoscaling.",
            "Write tutorial problems and grade lab and project submissions spanning IaaS, PaaS, SaaS, microservices, high availability, cloud security, and cloud migration design.",
            "Run assistance sessions that debug students' cloud deployments, working through misconfigured networking, access control, and container issues on live AWS environments."
          ],
          skills: ["AWS", "Kubernetes", "Docker", "Serverless"]
        }
      },
      {
        position: "Teaching Assistant, Social Media Analytics",
        period: "Aug 2026 – Present",
        details: {
          description: "Sole teaching assistant for 48 students on a project-based social media analytics course.",
          achievements: [
            "Serve as the sole teaching assistant for 48 students on a project-based course covering data collection through APIs and web scraping, reproducible data pipelines, and data quality assessment.",
            "Write tutorial problems and grade project milestones on sentiment analysis, topic modeling, and social network analysis over multilingual social media data.",
            "Guide student teams through end-to-end analytics projects, reviewing data preprocessing, feature representation, and visualization choices."
          ],
          skills: ["Sentiment Analysis", "Topic Modeling", "Social Network Analysis", "Web Scraping"]
        }
      },
      {
        position: "Teaching Assistant, Introduction to Computer Organization",
        period: "Aug 2024 – Jan 2025",
        details: {
          description: "Supported student learning in MIPS and AVR Assembly through labs, tutorials, and exam reviews.",
          achievements: [
            "Designed problem sets and worked solutions for homework, tutorials, and lab modules on MIPS and AVR.",
            "Facilitated weekly lab and tutorial sessions for 46 students, teaching assembly programming, datapath design, and I/O handling.",
            "Conducted midterm and final exam review sessions and wrote the accompanying study materials."
          ],
          skills: ["MIPS", "AVR Assembly", "Computer Organization"]
        }
      },
    ],
  },
  {
    company: "PT Badr Interactive",
    logo: "/images/logos/badr-interactive.png",
    roles: [
      {
        position: "Software Engineer Intern",
        period: "Jan 2026 – May 2026",
        details: {
          description: "Built and hardened features for a medical imaging platform as a full-stack engineering intern.",
          achievements: [
            "Delivered a full-stack export feature across a Python backend and React/Vue 3 frontends, generating standard DICOMDIR archives so hospitals could move radiology studies to CD/DVD or other imaging systems.",
            "Fixed a bug that showed stale study results during rapid filtering by canceling outdated requests, and added a 10-second background refresh so new AI-processed radiology studies appear without manual page reloads.",
            "Audited and hardened role-based access control (RBAC) across the viewer and admin modules, replacing a fragile permission-count check with the authenticated role and fixing denials that returned 502 instead of 403."
          ],
          skills: ["Python", "React", "Vue.js", "RBAC", "Full-Stack Development"]
        }
      },
    ],
  },
  {
    company: "Universitas Indonesia Center for Legal Informatics",
    logo: "/images/logos/lexin.png",
    url: "https://lexin.cs.ui.ac.id",
    roles: [
      {
        position: "AI Engineer Intern",
        period: "Jul 2025 – Dec 2025",
        details: {
          description: "Researched and developed AI solutions for legal informatics, focusing on retrieval-augmented generation for legal question answering.",
          achievements: [
            "Cut response time on a retrieval-augmented generation (RAG) legal chatbot from 60-120s to 20-30s per query by parallelizing hybrid retrieval and batching Gemini embedding requests.",
            "Added a citation-validation layer that checks every legal reference against Elasticsearch to reduce AI hallucinations, surfacing them as clickable numbered citations in a React/TypeScript interface.",
            "Hardened the FastAPI microservices with split environment configs, RabbitMQ retry limits, and a fallback from Pinecone to Elasticsearch, and expanded the legal corpus with Presidential Regulations."
          ],
          skills: ["RAG", "FastAPI", "Elasticsearch", "Pinecone", "RabbitMQ", "React", "TypeScript", "LLMs"]
        }
      },
    ],
  },
  {
    company: "BEM Fasilkom UI",
    logo: "/images/logos/bem-fasilkom.png",
    url: "https://bem.cs.ui.ac.id",
    roles: [
      {
        position: "Vice President",
        period: "May 2025 – Feb 2026",
        details: {
          description: "Co-led the student executive board, overseeing strategic initiatives and representing the organization in faculty and university forums.",
          achievements: [
            "Co-led a 167-member student executive board alongside the President, overseeing six divisions comprising eleven departments and bureaus.",
            "Reviewed and approved program proposals during the exploration phase, filtering initiatives against organizational priorities before execution.",
            "Represented the organization externally in a company visit to GoTo, a partnership proposal to PwC, inter-university exchanges with HMIF ITB and HIMATIF UNPAD, and university-wide forums on tuition policy."
          ],
          skills: ["Leadership", "Project Management", "Strategic Planning", "External Relations"]
        }
      },
      {
        position: "Deputy of Advocacy and Student Welfare",
        period: "Mar 2024 – Feb 2025",
        details: {
          description: "Led a 9-member team to deliver 7 programs enhancing student welfare and advocacy.",
          achievements: [
            "Advocated on tuition fees, mental health, and financial aid",
            "Acted as liaison between students and faculty administration",
            "Negotiated solutions to address academic and social concerns"
          ],
          skills: ["Advocacy", "Team Leadership", "Policy Negotiation"]
        }
      },
      {
        position: "Staff of Advocacy and Student Welfare",
        period: "Apr 2023 – Feb 2024",
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
    ],
  },
];
