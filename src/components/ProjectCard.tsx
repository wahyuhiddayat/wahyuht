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
    <div className="group space-y-4 pb-8">
      {imageUrl && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm dark:text-white">{title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
        </div>
        
        <div className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          {description.split('\n').map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-gray-400 dark:text-gray-500 mt-0.5">•</span>
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-1 space-y-2">
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
                  className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
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