import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });
  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    detectSize();

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return windowDimension;
};
export default useScreenSize;
