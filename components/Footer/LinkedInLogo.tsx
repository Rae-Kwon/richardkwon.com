import Image from "next/image";

import LinkedInStamp from "../../public/icons/LinkedIn-Logo.png";

const LinkedInLogo = () => {
  return (
    <Image
      src={LinkedInStamp}
      alt="LinkedIn Logo"
      width={64}
      height={54.425}
      placeholder="blur"
      className="dark:brightness-150"
    />
  );
};
export default LinkedInLogo;
