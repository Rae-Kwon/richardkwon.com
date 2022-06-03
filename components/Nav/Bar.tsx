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
      <div className="flex w-4/5 justify-around items-center">
        {menuItems.map((item, index) => {
          const link = item.toLowerCase();
          return (
            <div key={index}>
              {link === "resume" ? (
                <a
                  href="/RichardKwonResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              ) : (
                <Link href={navTo(link)}>{item}</Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
export default Bar;
