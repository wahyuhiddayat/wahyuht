import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

/** Renders a section title in the left column of the section grid. */
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
}
