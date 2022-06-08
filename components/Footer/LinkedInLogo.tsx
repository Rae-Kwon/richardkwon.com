import Image from "next/image";
import { m } from "framer-motion";
import LinkedInStamp from "../../public/icons/LinkedIn-Logo.png";

const LinkedInLogo = () => {
  return (
    <m.div
      className="flex text-center w-[64px] h-[54.425]"
      whileHover={{ scale: 1.25, transition: { durtation: 0.5 } }}
    >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/rmjkwon/"
        rel="noopener noreferrer"
      >
        <Image
          src={LinkedInStamp}
          alt="LinkedIn Logo"
          className="dark:brightness-150 cursor-pointer"
          loading="lazy"
          placeholder="blur"
        />
        <p className="font-text">LinkedIn Profile</p>
      </a>
    </m.div>
  );
};
export default LinkedInLogo;
