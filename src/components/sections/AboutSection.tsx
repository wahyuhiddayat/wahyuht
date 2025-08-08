import ScrollReveal from "@/components/ScrollReveal";
import { personalData } from "@/data/personal";


export default function AboutSection() {
  return (
    <section id="about" className="py-6">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Bio */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                About
              </h2>
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalData.bio}
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="lg:col-span-4 pt-6 lg:pt-0 lg:pl-8 lg:border-l lg:border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-3 lg:space-y-0">
                <div className="text-sm lg:mb-4">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">Location</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{personalData.location}</p>
                </div>
                
                <div className="text-sm lg:mb-4">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">Status</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{personalData.status}</p>
                </div>
                
                <div className="text-sm lg:mb-4">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">Languages</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{personalData.languages}</p>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">Remote</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{personalData.remote}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}