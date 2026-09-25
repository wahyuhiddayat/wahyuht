import RealTimeClock from "@/components/RealTimeClock";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

/** Pairs Wahyu's biography with quick facts at a readable line length. */
export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 border-b border-hairline scroll-mt-16">
      <div className="section-grid">
        <SectionHeading>About</SectionHeading>
        <div className="section-body grid grid-cols-1 lg:grid-cols-9 gap-10 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-ink text-lg sm:text-xl leading-relaxed max-w-[62ch]">
              {personalData.bio}
            </p>
          </div>

          <div className="lg:col-span-3 pt-6 lg:pt-0 lg:pl-8 lg:border-l lg:border-hairline lg:flex lg:items-center">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-5 w-full">
              <div className="space-y-1">
                <span className="font-mono text-muted text-xs uppercase tracking-wide block">
                  Location
                </span>
                <p className="text-ink text-sm font-medium">
                  {personalData.location}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-muted text-xs uppercase tracking-wide block">
                  Local Time
                </span>
                <RealTimeClock />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-muted text-xs uppercase tracking-wide block">
                  Languages
                </span>
                <p className="text-ink text-sm font-medium">
                  {personalData.languages}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-muted text-xs uppercase tracking-wide block">
                  Personality
                </span>
                <p className="text-ink text-sm font-medium">
                  {personalData.personality}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
