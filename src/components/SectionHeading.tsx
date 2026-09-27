import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  /** A link or short note set against the title on wide screens. */
  aside?: ReactNode;
};

/** Renders the shared section header: the section title with an optional aside on the right. */
export default function SectionHeading({ title, aside }: SectionHeadingProps) {
  return (
    <header className="section-header">
      <h2 className="text-headline lg:col-span-8">{title}</h2>
      {aside && <div className="lg:col-span-4 lg:self-end lg:text-right">{aside}</div>}
    </header>
  );
}
