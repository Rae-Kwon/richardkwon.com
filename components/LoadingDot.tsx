import { m } from "framer-motion";

const dotVariant = {
  hidden: {
    y: "0%",
  },
  visible: {
    y: "100%",
  },
};

const LoadingDot = () => {
  return (
    <m.div
      className="h-16 w-16 rounded-full bg-white"
      variants={dotVariant}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    ></m.div>
  );
};
export default LoadingDot;
