import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}
