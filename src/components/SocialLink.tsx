type SocialLinkProps = {
  name: string;
  description: string;
  url: string;
  username: string;
  isLast?: boolean;
};

export default function SocialLink({ 
  name, 
  description, 
  url, 
  username, 
  isLast = false 
}: SocialLinkProps) {
  return (
    <div className={`flex justify-between items-center py-3 ${!isLast ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
      <div>
        <h3 className="font-medium text-sm dark:text-white">{name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm text-primary hover:text-primary-hover transition-colors"
      >
        {username} ↗
      </a>
    </div>
  );
}
