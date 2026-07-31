import ScrollReveal from '@/components/ScrollReveal';
import StationLabel from '@/components/StationLabel';
import { personalData } from '@/data/personal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-10">
      <ScrollReveal>
        <StationLabel number="07">Contact</StationLabel>

        <h2 className="text-2xl font-semibold tracking-tight text-ink mb-3">
          {personalData.contact.greeting}
        </h2>

        <p className="text-muted mb-4 max-w-[60ch]">
          {personalData.contact.description}
        </p>

        <a
          href={`mailto:${personalData.email}`}
          className="font-mono text-accent hover:opacity-75 transition-opacity"
        >
          {personalData.email}
        </a>
      </ScrollReveal>
    </section>
  );
}
