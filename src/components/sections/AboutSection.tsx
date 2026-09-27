import RealTimeClock from "@/components/RealTimeClock";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

/** Pairs Wahyu's biography with quick facts, on the same column split as Experience. */
export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About" />

      {/*
        Same split as .entry in Experience and Education: facts where organizations sit,
        the bio indented to the .entry-body line so it starts under the role titles.
        The bio comes first in the markup so it reads first on mobile.
      */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <p className="text-muted leading-relaxed max-w-[70ch] lg:col-span-8 lg:col-start-5 lg:ml-[5px] lg:pl-6">
          {personalData.bio}
        </p>

        <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:col-span-4 lg:row-start-1">
          <div>
            <dt className="fact-label">Languages</dt>
            <dd className="fact-value">{personalData.languages}</dd>
          </div>
          <div>
            <dt className="fact-label">Personality</dt>
            <dd className="fact-value">{personalData.personality}</dd>
          </div>
          <div>
            <dt className="fact-label">Local time</dt>
            <dd className="fact-value"><RealTimeClock /></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
