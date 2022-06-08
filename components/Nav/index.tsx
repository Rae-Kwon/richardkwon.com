import { useInView } from "react-intersection-observer";
import useScreenSize from "../../hooks/useScreenSize";
import Bar from "./Bar";
import MenuBurger from "./MenuBurger";
import Tabs from "./Tabs";

const Navbar = () => {
  const { ref, inView } = useInView();
  const { width } = useScreenSize();
  const menuItems = ["Home", "Projects", "About", "Contact", "Resume"];
  return (
    <>
      {width >= 450 ? (
        <Bar menuItems={menuItems} refObj={ref} />
      ) : (
        <MenuBurger menuItems={menuItems} refObj={ref} />
      )}

      <Tabs menuItems={menuItems} barInView={inView} />
    </>
  );
};
export default Navbar;
