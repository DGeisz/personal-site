import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../global_building_blocks/header/header";
import Footer from "../global_building_blocks/footer/footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Danny Geisz</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
