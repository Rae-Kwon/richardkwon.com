import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-sky-400 dark:bg-midnight-blue overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
