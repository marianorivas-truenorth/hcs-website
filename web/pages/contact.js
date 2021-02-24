import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Banner, PageHeader, PressContact } from '@/components/sections';
import ContactForm from '@/components/ContactForm';

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>Contact | {config.title}</title>
      </Head>

      <PageHeader page="Contact" title="We would love to hear from you" />

      <section className="max-w-screen-xl mx-auto py-16">
        <div className="md:flex">
          <article className="md:w-3/5">
            <ContactForm />
          </article>

          <aside className="md:w-2/5 md:ml-20">
            <address className="not-italic">
              <p>
                4266 Millcreek Road
                <br />
                Hockessin, Delaware 19707
              </p>
              <a href="tel:302-540-5959">302-540-5959</a>
              <br />
              <a href="mailto:profdavid77@gmail.com">profdavid77@gmail.com</a>
            </address>
            <figure className="mt-10">
              <a
                href="https://www.google.com/maps/place/4266+Millcreek+Rd,+Hockessin,+DE+19707,+%C3%89tats-Unis/@39.7846109,-75.7005831,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6ff9dbd981419:0xd121638817db8b5f!8m2!3d39.7846109!4d-75.6983944?hl=fr"
                target="_blank"
              >
                <img src="/assets/images/gmap.png" alt="GMap" />
              </a>
            </figure>
          </aside>
        </div>
      </section>

      <PressContact />

      <Banner
        title="Learn how you can get involved"
        action="There are so many ways to contribute"
        link="/get-involved"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

export default Index;
