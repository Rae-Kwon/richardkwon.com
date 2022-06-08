import { useState } from "react";
import { useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import ActionArrow from "./ActionArrow";
import Intro from "./Intro";
import SunMoonContainer from "./SunMoonContainer";

const Hero = () => {
  const [isMounted, setMounted] = useState(false);
  const { height } = useScreenSize();

  useEffect(() => setMounted(true), []);

  if (!isMounted) return null;

  return (
    <section
      className="flex flex-col break-word"
      style={{ height: `${height}px` }}
    >
      <SunMoonContainer />
      <Intro />
      <ActionArrow />
    </section>
  );
};
export default Hero;
