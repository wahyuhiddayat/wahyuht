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
    // Hapus 'flex' dan 'gap' dari sini, dan tambahkan 'overflow-hidden'
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg transition hover:border-blue-500 overflow-hidden">
      {/* Thumbnail sekarang di atas dan memenuhi lebar kartu */}
      {imageUrl && (
        // Gunakan aspect-ratio untuk ukuran gambar yang konsisten (misal: 16:9)
        <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover" // object-cover akan memastikan gambar tidak penyok
          />
        </div>
      )}
      
      {/* Konten teks sekarang berada di bawah gambar dengan padding */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-sm pr-4">{title}</h3>
          <span className="text-xs text-gray-500 shrink-0">{date}</span>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
          {skills.length > 5 && (
            <span className="text-xs text-gray-400">+{skills.length - 5}</span>
          )}
        </div>
        {links && (
          // 'mt-auto' akan mendorong tautan ke bagian paling bawah kartu
          <div className="flex gap-4 mt-auto">
            {links.website && (
              <Link
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Website →
              </Link>
            )}
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Source →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}