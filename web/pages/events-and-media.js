import React from 'react';
import groq from 'groq';
import Link from 'next/link';
import Head from 'next/head';
import Scrollspy from 'react-scrollspy';
import client from '../client';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CardEvent from '@/components/CardEvent';
import CardPost from '@/components/CardPost';
import Banner from '@/components/Banner';

function Index(props) {
  const { config, posts = [], events = [] } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>Events & Media | {config.title}</title>
      </Head>

      <PageHeader page="Events & Media" title="Don’t miss out!" />

      <article className="relative">
        {/* Sticky links */}
        <section className="bg-primary-500 shadow-xl sticky top-14 md:top-0 z-40">
          <div className="max-w-screen-lg mx-auto text-center text-white py-4">
            <nav className="stickynav flex items-center justify-center">
              <Scrollspy items={['Events', 'Media']} currentClassName="active">
                <a href="#Events" className="button shadow-none mx-1 text-base md:mx-2 md:text-xl">
                  Events
                </a>
                <a href="#Media" className="button shadow-none mx-1 text-base md:mx-2 md:text-xl">
                  Media
                </a>
              </Scrollspy>
            </nav>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="Events" className="px-8 pt-32 pb-16 bg-gray-200">
          <div className="max-w-screen-xl mx-auto">
            <h4 className="text-3xl text-center">Upcoming Events</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-16">
              {events.map((event) => event.slug && <CardEvent data={event} key={event._id} />)}
            </div>
            {/* <div className="text-center mt-20">
            <button className="inline-flex items-center text-gray-500 text-lg">
              <span className="mr-4">See More Events</span>
              <span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                    fill="#999999"
                  />
                </svg>
              </span>
            </button>
          </div> */}
          </div>
        </section>

        {/* Media */}
        <section id="Media" className="px-8 py-32 bg-gray-200">
          <div className="max-w-screen-xl mx-auto">
            <h4 className="text-3xl text-center">Media</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-16">
              {posts.map(
                (post) =>
                  post.slug && (
                    <div key={post._id}>
                      <CardPost data={post} />
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      </article>

      <Banner
        title="So what’s next for HCS #107?"
        action="Learn about our vision for the future"
        link="/about/vision"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  events: await client.fetch(groq`
    *[_type == "event"]|order(date desc)
  `),
  posts: await client.fetch(groq`
    *[_type == "post"]|order(publishedAt desc)
  `),
});

export default Index;
