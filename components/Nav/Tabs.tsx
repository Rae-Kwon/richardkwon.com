import type { Ref } from "react";
import { m } from "framer-motion";
import Tab from "./Tab";

interface TabsProps {
  menuItems: string[];
  refObj?: Ref<HTMLDivElement>;
  barInView?: boolean;
}

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

const Tabs = ({ menuItems, barInView }: TabsProps) => {
  return (
    <m.nav
      className="flex justify-center items-center w-full h-24 fixed bottom-0 shadow-lg bg-blue-400 dark:bg-blue-500 z-10"
      variants={container}
      animate={barInView ? "hidden" : "show"}
    >
      <div className="flex w-full justify-evenly">
        {menuItems.map((item, index) => {
          const link = item.toLowerCase();
          return <Tab key={index} item={item} link={link} />;
        })}
      </div>
    </m.nav>
  );
};
export default Tabs;
