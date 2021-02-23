import React from 'react';
import Link from 'next/link';
import Scrollspy from 'react-scrollspy';
import client from '../client';
import Layout from '../components/Layout';
import { Banner, PageHeader } from '../components/sections';

const IconFlag = ({ className }) => (
  <span className={className}>
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z" fill="#5EBD8F" />
    </svg>
  </span>
);

function Index(props) {
  // console.log(events);

  return (
    <Layout>
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
                  <Link href="#">
                    <a className="text-secondary-600">Learn more about our vision for the future</a>
                  </Link>
                </div>
              </aside>
            </div>
            <div className="md:w-2/5">
              <div className="flex flex-col justify-center items-center min-h-full text-center">
                <button className="button">Send Your Donation</button>
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
              <form>
                <div className="mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="jane.doe@email.com"
                    className="w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700"
                  />
                </div>
                <div className="mt-8">
                  <button type="submit" className="button">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-2/5">
              <figure className="text-center w-full">
                <img
                  src="/assets/images/our-history/HCS-original.jpg"
                  alt="Original schoolhouse"
                  className="inline-block"
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
              <form>
                <div className="mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="jane.doe@email.com"
                    className="w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message">What are you interested in doing?</label>
                  <textarea
                    id="message"
                    type="text"
                    placeholder="What type of programs interest you?"
                    className="w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700"
                  />
                </div>
                <div className="mt-8">
                  <button type="submit" className="button">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-2/5">
              <figure className="text-center w-full">
                <img
                  src="/assets/images/our-history/HCS-original.jpg"
                  alt="Original schoolhouse"
                  className="inline-block"
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
