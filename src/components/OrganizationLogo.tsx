import Image from "next/image";

type OrganizationLogoProps = {
  src: string;
  alt: string;
};

export default function OrganizationLogo({ src, alt }: OrganizationLogoProps) {
  const needsWhiteBacking = src === "/images/badr-interactive.png";

  return (
    <div className="w-12 h-10 shrink-0 flex items-center">
      <div className={`relative w-10 h-10 ${needsWhiteBacking ? "bg-white" : ""}`}>
        {needsWhiteBacking ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-9 h-6">
              <Image src={src} alt={alt} fill loading="eager" sizes="36px" className="object-contain" />
            </div>
          </div>
        ) : (
          <Image src={src} alt={alt} fill loading="eager" sizes="40px" className="object-contain" />
        )}
      </div>
    </div>
  );
}
