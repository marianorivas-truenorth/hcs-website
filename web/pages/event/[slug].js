import React from 'react';
import Link from 'next/link';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import Layout from '../../components/Layout';
import { Banner } from '../../components/sections';

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
  } = props;
  // console.log(events);

  return (
    <Layout>
      <article>
        <section className="bg-gray-200">
          <div className="max-w-screen-xl mx-auto py-8">
            <Link href="/events-and-media">
              <a className="text-secondary-600 flex items-center">
                <span className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L9.41 1.41L3.83 7H16V9H3.83L9.41 14.59L8 16L0 8L8 0Z"
                      fill="#D17249"
                    />
                  </svg>
                </span>
                <span>Events & Media</span>
              </a>
            </Link>
          </div>
        </section>

        <section className="bg-gray-200">
          <div className="max-w-screen-lg mx-auto py-8">
            <h1 className="text-4xl mb-8">{title}</h1>
            <div className="md:flex items-center">
              <div className="md:w-3/5">
                <div className="text-2xl font-bold">May 20, 2021, 3:30 pm</div>
                <div className="mt-2">
                  Online Event:{' '}
                  <a href="#" className="text-secondary-600 font-bold underline">
                    Zoom Link
                  </a>
                </div>
                <p className="mt-2">Presented by Governor John Carney & Dignitaries</p>
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

              {/* {authorImage && ( */}
              <div className="md:w-2/5">
                <figure className="w-full mb-4">
                  <img
                    src="/assets/images/our-history/HCS-floorplan.jpg"
                    // src={urlFor(authorImage).width(50).url()}
                    alt="Floorplan"
                    className="w-full rounded-lg shadow-lg"
                  />
                </figure>
              </div>
              {/* )} */}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-lg mx-auto py-16 post">
            <p>
              Nam commodo suscipit quam. Nulla porta dolor. Nunc sed turpis. Quisque ut nisi.
              Suspendisse feugiat.{' '}
            </p>

            <h1>Title (Heading 1) </h1>

            <p>
              Vestibulum suscipit nulla quis orci. Etiam ut purus mattis mauris sodales aliquam.
              Praesent congue erat at massa. Vestibulum eu odio. Donec posuere vulputate arcu. Fusce
              pharetra convallis urna. Vivamus laoreet. Proin sapien ipsum, porta a, auctor quis,
              euismod ut, mi. Quisque malesuada placerat nisl. <a href="#">Inline link example </a>
            </p>

            <h2>Subtitle (Heading 2) </h2>
            <p>
              Curabitur blandit mollis lacus. Proin magna. Phasellus dolor. Vestibulum volutpat
              pretium libero. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Proin magna.
              Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Donec sodales sagittis
              magna. Vivamus euismod mauris. Mauris sollicitudin fermentum libero.
            </p>

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

const query = groq`*[_type == "event" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
