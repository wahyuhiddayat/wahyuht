type SkillCategoryProps = {
  title: string;
  skills: string;
};

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  const items = skills.split(",").map((skill) => skill.trim());

  return (
    <div>
      <p className="font-mono text-muted text-xs uppercase tracking-wide mb-2">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
