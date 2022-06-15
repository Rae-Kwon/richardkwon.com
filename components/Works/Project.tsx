import { m } from "framer-motion";
import ProjectImage from "./ProjectImage";
import ProjectThumbnail from "./ProjectThumbnail";
import Title from "./Title";

const projectContainer = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hover: { y: -10 },
};

interface ProjectTypes {
  id: number;
  title: string;
  name: string;
  description: string;
  category?: string;
  technologies: { name: string; logoSrc: string }[];
  image: string;
  imageDescription: string;
  thumbnail?: string;
  thumbnailDescription?: string;
  siteLink?: string;
  githubLink: string;
}

interface ProjectProps {
  project: ProjectTypes;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <m.div
      className="w-full mx-auto bg-gray-200 pt-12 px-12 pb-16 rounded-2xl cursor-pointer 2xl:max-w-[1536px] dark:bg-gray-700"
      variants={projectContainer}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="mb-10">
        <p className="font-text">{project.category}</p>
        <Title title={project.title} />
      </div>
      {project.thumbnail ? (
        <ProjectThumbnail
          thumbnail={project.thumbnail}
          description={project.thumbnailDescription}
        />
      ) : (
        <ProjectImage image={project.image} name={project.name} />
      )}
    </m.div>
  );
};
export default Project;
