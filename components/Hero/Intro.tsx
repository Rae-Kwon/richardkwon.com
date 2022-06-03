import { m } from "framer-motion";

const Intro = () => {
  return (
    <div className="flex flex-col content-center justify-center px-8">
      <div className="font-headings flex flex-row">
        <h1 className="hero-heading stroke-black dark:stroke-white">Hi!</h1>
        <m.div
          animate={{ rotate: [0, 60, 0, 60, 0] }}
          whileTap={{ rotate: 0 }}
          className="change-cursor hero-heading ml-3"
        >
          👋
        </m.div>
      </div>
      <div className="font-headings hero-heading">
        <h1 className="stroke-black dark:stroke-white">
          I&apos;m Richard
          <br />
          Software Developer
        </h1>
      </div>
    </div>
  );
};
export default Intro;
