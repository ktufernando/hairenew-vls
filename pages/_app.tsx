import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default MyApp;
