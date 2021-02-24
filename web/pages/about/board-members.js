import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Banner, PageHeader } from '@/components/sections';

const Member = ({ picture, name, role }) => {
  return (
    <article className="text-center">
      <figure className="mx-4 mb-2">
        {picture ? (
          <img
            src={picture}
            alt={name}
            className="w-48 h-48 rounded-full border-4 border-gray-300"
          />
        ) : (
          <div className="w-48 h-48 rounded-full border-4 border-gray-300 bg-gray-400"></div>
        )}
      </figure>
      <div className="mt-2">
        {name ? <div className="text-lg text-gray-900 font-serif">{name}</div> : null}
        {role ? <div className="text-base text-gray-700 leading-tight">{role}</div> : null}
      </div>
    </article>
  );
};

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>Meet Our Board Members | {config.title}</title>
      </Head>

      <PageHeader page="About Us" title="Meet Our Board Members" />

      {/* board */}
      <section className="px-8 py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
          <Member
            picture="/assets/images/board-members/thumb.png"
            name="David J. Wilk"
            role="Director of RE Program, Asst. Professor, Temple Fox School of Business"
          />
        </div>

        <div className="mt-24 text-center text-gray-600 text-lg">
          Friends of Hockessin Colored School #107 Inc. is a 509(a)(2) Public Charity under (IRC)
          Section 501(c)(3).
        </div>
      </section>

      <Banner
        title="Learn how you can get involved"
        action="There are so many ways to contribute"
        link="#"
        icon="/assets/images/illustration-skate.svg"
      />
    </Layout>
  );
}

export default Index;
