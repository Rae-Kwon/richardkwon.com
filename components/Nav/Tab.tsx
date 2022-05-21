import Link from "next/link";

import type { TabProps } from "./types";
import { navTo } from "./helperFunctions";
import Icon from "./Icon";

const Tab = ({ item, link }: TabProps) => {
  return (
    <div className="flex flex-col items-center">
      <Icon link={link} />
      <li>
        <Link href={navTo(link)}>{item}</Link>
      </li>
    </div>
  );
};
export default Tab;
