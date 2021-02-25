import React from 'react';
import groq from 'groq';
import Link from 'next/link';
import Head from 'next/head';
import client from '../../client';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PressContact from '@/components/PressContact';
import CardPress from '@/components/CardPress';
import Banner from '@/components/Banner';

function Index(props) {
  const { config, posts = [] } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>HCS in the Press | {config.title}</title>
      </Head>

      <PageHeader page="About Us" title="HCS in the Press" />

      <section className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => post.link && <CardPress data={post} key={post._id} />)}
          </div>
        </div>
      </section>

      <PressContact />

      <Banner
        title="Continue learning about HCS #107"
        action="Check our our Events & Media"
        link="/events-and-media"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "press"]|order(publishedAt desc)
  `),
});

export default Index;
