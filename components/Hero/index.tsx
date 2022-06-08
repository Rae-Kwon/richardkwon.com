import type { Dispatch } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import ActionArrow from "./ActionArrow";
import Intro from "./Intro";
import SunMoonContainer from "./SunMoonContainer";

interface HeroProps {
  setHeroRender: Dispatch<boolean>;
}

const Hero = ({ setHeroRender }: HeroProps) => {
  const [isMounted, setMounted] = useState(false);
  const { height } = useScreenSize();

  useEffect(() => setMounted(true), []);
  useEffect(() => setHeroRender(true), [setHeroRender]);

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
