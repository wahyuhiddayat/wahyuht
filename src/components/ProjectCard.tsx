import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
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
  links,
}: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm dark:hover:shadow-gray-900/20 transition-all duration-200">
      {imageUrl && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain group-hover:opacity-80 transition-opacity duration-200"
          />
        </div>
      )}
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-sm dark:text-white">{title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
        </div>
        
        <div className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 flex-1">
          {description.split('\n').map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-gray-400 dark:text-gray-500 mt-0.5">•</span>
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-1 space-y-2 mt-auto">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {skills.join(' • ')}
          </p>
          
          {links && (
            <div className="flex gap-4">
              {links.website && (
                <Link
                  href={links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-primary-hover transition-colors"
                >
                  Live Demo ↗
                </Link>
              )}
              {links.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
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