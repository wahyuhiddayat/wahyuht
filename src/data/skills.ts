export interface SkillCategory {
  title: string;
  skills: string;
}

export const skillsData: SkillCategory[] = [
  { title: "Languages", skills: "Python, JavaScript, TypeScript, Java, Go, Dart, SQL" },
  { title: "AI & Machine Learning", skills: "Natural Language Processing, Computer Vision, Deep Learning, LLMs, RAG" },
  { title: "ML Frameworks", skills: "PyTorch, TensorFlow, Scikit-learn, Hugging Face, OpenCV" },
  { title: "Web & Frameworks", skills: "React, Next.js, Vue.js, Django, Spring Boot, FastAPI, Flutter, Bun, Streamlit" },
  { title: "Data & Analytics", skills: "Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL, Elasticsearch, Pinecone, FAISS" },
  { title: "Tools & Cloud", skills: "Git, Docker, Kubernetes, AWS, GCP, Prometheus, Grafana, Jupyter" },
];
