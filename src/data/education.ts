export interface Education {
  degree: string;
  institution: string;
  period: string;
  logo: string;
  url?: string;
}

export const educationData: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universitas Indonesia",
    period: "Aug 2022 – Jul 2026",
    logo: "/images/logos/universitas-indonesia.png",
    url: "https://cs.ui.ac.id"
  },
];
