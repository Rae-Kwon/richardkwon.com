import { m } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";
import CloudInside from "./CloudInside";

interface CloudProps {
  cloudDuration: number;
  cloudScale: number;
  cloudStartPos: string;
}

const Cloud = ({ cloudDuration, cloudScale, cloudStartPos }: CloudProps) => {
  const { width } = useScreenSize();
  return (
    <m.div
      className={`bg-[#f7e7eb] dark:bg-[#807774] relative mt-[33px] mb-0 ml-[${cloudStartPos}] mr-0 w-[54px] h-[10px] -z-50 rounded-[10px]`}
      initial={{ x: -165, scale: cloudScale }}
      animate={{ x: width + 70 }}
      transition={{ duration: cloudDuration, repeat: Infinity }}
    >
      <CloudInside />
      <CloudInside />
      <CloudInside />
    </m.div>
  );
};
export default Cloud;
