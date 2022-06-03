import { useInView } from "react-intersection-observer";
import Bar from "./Bar";
import Tabs from "./Tabs";

const Navbar = () => {
  const { ref, inView } = useInView();
  const menuItems = ["Home", "Projects", "About", "Contact", "Resume"];
  return (
    <>
      <Bar menuItems={menuItems} refObj={ref} />
      <Tabs menuItems={menuItems} barInView={inView} />
    </>
  );
};
export default Navbar;
