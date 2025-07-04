type SkillCategoryProps = {
  title: string;
  skills: string;
};

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <p className="font-medium mb-1">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">
        {skills}
      </p>
    </div>
  );
}
