import Skill from "./Skill";

interface SkillsProps {
  technologies: { name: string; logoSrc: string }[];
}

const Skills = ({ technologies }: SkillsProps) => {
  return (
    <div className="flex justify-center gap-20 flex-wrap w-full">
      {technologies.map((tech, index) => (
        <Skill key={index} tech={tech} />
      ))}
    </div>
  );
};
export default Skills;
