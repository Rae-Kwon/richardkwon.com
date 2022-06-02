import projectData from "../../public/data/projects/index.json";
import Projects from "./Projects";

const Works = () => {
  return (
    <section id="works" className="pt-28 pb-56">
      <div className="flex flex-col justify-center gap-20">
        <Projects data={projectData} />
      </div>
    </section>
  );
};
export default Works;
