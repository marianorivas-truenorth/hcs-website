import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import PressContact from '@/components/PressContact';
import Banner from '@/components/Banner';

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>404 | {config.title}</title>
      </Head>

      <PageHeader page="Error 404" title="Page not found" />

      <Banner
        title="So what’s next?"
        action="Go to HCS #107 homepage"
        link="/"
        icon="/assets/images/illustration-skate.svg"
      />
    </Layout>
  );
}

export default Index;
