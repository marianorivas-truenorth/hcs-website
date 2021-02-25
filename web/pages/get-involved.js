import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Scrollspy from 'react-scrollspy';
import client from '../client';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Banner from '@/components/Banner';
import ButtonDonate from '@/components/ButtonDonate';
import VolunteerForm from '@/components/VolunteerForm';
import Mailchimp from '@/components/Mailchimp';

const IconFlag = ({ className }) => (
  <span className={className}>
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z" fill="#5EBD8F" />
    </svg>
  </span>
);

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>Get Involver | {config.title}</title>
      </Head>

      <PageHeader page="Get Involved" title="Become a part of our mission" />

      <article className="relative">
        {/* Sticky links */}
        <section className="bg-primary-500 shadow-xl sticky top-0 z-40">
          <div className="max-w-screen-lg mx-auto text-center text-white py-4">
            <nav className="stickynav flex items-center justify-center">
              <Scrollspy items={['Donate', 'Subscribe', 'Volunteer']} currentClassName="active">
                <a href="#Donate" className="button shadow-none mx-2">
                  Donate
                </a>
                <a href="#Subscribe" className="button shadow-none mx-2">
                  Subscribe
                </a>
                <a href="#Volunteer" className="button shadow-none mx-2">
                  Volunteer
                </a>
              </Scrollspy>
            </nav>
          </div>
        </section>

        {/* Donate */}
        <section id="Donate" className="px-8 py-32 bg-gray-200">
          <div className="max-w-screen-xl mx-auto md:flex">
            <div className="md:w-3/5">
              <h3 className="mb-6 text-gray-800 text-4xl">Donate</h3>
              <p>
                Our Board has spent many years identifying the ideal programming direction for the
                Center to make sure all contributions create an active pulse and impactful outcomes.
              </p>
              <aside className="bg-white rounded-lg shadow-md mt-8 text-lg">
                <div className="px-6 py-4 bg-primary-200 rounded-t-lg">
                  <h4 className="text-gray-900">Your support will enable us to meet our goals.</h4>
                </div>
                <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 p-6">
                  <div className="flex items-center font-semibold">
                    <IconFlag className="mr-4" />
                    <span>Living history for student enrichment</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <IconFlag className="mr-4" />
                    <span>Restoration of the school</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <IconFlag className="mr-4" />
                    <span>Diversity training workshops</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <IconFlag className="mr-4" />
                    <span>Community conversation series</span>
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <Link href="/about/vision">
                    <a className="md:flex items-center group text-secondary-600">
                      <span>Learn more about our vision for the future</span>
                      <span className="inline-flex ml-2 transition ease-in-out duration-300 transform group-hover:translate-x-2">
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
              </aside>
            </div>
            <div className="md:w-2/5">
              <div className="flex flex-col justify-center items-center min-h-full text-center">
                <ButtonDonate label="Send Your Donation" />
                <p className="text-base flex items-center justify-center">
                  <span>Powered by</span>{' '}
                  <img src="/assets/images/logo-paypal.png" alt="PayPal" className="ml-2" />
                </p>
                <p className="mt-4 text-base">
                  <span>All major credit cards accepted</span>
                  <br />
                  <img
                    src="/assets/images/logo-cards.png"
                    alt="Credit cards"
                    className="inline-block mt-2"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section id="Subscribe" className="px-8 py-32 bg-white">
          <div className="max-w-screen-xl mx-auto md:flex">
            <div className="md:w-3/5">
              <h3 className="mb-6 text-gray-800 text-4xl">Subscribe to our Newsletter</h3>
              <p>Receive periodic news updates on our progress, programming and more!</p>
              <Mailchimp actionUrl="https://hockessincoloredschool107.us1.list-manage.com/subscribe/post?u=178f276496ca736dd75a3afd5&amp;id=e314cd856b" />
            </div>
            <div className="md:w-2/5">
              <figure className="text-center w-full">
                <img
                  src="/assets/images/get-involved/get_involved-newsletter.jpg"
                  alt="Newsletter"
                  className="inline-block max-w-xs rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section id="Volunteer" className="px-8 py-32 bg-gray-200">
          <div className="max-w-screen-xl mx-auto md:flex">
            <div className="md:w-3/5">
              <h3 className="mb-6 text-gray-800 text-4xl">Volunteer</h3>
              <p>
                Together, we can do more. Let's bring our abilities and passions together to
                effectuate systemic change.
              </p>
              <VolunteerForm />
            </div>
            <div className="md:w-2/5">
              <figure className="text-center w-full">
                <img
                  src="/assets/images/get-involved/get_involved-volunteer.jpg"
                  alt="Volunteer"
                  className="inline-block max-w-xs rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default Index;
