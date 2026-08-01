import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
  metric?: string;
  links?: {
    website?: string;
    github?: string;
  };
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  skills,
  metric,
  links,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={featured ? "grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-10 items-start" : "h-full flex flex-col"}>
      {imageUrl && (
        <div className={`relative w-full aspect-video border border-hairline overflow-hidden bg-paper ${featured ? "" : "mb-4"}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-contain"
          />
        </div>
      )}

      <div className={`flex flex-col flex-1 ${featured ? "lg:pt-2" : ""}`}>
        <div className="flex justify-between items-baseline gap-3 mb-2">
          <h3 className={`font-semibold text-ink text-balance ${featured ? "text-2xl sm:text-3xl tracking-tight" : "text-lg"}`}>
            {title}
          </h3>
          <span className="font-mono text-xs text-muted shrink-0">{date}</span>
        </div>

        <p className={`text-muted leading-relaxed ${featured ? "text-base mb-5" : "text-sm mb-3"}`}>
          {description}
        </p>

        {metric && (
          <p className={`reading mb-4 ${featured ? "text-sm" : "text-xs"}`}>
            {metric.includes('→') ? (
              <>
                {metric.split('→')[0]}
                <span className="reading-arrow">&#8594;</span>
                {metric.split('→')[1]}
              </>
            ) : (
              metric
            )}
          </p>
        )}

        <div className="pt-1 space-y-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span key={index} className="chip">
                {skill}
              </span>
            ))}
          </div>

          {links && (
            <div className="flex gap-4">
              {links.website && (
                <a
                  href={links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-accent hover:underline underline-offset-4"
                >
                  Live Demo &#8599;
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-muted hover:text-ink transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
