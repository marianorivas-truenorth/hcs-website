import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import groq from 'groq';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '@/components/Layout';
import Tag from '@/components/Tag';
import { Banner } from '@/components/sections';

const Post = (props) => {
  const {
    config,
    title = 'Missing title',
    publishedAt,
    author,
    tags,
    mainImage,
    body = [],
  } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>
          {title} | {config.title}
        </title>
      </Head>
      <article>
        <section className="bg-gray-200">
          <div className="max-w-screen-lg mx-auto py-8 relative">
            <Link href="/events-and-media">
              <a className="md:absolute top-0 left-0 md:-ml-16 my-7 text-white bg-primary-900 hover:bg-primary-600 transition-colors ease-in-out duration-200 flex w-10 h-10 rounded-full items-center justify-center shadow-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L11.41 3.41L5.83 9H18V11H5.83L11.41 16.59L10 18L2 10L10 2Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>

            <div className="mb-8">
              {tags?.length > 0 ? (
                tags.map((tag) => {
                  if (tag !== '') return <Tag label={tag} key={tag} />;
                })
              ) : (
                <Tag label="Media" />
              )}
            </div>

            <h1 className="text-4xl mb-8">{title}</h1>

            <div className="md:flex items-center">
              <div className="md:w-3/5">
                <div className="text-xl font-bold">{new Date(publishedAt).toDateString()}</div>
                {author ? <p className="mt-2">By {author}</p> : null}

                {/* Social Sharing */}
                <nav className="my-8">
                  <a href="#" className="inline-block mr-4">
                    <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
                  </a>
                  <a href="#" className="inline-block mr-4">
                    <img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a href="#" className="inline-block mr-4">
                    <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
                  </a>
                </nav>
              </div>

              {mainImage && (
                <div className="md:w-2/5">
                  <figure className="w-full mb-4">
                    <img
                      src="/assets/images/our-history/HCS-floorplan.jpg"
                      src={urlFor(mainImage).width(620).url()}
                      alt="Floorplan"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </figure>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-lg mx-auto py-16 post">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>
        </section>
      </article>

      <Banner
        title="Questions?"
        action="Get in contact with HCS #107 Staff"
        link="/contact"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  link,
  author,
  summary,
  mainImage,
  tags,
  body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
