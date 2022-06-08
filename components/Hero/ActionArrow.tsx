import { m } from "framer-motion";
import Link from "next/link";

const ActionArrow = () => {
  return (
    <div className="row-start-3 flex justify-center items-end mt-auto mb-20">
      <Link href="#projects" scroll={false} prefetch={false}>
        <div className="flex flex-col items-center cursor-pointer">
          <h2 className="hero-action-heading">See what I can do</h2>
          <m.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ translateY: [0, 5, 0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </m.svg>
        </div>
      </Link>
    </div>
  );
};
export default ActionArrow;
