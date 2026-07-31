import Image from 'next/image';
import Link from 'next/link';

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
};

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  skills,
  metric,
  links,
}: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col">
      {imageUrl && (
        <div className="relative w-full aspect-video border border-hairline overflow-hidden mb-3 bg-paper">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-baseline gap-2 mb-1.5">
          <h3 className="font-semibold text-sm text-ink">{title}</h3>
          <span className="font-mono text-xs text-muted shrink-0">{date}</span>
        </div>

        <p className="text-xs text-muted leading-relaxed mb-2">
          {description}
        </p>

        {metric && (
          <p className="reading text-xs mb-3">
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
                <Link
                  href={links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:opacity-75 transition-opacity"
                >
                  Live Demo &#8599;
                </Link>
              )}
              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-ink transition-colors"
                >
                  Source Code
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
