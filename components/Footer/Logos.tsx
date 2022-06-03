import CodeIcon from "./CodeIcon";
import GithubLogo from "./GithubLogo";
import LinkedInLogo from "./LinkedInLogo";

const Logos = () => {
  return (
    <div className="flex w-full justify-evenly">
      <GithubLogo />
      <CodeIcon />
      <LinkedInLogo />
    </div>
  );
};
export default Logos;
