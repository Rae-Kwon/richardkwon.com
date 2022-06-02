import Image from "next/image";

interface ProjectImageProps {
  image: string;
  description: string;
}

const ProjectImage = ({ image, description }: ProjectImageProps) => {
  return (
    <div>
      <Image src={image} alt={description} width={1280} height={720} priority />
    </div>
  );
};
export default ProjectImage;
