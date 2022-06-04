import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { LazyMotion } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LazyMotion
      features={async () => (await import("../framerFeatures")).default}
      strict
    >
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </LazyMotion>
  );
};
export default MyApp;
