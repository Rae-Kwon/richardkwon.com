import Image from "next/image";

interface SkillProps {
  name: string;
  logoSrc: string;
}

const Skill = ({ name, logoSrc }: SkillProps) => {
  return (
    <div className="flex flex-col items-center sm:basis-0">
      <div>
        <Image
          src={require(`../../public/icons/${logoSrc}.png`).default}
          width={40}
          height={40}
          alt={`${name} logo`}
        />
      </div>

      <p className="text-center">{name}</p>
    </div>
  );
};
export default Skill;
