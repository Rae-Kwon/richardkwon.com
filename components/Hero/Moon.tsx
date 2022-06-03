import { m } from "framer-motion";

const variants = {
  isDark: {
    translateY: 0,
    opacity: 1,
    ease: "easeIn",
    transition: { type: "spring", duration: 5, stiffness: 50 },
    originX: 0.5,
  },
  isLight: {
    translateY: -1000,
    opacity: 0,
    ease: "easeIn",
    transition: { type: "spring", duration: 5, stiffness: 50 },
    originX: 0.5,
  },
};

const Moon = ({ theme, setTheme }: any) => {
  return (
    <m.div
      aria-label="Toggle Light Mode"
      onClick={() => setTheme("light")}
      animate={theme === "dark" ? "isDark" : "isLight"}
      variants={variants}
      initial={false}
      className="w-40 h-40 rounded-full bg-white shadow-xl shadow-white absolute"
      role="button"
    />
  );
};
export default Moon;
