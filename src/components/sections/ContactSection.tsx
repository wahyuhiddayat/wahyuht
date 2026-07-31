import SectionHeading from '@/components/SectionHeading';
import { personalData } from '@/data/personal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-36 scroll-mt-16">
      <div>
        <SectionHeading>Contact</SectionHeading>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-ink mb-5 text-balance">
          {personalData.contact.greeting}
        </h3>

        <p className="text-muted mb-4 max-w-[60ch]">
          {personalData.contact.description}
        </p>

        <a
          href={`mailto:${personalData.email}`}
          className="inline-flex min-h-11 items-center text-lg sm:text-xl font-medium text-accent underline underline-offset-4 decoration-hairline hover:decoration-accent transition-colors"
        >
          {personalData.email}
        </a>
      </div>
    </section>
  );
}
