import { motion } from "framer-motion";

const variants = {
  isDark: { translateX: 0, opacity: 1, ease: "easeOut" },
  isLight: { translateY: -1000, opacity: 0, ease: "easeIn" },
};

const Moon = ({ theme, setTheme }: any) => {
  return (
    <motion.div
      aria-label="Toggle Light Mode"
      onClick={() => setTheme("light")}
      animate={theme === "dark" ? "isDark" : "isLight"}
      variants={variants}
      initial={false}
      className="w-40 h-40 rounded-full bg-white shadow-xl shadow-white absolute"
    />
  );
};
export default Moon;
