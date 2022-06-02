import Link from "next/link";

import type { TabProps } from "./types";
import { navTo } from "./helperFunctions";
import Icon from "./Icon";

const Tab = ({ item, link }: TabProps) => {
  return (
    <Link href={navTo(link)}>
      <div className="flex flex-col items-center cursor-pointer">
        <Icon link={link} />
        <li>{item}</li>
      </div>
    </Link>
  );
};
export default Tab;
