import { useTheme } from "next-themes";
import Image from "next/image";
import { m } from "framer-motion";
import GitHubLogoLight from "../../public/icons/GitHub-Mark-Light.png";
import GitHubLogoDark from "../../public/icons/GitHub-Mark-Dark.png";

const GithubLogo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <m.div
      className="flex text-center w-14 h-14"
      whileHover={{ scale: 1.25, transition: { durtation: 0.5 } }}
    >
      <a
        target="_blank"
        href="https://github.com/Rae-Kwon"
        rel="noopener noreferrer"
      >
        <Image
          src={resolvedTheme === "dark" ? GitHubLogoLight : GitHubLogoDark}
          alt="Github Logo"
          className="cursor-pointer"
          loading="lazy"
          placeholder="blur"
        />
        <p className="font-text">Github Profile</p>
      </a>
    </m.div>
  );
};
export default GithubLogo;
