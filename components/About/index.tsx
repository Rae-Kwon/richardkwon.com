import { m } from "framer-motion";
import Description from "./Description";
import Header from "../Header";

const aboutContainer = {
  hidden: { opacity: 0, x: -150 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75 } },
};

const About = () => {
  return (
    <m.section
      id="about"
      className="h-fit m-10 sm:m-32"
      variants={aboutContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Header heading="About Me" />
      <Description />
    </m.section>
  );
};
export default About;
