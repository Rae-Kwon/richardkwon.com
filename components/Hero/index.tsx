import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ActionArrow from "./ActionArrow";
import Intro from "./Intro";
import Moon from "./Moon";
import Sun from "./Sun";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="h-screen grid grid-rows-3 justify-center break-word">
      <div className="flex justify-center items-center">
        <Sun theme={theme} setTheme={setTheme} />
        <Moon theme={theme} setTheme={setTheme} />
      </div>
      <Intro />
      <ActionArrow />
    </header>
  );
};
export default Hero;
