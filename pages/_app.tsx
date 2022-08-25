import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sortera Mera!</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
