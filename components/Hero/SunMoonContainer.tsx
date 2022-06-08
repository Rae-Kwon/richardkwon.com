import { useTheme } from "next-themes";
import Moon from "./Moon";
import Sun from "./Sun";

const SunMoonContainer = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="h-1/4 flex justify-center items-center">
      <Sun theme={resolvedTheme} setTheme={setTheme} />
      <Moon theme={resolvedTheme} setTheme={setTheme} />
    </div>
  );
};
export default SunMoonContainer;
