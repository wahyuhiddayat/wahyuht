import RealTimeClock from "@/components/RealTimeClock";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

/** Pairs Wahyu's biography with quick facts. */
export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About" />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <p className="text-lg text-ink leading-relaxed max-w-[65ch] lg:col-span-7">
          {personalData.bio}
        </p>

        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-4 lg:col-start-9">
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
