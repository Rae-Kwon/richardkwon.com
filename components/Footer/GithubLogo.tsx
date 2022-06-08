import Image from "next/image";
import { m } from "framer-motion";
import GitHubLogo from "../../public/icons/GitHub-Mark-Light.png";

const GithubLogo = () => {
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
          src={GitHubLogo}
          alt="Github Logo"
          loading="lazy"
          placeholder="blur"
        />
        <p className="font-text">Github Profile</p>
      </a>
    </m.div>
  );
};
export default GithubLogo;
