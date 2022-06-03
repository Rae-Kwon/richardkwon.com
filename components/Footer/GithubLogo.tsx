import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubLogoLight from "../../public/icons/GitHub-Mark-Light.png";
import GitHubLogoDark from "../../public/icons/GitHub-Mark-Dark.png";

const GithubLogo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <motion.div
      className="flex text-center"
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
          width={55}
          height={55}
          className="cursor-pointer"
        />
        <p className="font-text">Github Profile</p>
      </a>
    </motion.div>
  );
};
export default GithubLogo;
