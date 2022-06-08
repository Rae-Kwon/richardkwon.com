import { m } from "framer-motion";

const Intro = () => {
  return (
    <div className="row-start-2 flex flex-col content-center justify-center px-8 gap-4 mx-auto h-1/2">
      <div className="font-headings flex flex-row text-4xl xs:text-7xl">
        <h1>Hi!</h1>
        <m.div
          animate={{ rotate: [0, 60, 0, 60, 0] }}
          whileTap={{ rotate: 0 }}
          className="change-cursor ml-3"
        >
          👋
        </m.div>
      </div>
      <div className="font-headings text-4xl xs:text-7xl">
        <h1>I&apos;m Richard</h1>
      </div>
      <div className="font-headings text-4xl xs:text-7xl">
        <h1>Software Developer</h1>
      </div>
    </div>
  );
};
export default Intro;
