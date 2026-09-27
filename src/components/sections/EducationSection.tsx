import SectionHeading from "@/components/SectionHeading";
import OrganizationLogo from "@/components/OrganizationLogo";
import { educationData, type Education } from "@/data/education";

/** Shows one degree in the same organization-then-detail layout as experience. */
function EducationItem({ degree, institution, period, logo, url }: Education) {
  return (
    <article className="entry">
      <div className="entry-org">
        <OrganizationLogo src={logo} alt={`${institution} logo`} />
        <div className="entry-org-name">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink hover:text-accent transition-colors"
            >
              {institution}
            </a>
          ) : (
            <p className="font-semibold text-ink">{institution}</p>
          )}
        </div>
      </div>

      <div className="entry-body entry-title-row">
        <h3 className="text-title">{degree}</h3>
        <span className="text-meta whitespace-nowrap">{period}</span>
      </div>
    </article>
  );
}

/** Renders Wahyu's education history. */
export default function EducationSection() {
  return (
    <section id="education" className="section">
      <SectionHeading title="Education" />
      <div>
        {educationData.map((education) => (
          <EducationItem key={`${education.institution}-${education.degree}`} {...education} />
        ))}
      </div>
    </section>
  );
}
