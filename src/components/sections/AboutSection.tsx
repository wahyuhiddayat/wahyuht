import ScrollReveal from "@/components/ScrollReveal";
import RealTimeClock from "@/components/RealTimeClock";
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="lg:col-span-4 pt-6 lg:pt-0 lg:pl-8 lg:border-l lg:border-gray-200 dark:lg:border-gray-700">
              {/* gunakan gap-y buat kontrol jarak vertikal antar item */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-5">
                <div className="text-sm space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">
                    Location
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {personalData.location}
                  </p>
                </div>

                <div className="text-sm space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">
                    Local Time
                  </span>
                  <RealTimeClock />
                </div>

                <div className="text-sm space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">
                    Languages
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {personalData.languages}
                  </p>
                </div>

                <div className="text-sm space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide block">
                    Status
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {personalData.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}