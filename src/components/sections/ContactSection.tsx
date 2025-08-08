import ScrollReveal from '@/components/ScrollReveal';
import { personalData } from '@/data/personal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8 tracking-tight dark:text-white">
              {personalData.contact.greeting}
            </h1>
            
            <div className="mb-4">
              <a 
                href={`mailto:${personalData.email}`}
                className="text-lg text-primary hover:text-primary-hover transition-colors font-medium"
              >
                📫 {personalData.email}
              </a>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300">
              {personalData.contact.description}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}