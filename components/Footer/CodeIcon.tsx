import { motion } from "framer-motion";

const CodeIcon = () => {
  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.25, transition: { durtation: 0.5 } }}
    >
      <a
        target="_blank"
        href="https://github.com/Rae-Kwon/richardkwon.com/"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[55px] w-[55px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <p className="font-text">Source Code</p>
      </a>
    </motion.div>
  );
};
export default CodeIcon;
