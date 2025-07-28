'use client'

import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  skills: string[];
  slug?: string;
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
  slug,
  links,
}: ProjectCardProps) {
  const handleCardClick = () => {
    if (slug) {
      window.location.href = `/projects/${slug}`;
    }
  };

  return (
    <div 
      className={`group h-full flex flex-col p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm dark:hover:shadow-gray-900/20 transition-all duration-200 ${slug ? 'cursor-pointer' : ''}`}
      onClick={slug ? handleCardClick : undefined}
    >
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
          <h3 className="font-medium text-sm dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">{title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
        </div>
        
        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 flex-1">
          {description}
        </p>
        
        <div className="pt-1 space-y-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {slug && (
              <span className="text-xs text-primary">
                Project Details →
              </span>
            )}
            {links?.website && (
              <Link
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo ↗
              </Link>
            )}
            {links?.github && (
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}