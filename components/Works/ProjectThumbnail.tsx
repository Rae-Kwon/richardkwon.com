import Image from "next/image";

interface ProjectThumbnailProps {
  thumbnail?: string;
  description?: string;
}

const ProjectThumbnail = ({
  thumbnail,
  description,
}: ProjectThumbnailProps) => {
  return (
    <div className="mx-auto max-w-full md:max-w-[600px]">
      <Image
        src={require(`../../public/data/projects/thumbnails/${thumbnail}.svg`)}
        alt={description}
        className="rounded-xl"
      />
    </div>
  );
};
export default ProjectThumbnail;
