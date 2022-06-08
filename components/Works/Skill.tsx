import Image from "next/image";

interface SkillProps {
  tech: { name: string; logoSrc: string };
}

const Skill = ({ tech }: SkillProps) => {
  return (
    <div className="flex flex-col items-center sm:basis-0">
      <div>
        <Image
          src={require(`../../public/icons/${tech.logoSrc}.png`).default}
          width={40}
          height={40}
          alt={`${tech.name} logo`}
        />
      </div>

      <p className="text-center">{tech.name}</p>
    </div>
  );
};
export default Skill;
