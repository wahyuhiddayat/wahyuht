export interface SkillCategory {
  title: string;
  skills: string;
}

export const skillsData: SkillCategory[] = [
  { title: "Languages", skills: "Python, JavaScript, TypeScript, Java, Go, Dart" },
  { title: "Machine Learning", skills: "PyTorch, TensorFlow, Scikit-learn, Hugging Face" },
  { title: "Web & Frameworks", skills: "React, Next.js, Django, Spring Boot, Bun" },
  { title: "Tools", skills: "Git, Docker, Google Cloud, Jupyter" },
  { title: "Data & Analytics", skills: "Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL" },
];
