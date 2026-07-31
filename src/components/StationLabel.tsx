import { ReactNode } from "react";

type StationLabelProps = {
  number: string;
  children: ReactNode;
};

export default function StationLabel({ number, children }: StationLabelProps) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="station-num">STA {number}</span>
      <h2 className="text-ink mt-0 mb-0">{children}</h2>
    </div>
  );
}
