import { useTheme } from "next-themes";
import Image from "next/image";
import GitHubLogoLight from "../../public/icons/GitHub-Mark-Light.png";
import GitHubLogoDark from "../../public/icons/GitHub-Mark-Dark.png";

const GithubLogo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex hover:scale-110">
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
      </a>
    </div>
  );
};
export default GithubLogo;
