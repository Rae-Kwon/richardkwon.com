import projectData from "../../public/data/projects/index.json";
import Header from "../Header";
import Projects from "./Projects";

const Works = () => {
  return (
    <section id="projects">
      <div className="mx-10 sm:mx-32">
        <Header heading="Projects" />
        <div className="flex flex-col gap-52 w-fit">
          <Projects data={projectData} />
        </div>
      </div>
    </section>
  );
};
export default Works;
