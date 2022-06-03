import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="bg-sky-400 dark:bg-midnight-blue overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
