export interface Experience {
  position: string;
  company: string;
  period: string;
  logo: string;
  details?: {
    description: string;
    achievements: string[];
    skills?: string[];
  };
}

export const experienceData: Experience[] = [
  {
    position: "AI Research & Development Intern",
    company: "Universitas Indonesia Center for Legal Informatics (Lexin)",
    period: "Aug 2025 – Present",
    logo: "/images/lexin.png",
    details: {
      description: "Researching and developing AI solutions for legal informatics, focusing on retrieval systems and generative AI for legal question answering.",
      achievements: [
        "Explored text retrieval and large language models (LLMs)",
        "Developed Retrieval-Augmented Generation (RAG) systems for legal QA",
        "Built and packaged web applications for RAG-based systems"
      ],
      skills: ["Python", "Text Retrieval", "LLMs", "RAG", "NLP", "Web Development"]
    }
  },
  {
    position: "Vice President",
    company: "BEM Fasilkom UI",
    period: "May 2025 – Present",
    logo: "/images/bem_fasilkom.png",
    details: {
      description: "Co-leading the student executive board, overseeing strategic initiatives and representing 2000+ Computer Science students in faculty governance.",
      achievements: [
        "Directed programs across 11 departments and bureaus",
        "Oversaw operations to align with student needs and faculty goals",
        "Mentored and coordinated 150+ executive members"
      ],
      skills: ["Leadership", "Project Management", "Strategic Planning"]
    }
  },
  {
    position: "Teaching Assistant",
    company: "Faculty of Computer Science, Universitas Indonesia",
    period: "Aug 2024 – Jan 2025",
    logo: "/images/makara_fasilkom.png",
    details: {
      description: "Assisted in teaching Introduction to Computer Organization, supporting student learning in MIPS and AVR Assembly.",
      achievements: [
        "Guided and evaluated 46 students through labs and tutorials",
        "Collaborated with 3 TAs and the professor to meet course goals",
        "Provided one-on-one support on complex computer organization topics"
      ],
      skills: ["MIPS", "AVR Assembly", "Teaching", "Computer Organization"]
    }
  },
  {
    position: "Deputy of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Mar 2024 – Feb 2025",
    logo: "/images/bem_fasilkom.png",
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
    company: "BEM Fasilkom UI",
    period: "Apr 2023 – Feb 2024",
    logo: "/images/bem_fasilkom.png",
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