import { motion } from "framer-motion";

const variants = {
  isDark: {
    translateY: -1000,
    opacity: 0,
    ease: "easeIn",
    transition: { type: "spring", duration: 5, stiffness: 50 },
    originX: 0.5,
  },
  isLight: {
    translateY: 0,
    opacity: 1,
    ease: "easeIn",
    transition: { type: "spring", duration: 5, stiffness: 50 },
    originX: 0.5,
  },
};

const Sun = ({ theme, setTheme }: any) => {
  return (
    <motion.div
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme("dark")}
      animate={theme === "dark" ? "isDark" : "isLight"}
      variants={variants}
      initial={false}
      className="w-40 h-40 rounded-full shadow-xl shadow-orange-400 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-200 absolute"
      role="button"
    />
  );
};
export default Sun;
