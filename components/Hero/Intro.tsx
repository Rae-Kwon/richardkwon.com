import { m } from "framer-motion";
import Clouds from "./Clouds";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center z-50">
        <div className="px-8 m-auto">
          <div className="font-headings flex flex-row self-start text-4xl xs:text-7xl">
            <h1>Hi!</h1>
            <m.div
              animate={{ rotate: [0, 60, 0, 60, 0] }}
              whileTap={{ rotate: 0 }}
              className="change-cursor ml-3"
            >
              👋
            </m.div>
          </div>
          <div className="flex self-start font-headings text-4xl xs:text-7xl">
            <h1>I&apos;m Richard</h1>
          </div>
          <div className="flex self-start font-headings text-4xl xs:text-7xl">
            <h1>Software Developer</h1>
          </div>
        </div>
      </div>
      <Clouds />
    </>
  );
};
export default Intro;
