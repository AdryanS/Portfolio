import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

// import { Container } from './styles';

const document: React.FC = () => {
  return (
    <Html>
      <Head>
        <title>Dev | AdryanS</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
