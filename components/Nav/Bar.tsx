import Link from "next/link";
import { navTo } from "./helperFunctions";

import type { NavProps } from "./types";

const bar = ({ menuItems, refObj }: NavProps) => {
  return (
    <nav
      className="flex w-full justify-center h-14 font-subheadings"
      ref={refObj}
    >
      <ul className="flex w-4/5 justify-around items-center">
        {menuItems.map((item, index) => {
          const link = item.toLowerCase();
          return (
            <li key={index}>
              <Link href={navTo(link)}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default bar;
