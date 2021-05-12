import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import groq from 'groq';
import client from '../client';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ButtonDonate from '@/components/ButtonDonate';
import CardEvent from '@/components/CardEvent';

function Index(props) {
  const { config, events = [] } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>{config.title}</title>
      </Head>

      <Hero slides={[]} />

      {/* CTA */}
      <section className="bg-gray-300 relative z-40 px-4 lg:px-0">
        <div className="max-w-screen-md mx-auto transform -translate-y-8 md:-translate-y-1/2 md:flex text-center bg-primary-500 px-8 md:px-12 py-8 rounded-lg md:rounded-full border-4 border-primary-300 items-center shadow-xl font-light justify-center">
          <div className="text-white font-semibold text-2xl mb-6 md:mb-0">
            There are so many ways you can participate.
          </div>
          <Link href="/get-involved">
            <button className="button button-primary ml-8">Learn More</button>
          </Link>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-200">
        <div className="bg-gray-300">
          <div className="max-w-screen-md mx-auto px-8 pb-40 text-center">
            <h4 className="text-gray-500 text-xl mb-4">Our 100 Year of History</h4>
            <p className="font-light text-2xl">
              The Hockessin Colored School #107 was built in 1920 and played a monumental role in
              the 1954 U.S. Supreme Court ruling, Brown v. Board of Education, which desegregated
              schools nationwide.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto transform -translate-y-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-lg">
              <figure>
                <img
                  src="/assets/images/homepage/1950.png"
                  alt="Picture from 1950"
                  className="mx-auto max-h-80"
                />
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
                <img
                  src="/assets/images/homepage/1952.png"
                  alt="Picture from 1952"
                  className="mx-auto max-h-80"
                />
              </figure>
              <div className="px-8">
                <h4 className="text-3xl my-4">1952</h4>
                <p>Attorney Louis L. Redding files Bulah vs. Gebhart in the Delaware Court.</p>
                <p>
                  Chancellor Collins J. Seitz declared that separate African American schools
                  offered inferior educational opportunities when compared to white schools and
                  ordered the immediate admission of African American students to the white schools.
                </p>
                <p>
                  <strong>The Hockessin Schoools are desegregated.</strong>
                </p>
              </div>
            </article>

            <article className="text-lg">
              <figure>
                <img
                  src="/assets/images/homepage/1954.png"
                  alt="Picture from 1954"
                  className="mx-auto max-h-80"
                />
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
            <a href="/our-history" className="button">
              Explore the Full Timeline
            </a>
          </div>
        </div>
      </section>

      {/* Banner Donate */}
      <section className="bg-primary-900">
        <div className="max-w-screen-xl mx-auto px-8 py-20">
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
              <ButtonDonate className="button button-accent inline-block my-3" label="Donate Now" />
              <figure className="text-center">
                <img
                  src="/assets/images/illustration-donate.svg"
                  alt="Donate Now Illustration"
                  className="w-full px-8 pt-4"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="bg-gray-300 text-primary-900 py-20 px-8">
        <div className="max-w-screen-md mx-auto text-center">
          <h4 className="text-gray-500 text-xl mb-4">Today</h4>
          <h2 className=" text-4xl mb-4">
            An important historical landmark
            <br className="hidden md:block" />
            becomes an impactful center for DEI
          </h2>
          <div className="text-2xl font-semibold">Our DEI programming plan includes:</div>
        </div>
        <div className="max-w-screen-lg mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-semibold">
            <figure className="text-center leading-snug">
              <img
                src="/assets/images/icon-history.svg"
                alt="Living History for Student"
                className="inline-block mb-4"
              />
              <figcaption>Living History for Student Learning</figcaption>
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
        <div className="text-center mt-4">
          <Link href="/our-vision">
            <button className="button">More About Our Vision for the Future</button>
          </Link>
        </div>
      </section>

      {/* Events and Media */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-3xl text-primary-900 font-bold text-center mb-8">
            Upcoming Events
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mt-12 mb-24">
            {events.map((event) => event.slug && <CardEvent data={event} key={event._id} />)}
          </div>

          <div className="text-3xl text-primary-900 font-bold text-center mb-8">
            Articles & Media About Our Mission
          </div>

          <article className="grid grid-cols-1 md:grid-cols-2 gap-x-20 my-12">
            <div>
              <div className="flex items-end mb-6">
                <img src="/assets/images/logo-nrp.png" alt="NRP" className="h-8 mr-4" />
                <div className="text-sm md:text-base leading-tight">
                  Featured by NPR via Delmarva Public Media
                </div>
              </div>
              <a
                className="text-2xl font-bold leading-tight text-primary-600 mb-6 inline-block hover:underline"
                href="https://www.delmarvapublicradio.net/post/saving-delaware-school-brought-down-segregation-part-1"
                target="_blank"
                rel="noopener nofollow"
              >
                Saving Delaware School That Brought Down Segregation
              </a>
              <audio controls className="focus:outline-none mb-8 md:mb-4">
                <source src="/assets/audio/new-saving-delaware-school.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="text-center md:order-last">
              <div>Hear from former HCS #107 students</div>
              <div className="grid grid-cols-3 gap-4 my-4 text-sm">
                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/homepage/student-knott.png"
                      alt="James Sonny Knott"
                      className="rounded-full shadow-lg"
                    />
                  </figure>
                  <span>James Sonny Knott</span>
                </article>

                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/homepage/student-peterson.png"
                      alt="Leroy Peterson"
                      className="rounded-full shadow-lg"
                    />
                  </figure>
                  <span>Leroy Peterson</span>
                </article>

                <article>
                  <figure className="p-2">
                    <img
                      src="/assets/images/homepage/student-johnson.png"
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
                <div className="text-sm md:text-base leading-tight">
                  Featured by NPR via Delmarva Public Media
                </div>
              </div>
              <a
                className="text-2xl font-bold leading-tight text-primary-600 mb-6 inline-block hover:underline"
                href="https://www.delmarvapublicradio.net/post/impact-end-segregation-hockessin-african-american-community-part-2"
                target="_blank"
                rel="noopener nofollow"
              >
                The Impact of the End of Segregation on Hockessin African American Community
              </a>
              <audio controls className="focus:outline-none mb-8 md:mb-4">
                <source
                  src="/assets/audio/the-impact-of-the-end-of-segregation.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
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
          <Link href="/events-and-media">
            <button className="button">Events &amp; Media</button>
          </Link>
        </div>
      </section>

      {/* Support */}
      <section>
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center">
          <div className="mb-12 text-base font-bold text-primary-900">WITH THE SUPPORT OF</div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-8 justify-center items-center">
            <div className="md:pr-6">
              <img
                src="/assets/images/support/logo-delaware-state-university.jpg"
                alt="Delaware State University"
              />
            </div>
            {/* <div>
              <img
                src="/assets/images/support/logo-temple-university.png"
                alt="Temple University"
              />
            </div> */}
            <div>
              <img src="/assets/images/support/logo-delaware-county.png" alt="Delaware County" />
            </div>
            <div>
              <img src="/assets/images/support/logo-dscc.png" alt="DSCC" />
            </div>
            <div>
              <img src="/assets/images/support/logo-red-clay.png" alt="Red Clay" />
            </div>
            <div>
              <img
                src="/assets/images/support/logo-reap.png"
                alt="Project REAP (Real Estate Associate Program)"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  events: await client.fetch(groq`
    *[_type == "event"][0..2]|order(date desc)
  `),
});

export default Index;
