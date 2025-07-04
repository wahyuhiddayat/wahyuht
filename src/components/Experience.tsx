type ExperienceItemProps = {
  position: string;
  company: string;
  period: string;
};

export default function ExperienceItem({
  position,
  company,
  period,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <p className="font-medium">{position}</p>
        <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">{period}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {company}
      </p>
    </div>
  );
}