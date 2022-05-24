import type { Dispatch } from "react";
import { motion } from "framer-motion";

interface SuccessProps {
  setSuccess: Dispatch<boolean>;
}

const circleVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
};

const outlineVariant = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

const Success = ({ setSuccess }: SuccessProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="100%"
        height="100%"
        variants={circleVariant}
        initial="initial"
        animate="animate"
      >
        <motion.path
          fill="none"
          stroke="#ffffff"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M64 25A39 39 0 1 0 64 103A39 39 0 1 0 63 25Z"
          variants={outlineVariant}
        />
        <motion.path
          fill="#198754"
          d="M64 25A39 39 0 1 0 64 103A39 39 0 1 0 64 25Z"
        />
        <motion.path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M42 69L55.55 81 86 46"
          variants={outlineVariant}
        />
      </motion.svg>
      <p className="mt-5 text-white font-text">Need to send another message?</p>
      <button
        type="button"
        className="w-40 px-5 py-2 mt-5 rounded bg-dark-cerulean dark:bg-light-cyan text-white dark:text-black font-text active:ring-2 active:ring-sky-400"
        onClick={() => setSuccess(false)}
      >
        Back to form
      </button>
    </div>
  );
};
export default Success;
