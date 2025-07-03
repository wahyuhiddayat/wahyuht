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
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-6">
          GET IN TOUCH
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
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-6">
          FIND ME ONLINE
        </h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-medium text-sm dark:text-white">GitHub</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Check out my code and projects</p>
            </div>
            <a 
              href="https://github.com/wahyuhiddayat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              @wahyuhiddayat ↗
            </a>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-medium text-sm dark:text-white">LinkedIn</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Professional network and experience</p>
            </div>
            <a 
              href="https://www.linkedin.com/in/wahyuuhidayat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              wahyuuhidayat ↗
            </a>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-medium text-sm dark:text-white">Kaggle</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Data science competitions and datasets</p>
            </div>
            <a 
              href="https://www.kaggle.com/wahyuuhidaayat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              wahyuuhidaayat ↗
            </a>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-medium text-sm dark:text-white">Hugging Face</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">ML models and datasets</p>
            </div>
            <a 
              href="https://huggingface.co/wahyuhidayat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              wahyuhidayat ↗
            </a>
          </div>

          <div className="flex justify-between items-center py-3">
            <div>
              <h3 className="font-medium text-sm dark:text-white">Instagram</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Personal updates and behind-the-scenes</p>
            </div>
            <a 
              href="https://www.instagram.com/wahyyuhidaayat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              @wahyyuhidaayat ↗
            </a>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section>
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-6">
          WHAT I'M LOOKING FOR
        </h2>
        
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Internship Opportunities</h3>
            <p>Machine learning, software engineering, or data science roles</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Collaboration Projects</h3>
            <p>Open source contributions, research projects, or startup ideas</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">Learning Opportunities</h3>
            <p>Mentorship, tech talks, or interesting conversations about AI/ML</p>
          </div>
        </div>
      </section>
    </div>
  );
}