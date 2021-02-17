import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Source+Sans+Pro:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="antialiased w-full text-gray-800 text-xl">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
