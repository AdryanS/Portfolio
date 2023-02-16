import Head from "next/head";
import "../src/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Adryan Rodrigues | Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
