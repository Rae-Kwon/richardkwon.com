import type { Dispatch } from "react";
import { useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import ActionArrow from "./ActionArrow";
import Intro from "./Intro";
import SunMoonContainer from "./SunMoonContainer";

interface HeroProps {
  isHeroRendered: boolean;
  setHeroRender: Dispatch<boolean>;
}

const Hero = ({ isHeroRendered, setHeroRender }: HeroProps) => {
  const { height } = useScreenSize();

  useEffect(() => setHeroRender(true), []);

  if (!isHeroRendered) return null;

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
