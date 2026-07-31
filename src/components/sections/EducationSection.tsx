import ScrollReveal from "@/components/ScrollReveal";
import StationLabel from "@/components/StationLabel";
import Image from "next/image";
import { educationData, type Education } from "@/data/education";

function EducationItem({ degree, institution, period, logo, url }: Education) {
  return (
    <div className="log-row">
      <div className="font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{period}</div>

      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 shrink-0 border border-hairline overflow-hidden bg-paper">
          <Image
            src={logo}
            alt={`${institution} logo`}
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-ink text-sm sm:text-base" style={{ textWrap: 'balance' } as any}>
            {degree}
          </p>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-xs sm:text-sm mt-0.5 hover:text-accent transition-colors inline-block"
            >
              {institution}
            </a>
          ) : (
            <p className="text-muted text-xs sm:text-sm mt-0.5">{institution}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-10 border-b border-hairline">
      <ScrollReveal>
        <StationLabel number="05">Education</StationLabel>
        <div>
          {educationData.map((education, index) => (
            <EducationItem
              key={index}
              degree={education.degree}
              institution={education.institution}
              period={education.period}
              logo={education.logo}
              url={education.url}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
