import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen h-14 font-subheadings fixed">
      <ul className="flex flex-row gap-x-8vw justify-end items-center mr-20 h-14">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#works">Works</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
