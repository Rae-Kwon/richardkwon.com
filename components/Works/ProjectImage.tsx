import Image from "next/image";

interface ProjectImageProps {
  image: string;
  description: string;
}

const ProjectImage = ({ image, description }: ProjectImageProps) => {
  return (
    <div className="block max-w-[1280px] w-full">
      <Image
        src={image}
        alt={description}
        width={1280}
        height={720}
        layout="responsive"
        sizes="(min-width: 1540px) 1280px, (min-width: 1024px) 854px, (min-width: 768px) 640px"
        loading="lazy"
      />
    </div>
  );
};
export default ProjectImage;
