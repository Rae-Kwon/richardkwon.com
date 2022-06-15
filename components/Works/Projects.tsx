import Project from "./Project";

interface ProjectDataTypes {
  id: number;
  title: string;
  name: string;
  description: string;
  technologies: { name: string; logoSrc: string }[];
  image: string;
  imageDescription: string;
  siteLink?: string;
  githubLink: string;
}

interface ProjectsProps {
  projectData: ProjectDataTypes[];
}

const Projects = ({ projectData }: ProjectsProps) => {
  return (
    <>
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};
export default Projects;
