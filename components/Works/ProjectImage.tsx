import Image from "next/image";

interface ProjectImageProps {
  image: string;
  name: string;
}

const ProjectImage = ({ image, name }: ProjectImageProps) => {
  return (
    <div className="max-w-[1280px] w-full">
      <Image
        src={require(`../../public/data/projects/images/${image}.png`).default}
        alt={`Preview screenshot of ${name}`}
        width={1280}
        height={720}
        layout="responsive"
        sizes="128, 256, 384, 640, 750, 828, 1080, 1200, 1920"
        loading="lazy"
      />
    </div>
  );
};
export default ProjectImage;
