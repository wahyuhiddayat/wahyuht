import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="pt-32 pb-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h1>
      
      <div className="max-w-xl mx-auto mt-12">
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          A collection of my work, side projects, and experiments.
        </p>
        
        <div className="space-y-10">
          <ProjectCard
            title="Project One"
            description="A web application for tracking personal finances and creating budgets. Built with React and Node.js, this app helps users manage their expenses, set financial goals, and visualize spending patterns through interactive charts."
            date="2023"
            skills={["React", "Node.js", "MongoDB", "Chart.js"]}
            links={{
              website: "#",
              github: "https://github.com/yourusername/project-one"
            }}
          />
          
          <ProjectCard
            title="Project Two"
            description="An e-commerce platform with integrated payment processing and inventory management. Features include user authentication, product search with filters, shopping cart functionality, secure checkout with Stripe, and an admin dashboard for inventory control."
            date="2022"
            skills={["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"]}
            links={{
              website: "#",
              github: "https://github.com/yourusername/project-two"
            }}
          />
          
          <ProjectCard
            title="Project Three"
            description="A collaborative task management tool for remote teams. This application enables teams to create projects, assign tasks, set deadlines, track progress, and communicate through an integrated chat system. Real-time updates are powered by Firebase."
            date="2022"
            skills={["React", "Firebase", "Material UI", "Redux"]}
            links={{
              website: "#",
              github: "https://github.com/yourusername/project-three"
            }}
          />
          
          <ProjectCard
            title="Project Four"
            description="A portfolio website template for creative professionals. This customizable template includes sections for showcasing work, skills, testimonials, and contact information. Animations are implemented using GSAP for smooth transitions and scroll effects."
            date="2021"
            skills={["HTML/CSS", "JavaScript", "GSAP", "Responsive Design"]}
            links={{
              website: "#",
              github: "https://github.com/yourusername/project-four"
            }}
          />
        </div>
      </div>
    </div>
  );
} 