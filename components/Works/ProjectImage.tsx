import Image from "next/image";

interface ProjectImageProps {
  image: string;
  name: string;
}

const ProjectImage = ({ image, name }: ProjectImageProps) => {
  return (
    <div className="mx-auto max-w-full md:max-w-[970px]">
      <Image
        src={require(`../../public/data/projects/images/${image}.png`).default}
        alt={`Preview screenshot of ${name}`}
        layout="responsive"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
      />
    </div>
  );
};
export default ProjectImage;
