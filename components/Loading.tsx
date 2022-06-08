import { m } from "framer-motion";
import LoadingDot from "./LoadingDot";

const loadingVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Loading = () => {
  return (
    <m.div
      className="h-screen flex justify-center items-center gap-10"
      variants={loadingVariant}
      initial="hidden"
      animate="visible"
    >
      <LoadingDot />
      <LoadingDot />
      <LoadingDot />
    </m.div>
  );
};
export default Loading;
