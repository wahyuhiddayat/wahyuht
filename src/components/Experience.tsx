import Image from 'next/image';

type ExperienceItemProps = {
  company: string;
  position: string;
  period: string;
  description: string;
  logoUrl?: string;
  skills?: string[];
};

export default function ExperienceItem({
  company,
  position,
  period,
  description,
  logoUrl,
  skills,
}: ExperienceItemProps) {
  return (
    <div className="timeline-item mb-10 last:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        {logoUrl && (
          <div className="hidden md:block">
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
        
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
            <h3 className="font-bold text-lg">{company}</h3>
            <span className="text-sm text-gray-500 sm:hidden">{period}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
            <p className="font-medium text-gray-700 dark:text-gray-300">{position}</p>
            <span className="hidden sm:block text-sm text-gray-500">{period}</span>
          </div>
          
          <p className="text-sm mb-3">{description}</p>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}