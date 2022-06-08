import Image from "next/image";

interface SkillProps {
  tech: { name: string; logoSrc: string };
}

const Skill = ({ tech }: SkillProps) => {
  return (
    <div className="flex flex-col items-center sm:basis-0">
      <div>
        <Image
          src={require(`../../public/icons/${tech.logoSrc}`).default}
          width={40}
          height={40}
          alt={`${tech.name} logo`}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
        />
      </div>

      <p className="text-center">{tech.name}</p>
    </div>
  );
};
export default Skill;
