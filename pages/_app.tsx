import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Navbar } from "../components/Navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.UMAMI_SCRIPT_URL && process.env.UMAMI_WEBSITE_ID && (
        <Script
          src={process.env.UMAMI_SCRIPT_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
          strategy="lazyOnload"
        />
      )}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
