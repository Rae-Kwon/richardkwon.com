import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="flex flex-col content-center justify-center px-8">
      <div className="font-headings flex flex-row">
        <h1 className="hero-heading stroke-black dark:stroke-white">Hi!</h1>
        <motion.div
          animate={{ rotate: [0, 60, 0, 60, 0] }}
          whileTap={{ rotate: 0 }}
          className="change-cursor hero-heading ml-3"
        >
          👋
        </motion.div>
      </div>
      <div className="font-headings hero-heading">
        <h1 className="stroke-black dark:stroke-white">
          I&apos;m Richard
          <br />
          Software Developer
        </h1>
      </div>
      <h2 className="font-subheadings stroke-black dark:stroke-white">
        I learn to develop, and develop to learn
      </h2>
    </div>
  );
};
export default Intro;
