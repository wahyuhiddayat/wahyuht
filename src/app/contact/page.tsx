import SocialLink from '@/components/SocialLink';

const socialLinksData = [
  {
    name: "GitHub",
    description: "Check out my code and projects",
    url: "https://github.com/wahyuhiddayat",
    username: "@wahyuhiddayat"
  },
  {
    name: "LinkedIn",
    description: "Professional network and experience",
    url: "https://www.linkedin.com/in/wahyuuhidayat/",
    username: "wahyuuhidayat"
  },
  {
    name: "Kaggle",
    description: "Data science competitions and datasets",
    url: "https://www.kaggle.com/wahyuuhidaayat",
    username: "wahyuuhidaayat"
  },
  {
    name: "Hugging Face",
    description: "ML models and datasets",
    url: "https://huggingface.co/wahyuhidayat",
    username: "wahyuhidayat"
  },
  {
    name: "Instagram",
    description: "Personal updates and behind-the-scenes",
    url: "https://www.instagram.com/wahyyuhidaayat/",
    username: "@wahyyuhidaayat"
  }
];

const opportunitiesData = [
  {
    title: "Internship Opportunities",
    description: "Machine learning, software engineering, or data science roles"
  },
  {
    title: "Collaboration Projects",
    description: "Open source contributions, research projects, or startup ideas"
  },
  {
    title: "Learning Opportunities",
    description: "Mentorship, tech talks, or interesting conversations about AI/ML"
  }
];

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold mb-4 tracking-tight dark:text-white">
          Let's Connect
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
        </p>
      </header>

      {/* Contact Methods */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Get in Touch
        </h2>
        
        <div className="space-y-6">
          {/* Email */}
          <div className="group">
            <h3 className="font-medium text-sm mb-2 dark:text-white">Email</h3>
            <a 
              href="mailto:wahyuuhidaayat@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              wahyuuhidaayat@gmail.com
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Best for professional inquiries • I typically respond within 24 hours
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-medium text-sm mb-2 dark:text-white">Location</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Jakarta, Indonesia
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              GMT+7 • Available for remote work
            </p>
          </div>

          {/* Response Time */}
          <div>
            <h3 className="font-medium text-sm mb-2 dark:text-white">Availability</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Open to full-time opportunities starting January 2026
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Currently available for internships and part-time projects
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Find Me Online
        </h2>
        
        <div className="space-y-4">
          {socialLinksData.map((social, index) => (
            <SocialLink
              key={index}
              name={social.name}
              description={social.description}
              url={social.url}
              username={social.username}
              isLast={index === socialLinksData.length - 1}
            />
          ))}
        </div>
      </section>

     {/* What I'm Looking For */}
      <section>
        <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
          What I'm Looking For
        </h2>

        <div className="space-y-6">
          {opportunitiesData.map((opportunity, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {opportunity.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}