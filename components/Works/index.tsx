import Header from "../Header";
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
    <section id="projects">
      <div className="mx-10 sm:mx-32">
        <Header heading="Projects" />
        <div className="flex flex-col gap-52 w-fit">
          <Projects projectData={projectData} />
        </div>
      </div>
    </section>
  );
};
export default Works;
