import SectionHeading from "@/components/SectionHeading";
import OrganizationLogo from "@/components/OrganizationLogo";
import { educationData, type Education } from "@/data/education";

function EducationItem({ degree, institution, period, logo, url }: Education) {
  return (
    <div className="log-row">
      <div className="self-center font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{period}</div>

      <div className="flex items-center gap-3">
        <OrganizationLogo src={logo} alt={`${institution} logo`} />
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
    <section id="education" className="py-14 lg:py-20 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Education</SectionHeading>
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
      </div>
    </section>
  );
}
