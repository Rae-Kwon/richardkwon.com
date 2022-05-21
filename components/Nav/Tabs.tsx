import { motion } from "framer-motion";

import type { NavProps } from "./types";
import Tab from "./Tab";

const container = {
  hidden: { opacity: 0, y: 1000 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.25,
      mass: 0.45,
    },
    y: 0,
  },
};

const Tabs = ({ menuItems, barInView }: NavProps) => {
  return (
    <motion.nav
      className="flex justify-center items-center w-full h-20 fixed bottom-0 bg-blue-400"
      variants={container}
      animate={barInView ? "hidden" : "show"}
    >
      <ul className="flex w-full justify-evenly">
        {menuItems.map((item, index) => {
          const link = item.toLowerCase();
          return <Tab key={index} item={item} link={link} />;
        })}
      </ul>
    </motion.nav>
  );
};
export default Tabs;
