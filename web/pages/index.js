import React from 'react';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import Layout from '../components/Layout';
import Carousel from '../components/sections/Carousel';

function Index(props) {
  const { events = [] } = props;
  // console.log(events);

  return (
    <Layout>
      <Carousel slides={[]} />

      {/* CTA */}
      <section className="bg-gray-300">
        <div className="max-w-3xl mx-auto transform -translate-y-8 md:-translate-y-1/2 md:flex text-center bg-primary-500 px-12 py-8 rounded-lg md:rounded-full border-4 border-primary-300 items-center shadow-xl font-light justify-center">
          <div className="text-white font-semibold text-2xl mb-6 md:mb-0">
            There are so many ways you can participate.
          </div>
          <Link href="#">
            <button className="button button-primary ml-8">Learn More</button>
          </Link>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-200">
        <div className="bg-gray-300">
          <div className="max-w-3xl mx-auto px-8 pb-40 text-center">
            <h4 className="text-gray-500 text-xl mb-4">Our 100 Year Old History</h4>
            <p className="font-light text-2xl">
              The Hockessin Colored School #107 was built in 1920 and played a monumental role in
              the 1954 U.S. Supreme Court ruling, Brown v. Board of Education, which desegregated
              schools nationwide.
            </p>
          </div>
        </div>

        <div className="container mx-auto transform md:-translate-y-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-lg">
              <figure>
                <img src="/assets/images/1950.png" alt="Picture from 1950" className="mx-auto" />
              </figure>
              <div className="px-8">
                <h4 className="text-3xl my-4">1950</h4>
                <p>
                  Shirley Bulah walks the 2 miles to and from HCS #107. A school bus transporting
                  white children passes her every day.
                </p>
                <p>
                  Parents Fred and Sarah Bulah write Delaware Governor Carvel asking the state to
                  provide their daughter, Shirley, with transportation to school.{' '}
                </p>
                <p>
                  <strong>They are rejected.</strong>
                </p>
              </div>
            </article>

            <article className="text-lg">
              <figure>
                <img src="/assets/images/1952.png" alt="Picture from 1952" className="mx-auto" />
              </figure>
              <div className="px-8">
                <h4 className="text-3xl my-4">1952</h4>
                <p>Attorney Louis L. Redding files Bulah vs. Gebhart in the Delaware Court.</p>
                <p>
                  Chancellor Collins J. Seitz issues the declaration that the disparity between
                  white and African-American students violates the U.S. Constitution.
                </p>
                <p>
                  <strong>The Hockessin Schoools are desegregated.</strong>
                </p>
              </div>
            </article>

            <article className="text-lg">
              <figure>
                <img src="/assets/images/1954.png" alt="Picture from 1954" className="mx-auto" />
              </figure>
              <div className="px-8">
                <h4 className="text-3xl my-4">1954</h4>
                <p>
                  Bulah v. Gebhart is combined with 4 other cases to become the landmark Brown vs.
                  Board of Education Supreme Court case.
                </p>
                <p>
                  US Supreme Court overturns Plessy v. Ferguson by stating, 'separate but equal, is
                  in fact, not equal at all.
                </p>
                <p>
                  <strong>School segregation is declared unconstitutional.</strong>
                </p>
              </div>
            </article>
          </div>

          <div className="text-center py-16 md:pb-0">
            <a href="#" className="button">
              Explore the Full Timeline
            </a>
          </div>
        </div>
      </section>

      {/* Banner Donate */}
      <section className="bg-primary-900">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="md:flex">
            <div className="text-white text-xl w-full md:w-3/5 mb-8">
              <h3 className="text-3xl leading-tight mb-6">
                Help us to preserve HCS #107 for current and future generations.
              </h3>
              <p>
                <strong className="text-accent-500">
                  “We could no more let HCS #107 be torn down or lost to commercial development,
                </strong>
                {` `}
                than we could allow another promising student of color to drop out of high school
                based on some artificial barrier of geography, income or perceived cultural
                deficiency.”
              </p>
              <cite className="text-gray-500 not-italic text-md">
                Judge Leonard Williams – Founding Chairman of The FOHCS
              </cite>
            </div>
            <div className="text-center w-full md:w-2/5 md:pl-8">
              <a href="#" className="button button-accent inline-block my-3">
                Donate Now
              </a>
              <figure className="text-center">
                <img
                  src="/assets/images/illustration-donate.svg"
                  alt="Donate Now Illustration"
                  className="w-full px-8 py-4"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="bg-gray-300 py-20 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-gray-500 text-xl mb-4">Today</h4>
          <h2 className="text-4xl mb-4">
            An important historical landmark
            <br className="hidden md:block" />
            becomes an impactful center for DEI
          </h2>
          <div className="text-2xl font-semibold">Our DEI programming plan includes:</div>
        </div>
        <div className="max-w-4xl mx-auto px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 font-semibold">
            <figure className="text-center leading-snug">
              <img
                src="/assets/images/icon-history.svg"
                alt="Living History for Students"
                className="inline-block mb-4"
              />
              <figcaption>Living History for Students Learning</figcaption>
            </figure>
            <figure className="text-center leading-snug">
              <img
                src="/assets/images/icon-diversity.svg"
                alt="Diversity Training Workshops"
                className="inline-block mb-4"
              />
              <figcaption>Diversity Training Workshops</figcaption>
            </figure>
            <figure className="text-center leading-snug">
              <img
                src="/assets/images/icon-conversation.svg"
                alt="Community Conversation Series"
                className="inline-block mb-4"
              />
              <figcaption>Community Conversation Series</figcaption>
            </figure>
            <figure className="text-center leading-snug">
              <img
                src="/assets/images/icon-hub.svg"
                alt="Hub for Innovation &amp; Collaboration"
                className="inline-block mb-4"
              />
              <figcaption>Hub for Innovation & Collaboration</figcaption>
            </figure>
          </div>
        </div>
        <div className="text-center">
          <Link href="/about">
            <button className="button">More About Our Vision for the Future</button>
          </Link>
        </div>
      </section>

      {/* Events and Media */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-8">
          <div className="text-3xl text-center mb-4">Upcoming Events</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 mb-24">
            {events.map(
              ({ _id, title = '', slug = '', _updatedAt = '' }) =>
                slug && (
                  <article className="bg-white rounded-md shadow-lg" key={_id}>
                    <figure>
                      <img
                        src="/assets/images/student-knott.png"
                        className="w-full rounded-md"
                        alt={title}
                      />
                    </figure>
                    <div className="p-8">
                      <Link href="/event/[slug]" as={`/event/${slug.current}`}>
                        <a className="text-2xl text-primary-600">{title}</a>
                      </Link>{' '}
                      <div className="text-base mt-2">Dr. Lanette Edwards & HCS Board Students</div>
                      <div className="text-base font-bold">
                        {new Date(_updatedAt).toDateString()}
                      </div>
                    </div>
                  </article>
                )
            )}
          </div>

          <div className="text-3xl text-center mb-4">Articles & Media About Our Mission</div>

          <article className="grid grid-cols-1 md:grid-cols-2 gap-x-20 my-12">
            <div>
              <div className="flex items-end mb-6">
                <img src="/assets/images/logo-nrp.png" alt="NRP" className="h-8 mr-4" />
                <div className="text-base">Featured by NPR via Delmarva Public Media</div>
              </div>
              <div className="text-2xl font-bold leading-tight text-primary-600 mb-6">
                Saving Delaware School That Brought Down Segregation
              </div>
            </div>
            <div className="text-center md:order-last">
              <div>Hear from former HCS #107 students</div>
              <div className="grid grid-cols-3 gap-4 my-4 text-sm">
                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/student-knott.png"
                      alt="James Sonny Knott"
                      className="rounded-full shadow-lg"
                    />
                  </figure>
                  <span>James Sonny Knott</span>
                </article>

                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/student-peterson.png"
                      alt="Leroy Peterson"
                      className="rounded-full shadow-lg"
                    />
                  </figure>
                  <span>Leroy Peterson</span>
                </article>

                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/student-johnson.png"
                      alt="Lois Johnson"
                      className="rounded-full shadow-lg"
                    />
                  </figure>
                  <span>Lois Johnson</span>
                </article>
              </div>
            </div>
          </article>

          <hr className="border-gray-400" />

          <article className="grid grid-cols-1 md:grid-cols-2 gap-x-20 my-12">
            <div>
              <div className="flex items-end mb-6">
                <img src="/assets/images/logo-nrp.png" alt="NRP" className="h-8 mr-4" />
                <div className="text-base">Featured by NPR via Delmarva Public Media</div>
              </div>
              <div className="text-2xl font-bold leading-tight text-primary-600 mb-6">
                The Impact of the End of Segregation on Hockessin African American Community
              </div>
            </div>
            <div className="leading-snug">
              <p>
                When the U.S. Supreme Court struck down school segegration in 1954, many black
                students found a hostile backlash at the previously all white schools they attended.
              </p>
              <p className="text-base">
                In part 2 Delmarva Public Radio's Don Rush takes a look at what happened to those
                students and the efforts to renovate the old African American school in Hockessin
                that was part of the historic decision.
              </p>
            </div>
          </article>
        </div>

        <div className="text-center">
          <Link href="/news">
            <button className="button">Events &amp; Media</button>
          </Link>
        </div>
      </section>

      {/* Support */}
      <section>
        <div className="container mx-auto px-8 py-16 text-center">
          <div className="mb-12 text-base font-bold text-primary-900">WITH THE SUPPORT OF</div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8">
            <div>
              <img
                src="/assets/images/logo-delaware-state-university.png"
                alt="Delaware State University"
              />
            </div>
            <div>
              <img src="/assets/images/logo-temple-university.png" alt="Temple University" />
            </div>
            <div>
              <img src="/assets/images/logo-delaware-county.png" alt="Delaware County" />
            </div>
            <div>
              <img src="/assets/images/logo-dscc.png" alt="DSCC" />
            </div>
            <div>
              <img src="/assets/images/logo-red-clay.png" alt="Red Clay" />
            </div>
            <div>
              <img src="/assets/images/logo-delaware-state.png" alt="Delaware State" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  events: await client.fetch(groq`
    *[_type == "event"]
  `),
});

export default Index;
