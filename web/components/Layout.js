import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  const { config, children } = props;

  if (!config) {
    console.error('Missing config');
    return <div>Missing config</div>;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Source+Sans+Pro:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5ebd8f" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="Transforming the historic Hockessin school that ended segregation into a Center for Diversity, Inclusion & Social Equity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hockessincoloredschool107.org/" />
        <meta property="og:title" content="Hockessin Colored School #107" />
        <meta
          property="og:description"
          content="Transforming the historic Hockessin school that ended segregation into a Center for Diversity, Inclusion & Social Equity."
        />
        <meta
          property="og:image"
          content="https://hockessincoloredschool107.org/assets/images/socialmedia.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hockessincoloredschool107.org/" />
        <meta property="twitter:title" content="Hockessin Colored School #107" />
        <meta
          property="twitter:description"
          content="Transforming the historic Hockessin school that ended segregation into a Center for Diversity, Inclusion & Social Equity."
        />
        <meta
          property="twitter:image"
          content="https://hockessincoloredschool107.org/assets/images/socialmedia.png"
        />
      </Head>
      <div className="antialiased w-full text-gray-800 text-xl">
        <Header />
        <main>{children}</main>
        <Footer
          facebookUrl={config.facebookUrl}
          linkedinUrl={config.linkedinUrl}
          twitterUrl={config.twitterUrl}
        />
      </div>
    </>
  );
}

export default Layout;
