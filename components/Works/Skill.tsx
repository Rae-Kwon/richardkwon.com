import Image from "next/image";

interface SkillProps {
  tech: { name: string; logoSrc: string };
}

const Skill = ({ tech }: SkillProps) => {
  return (
    <div className="flex flex-col items-center w-20 sm:basis-0">
      <Image
        src={tech.logoSrc}
        alt={`${tech.name} logo`}
        width={40}
        height={40}
      />
      <p className="text-center">{tech.name}</p>
    </div>
  );
};
export default Skill;
