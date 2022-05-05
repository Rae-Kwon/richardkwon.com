import { motion } from "framer-motion";

const ActionArrow = () => {
  return (
    <div className="flex justify-center items-end mb-8">
      <div className="flex flex-col items-center">
        <h3 className="hero-action-heading">See what I can do</h3>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ translateY: [0, 5, 0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </div>
    </div>
  );
};
export default ActionArrow;
