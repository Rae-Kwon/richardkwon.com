import Link from "next/link";
import { navTo } from "./helperFunctions";
import Icon from "./Icon";

interface TabProps {
  item: string;
  link: string;
}

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
