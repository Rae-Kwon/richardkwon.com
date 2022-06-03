import Link from "next/link";
import { navTo } from "./helperFunctions";
import Icon from "./Icon";

interface TabProps {
  item: string;
  link: string;
}

const Tab = ({ item, link }: TabProps) => {
  if (link === "resume") {
    return (
      <a href={navTo(link)} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center cursor-pointer">
          <Icon link={link} />
          <li>{item}</li>
        </div>
      </a>
    );
  }
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
