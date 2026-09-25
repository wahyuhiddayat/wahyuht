import SectionHeading from '@/components/SectionHeading';
import { personalData } from '@/data/personal';

/** Presents a direct email invitation at the close of the page. */
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:pt-16 lg:pb-28 scroll-mt-16">
      <div className="section-grid">
        <SectionHeading>Contact</SectionHeading>

        <div className="section-body grid gap-5 lg:grid-cols-2 lg:gap-12">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-ink text-balance">
            {personalData.contact.greeting}
          </h3>

          <div>
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
        </div>
      </div>
    </section>
  );
}
