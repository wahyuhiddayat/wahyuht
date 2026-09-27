import Image from 'next/image';
import { personalData } from '@/data/personal';

const LINKEDIN_URL = "https://www.linkedin.com/in/wahyyuht/";

/** Closes the page with a direct invitation to get in touch. */
export default function ContactSection() {
  return (
    <section id="contact" className="section border-b-0 text-center">
      <Image
        src="/images/profile/avatar.webp"
        alt="Portrait of Wahyu"
        width={96}
        height={96}
        sizes="96px"
        className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border border-hairline"
      />
      <h2 className="text-headline">{personalData.contact.greeting}</h2>
      <p className="text-muted leading-relaxed mt-4 max-w-md mx-auto">
        {personalData.contact.description}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href={`mailto:${personalData.email}`} className="btn-primary">
          Send me an email
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Connect on LinkedIn
        </a>
      </div>
      <p className="text-meta mt-5">{personalData.email}</p>
    </section>
  );
}
