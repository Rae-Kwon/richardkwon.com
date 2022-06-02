import projectData from "../../public/data/projects/index.json";
import Projects from "./Projects";

const Works = () => {
  return (
    <section id="works" className="pt-28 pb-56 overflow-x-hidden">
      <div className="flex flex-col justify-center gap-72">
        <Projects data={projectData} />
      </div>
    </section>
  );
};
export default Works;
