import type { Ref } from "react";
import Link from "next/link";
import { navTo } from "./helperFunctions";

interface BarProps {
  menuItems: string[];
  refObj?: Ref<HTMLDivElement>;
  barInView?: boolean;
}

const Bar = ({ menuItems, refObj }: BarProps) => {
  return (
    <nav
      className="flex w-full justify-center h-14 font-subheadings pt-10"
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
export default Bar;
