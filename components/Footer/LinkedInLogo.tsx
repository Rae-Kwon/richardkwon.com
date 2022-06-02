import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInStamp from "../../public/icons/LinkedIn-Logo.png";

const LinkedInLogo = () => {
  return (
    <motion.div
      className="flex text-center"
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
          width={64}
          height={54.425}
          placeholder="blur"
          className="dark:brightness-150 cursor-pointer"
        />
        <p>LinkedIn Profile</p>
      </a>
    </motion.div>
  );
};
export default LinkedInLogo;
