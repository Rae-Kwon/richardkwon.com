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
          src={`/icons/${logoSrc}.png`}
          width={40}
          height={40}
          alt={`${name} logo`}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
        />
      </div>

      <p className="text-center">{name}</p>
    </div>
  );
};
export default Skill;
