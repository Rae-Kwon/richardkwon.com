import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </ThemeProvider>
  );
};
export default MyApp;
