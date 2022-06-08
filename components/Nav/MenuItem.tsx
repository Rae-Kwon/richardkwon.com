import type { MouseEventHandler } from "react";
import Link from "next/link";
import { navTo } from "./helperFunctions";
import Icon from "./Icon";

interface MenuItemProps {
  item: string;
  link: string;
  closeMenu: MouseEventHandler<HTMLDivElement>;
}

const MenuItem = ({ item, link, closeMenu }: MenuItemProps) => {
  if (link === "resume") {
    return (
      <a href={navTo(link)} target="_blank" rel="noopener noreferrer">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={closeMenu}
        >
          <Icon link={link} />
          <p>{item}</p>
        </div>
      </a>
    );
  }
  return (
    <Link href={navTo(link)} scroll={false} prefetch={false}>
      <div
        className="flex items-center gap-6 mb-10 cursor-pointer"
        onClick={closeMenu}
      >
        <Icon link={link} />
        <p>{item}</p>
      </div>
    </Link>
  );
};
export default MenuItem;
