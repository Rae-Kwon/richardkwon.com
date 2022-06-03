import type { ReactNode } from "react";
import { m } from "framer-motion";

interface OutLinkProps {
  link: string;
  children: ReactNode;
  text: string;
}

const OutLink = ({ link, children, text }: OutLinkProps) => {
  return (
    <a target="_blank" href={link} rel="noopener noreferrer">
      <m.div
        className="flex flex-col items-center"
        whileHover={{ scale: 1.25, transition: { durtation: 0.5 } }}
      >
        {children}
        <p className="text-center">{text}</p>
      </m.div>
    </a>
  );
};
export default OutLink;
