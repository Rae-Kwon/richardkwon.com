import Projects from "./Projects";

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

interface WorksProps {
  projectData: ProjectDataTypes[];
}

const Works = ({ projectData }: WorksProps) => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 gap-16 w-4/5 mx-auto xs:gap-28"
    >
      <Projects projectData={projectData} />
    </section>
  );
};
export default Works;
