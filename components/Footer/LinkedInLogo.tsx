import Image from "next/image";

import LinkedInStamp from "../../public/icons/LinkedIn-Logo.png";

const LinkedInLogo = () => {
  return (
    <div className="flex hover:scale-110">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/rmjkwon/"
        rel="noopener noreferrer"
      >
        <Image
          src={LinkedInStamp}
          alt="LinkedIn Logo"
          width={64}
          height={54.425}
          placeholder="blur"
          className="dark:brightness-150 cursor-pointer"
        />
      </a>
    </div>
  );
};
export default LinkedInLogo;
