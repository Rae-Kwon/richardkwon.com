import type { ComponentState } from "react";
import { Ref, useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import MenuItem from "./MenuItem";

interface MenuBurgerProps {
  menuItems: string[];
  refObj: Ref<HTMLDivElement>;
}

const MenuBurger = ({ menuItems, refObj }: MenuBurgerProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: ComponentState) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div ref={refObj} className="h-14">
      <Menu
        isOpen={menuOpen}
        onStateChange={(state: ComponentState) => handleStateChange(state)}
        right
        width={"50%"}
        burgerButtonClassName="absolute right-4 top-4 h-4 w-6"
        burgerBarClassName="h-full w-full bg-black dark:bg-white"
        crossButtonClassName="h-4 w-4"
        crossClassName="h-full w-full bg-black dark:bg-white"
        menuClassName="bg-gray-400"
        itemListClassName="py-6 px-2"
      >
        {menuItems.map((item, index) => {
          const link = item.toLowerCase();
          return (
            <MenuItem
              key={index}
              item={item}
              link={link}
              closeMenu={closeMenu}
            />
          );
        })}
      </Menu>
    </div>
  );
};
export default MenuBurger;
