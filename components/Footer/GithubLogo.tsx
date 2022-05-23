import { useTheme } from "next-themes";
import Image from "next/image";
import GitHubLogoLight from "../../public/icons/GitHub-Mark-Light.png";
import GitHubLogoDark from "../../public/icons/GitHub-Mark-Dark.png";

const GithubLogo = () => {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <Image src={GitHubLogoLight} alt="Github Logo" width={55} height={55} />
    );
  } else {
    return (
      <Image src={GitHubLogoDark} alt="Github Logo" width={55} height={55} />
    );
  }
};
export default GithubLogo;
