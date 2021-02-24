import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Banner, PageHeader, PressContact } from '@/components/sections';
import Card from '@/components/Card';

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>HCS in the Press | {config.title}</title>
      </Head>

      <PageHeader page="About Us" title="HCS in the Press" />

      <section className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto py-16 border-b border-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <PressContact />

      <Banner
        title="Continue learning about HCS #107"
        action="Check our our Events & Media"
        link="#"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

export default Index;
