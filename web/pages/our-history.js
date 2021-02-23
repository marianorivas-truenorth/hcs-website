import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Banner, PageHeader } from '../components/sections';

function Index(props) {
  return (
    <Layout>
      <PageHeader page="Our History" title="Inspiring future outcomes" />

      {/* Intro */}
      <section className="bg-primary-500 border-t-8 border-primary-300">
        <div className="max-w-screen-lg mx-auto text-center text-white px-8 py-16">
          <h5 className="text-3xl mb-6">Hockessin Colored School #107 has a monumental history.</h5>
          <p>
            The school was the center of the 1952 Delaware court case known as Bulah v. Gebhart,
            which would be combined with four other cases to become the Brown v. Board of Education
            Supreme Court case. The case helped end segregation in education, and paved the way for
            eliminating separate-but-equal doctrine across America.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 1920 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1920</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <div className="text-3xl leading-relaxed">
                  HCS #107 is built as a one-room schoolhouse to serve black children who were not
                  allowed to attend school with white children.
                </div>
                <div className="flex mt-12">
                  <aside className="bg-primary-200 p-4 text-gray-600 text-base rounded-lg w-1/2">
                    <p>
                      <strong>“Our books and things..we would get the cast-offs.</strong> Some of
                      them didn’t have pages, some of them didn’t have backs, they were all written
                      in and tore up. So it was kind of like we were the hand-me-downs..not ‘kind
                      of’, we were.”
                    </p>
                    <cite>Lois Johnson, Former student</cite>
                  </aside>
                  <figure className="w-1/2 ml-8">
                    <img
                      src="/assets/images/our-history/HCS-original.jpg"
                      alt="Original schoolhouse"
                    />
                  </figure>
                </div>
              </div>
              <div className="ml-12 w-1/2">
                <figure className="w-full mb-8">
                  <img
                    src="/assets/images/our-history/HCS-floorplan.jpg"
                    alt="Floorplan"
                    className="w-full rounded-lg shadow-lg"
                  />
                </figure>
                <aside className="bg-secondary-200 p-4 text-gray-600 text-base text-right rounded-lg">
                  <p>
                    “And right in the back of the school was a baseball field. Every Sunday just
                    about there was a game there…{' '}
                    <strong>It was a good thing, it was part of the community.”</strong>
                  </p>
                  <cite>Sonny Knott, Former student (second from left)</cite>
                </aside>
              </div>
            </div>
          </article>

          {/* 1950 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1950</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <img src="/assets/images/our-history/shirley-bulah.jpg" alt="Shirley Bulah" />
              </div>
              <div className="ml-12 w-1/2">
                <div className="text-3xl text-right leading-relaxed">
                  Parents Fred and Sarah Bulah write Delaware Governor Carvel asking the state to
                  provide their daughter Shirley with transportation to school. They are rejected.
                </div>
              </div>
            </div>
          </article>

          {/* 1951 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1951</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <div className="text-3xl leading-relaxed">
                  Mrs. Bulah seeks the advice of the lawyer, Louis Redding. Redding files the
                  Delaware court case, Bulah v. Gebhart on behalf of Shirley Bulah.
                </div>
                <aside className="bg-secondary-200 p-4 text-gray-600 text-base rounded-lg mt-8">
                  <p>
                    <strong>
                      “He said he wouldn’t help me get a Jim Crow bus to take my girl to any Jim
                      Crow school
                    </strong>
                    , but if I was interested in sending her to an integrated school, why, then
                    maybe he’d help. Well, I thanked God right then and there.”
                  </p>
                  <cite>Sarah Bulah, Shirley’s Mother</cite>
                </aside>
              </div>
              <div className="ml-12 w-1/2">
                <img src="/assets/images/our-history/louis-redding.png" alt="Louis Redding" />
              </div>
            </div>
          </article>

          {/* 1952 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1952</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <h3 className="mb-4 text-primary-600 text-2xl">April</h3>
                <div className="text-3xl leading-relaxed">
                  Delaware Chancellor Collins J. Seitz issues the declaration that the disparity
                  between white and African-American students is in violation of the U.S.
                  Constitution.
                </div>
                <h3 className="mt-8 mb-4 text-primary-600 text-2xl">September</h3>
                <div className="text-3xl leading-relaxed">
                  “Colored” students are admitted into Hockessin School #29, located 1 mile away
                  from HCS #107.
                </div>
                <figure className="text-base text-gray-700 font-serif mt-8">
                  <img
                    src="/assets/images/our-history/brown-board-legal-team.jpg"
                    alt="Brown v. Board legal team"
                  />
                  <figcaption>Brown v. Board legal team: Names</figcaption>
                </figure>
              </div>

              <div className="ml-12 w-1/2 text-right">
                <figure className="text-base text-gray-700 font-serif">
                  <img src="/assets/images/our-history/louis-redding.png" alt="Louis Redding" />
                  <figcaption>
                    Chancellor Collins J. Seitz | Shirley Bulah riding the bus
                  </figcaption>
                </figure>
                <h3 className="mt-16 mb-4 text-primary-600 text-2xl">October</h3>
                <div className="text-3xl leading-relaxed">
                  Bulah v. Gebhart was the only case in which the lower court ruled in favor of the
                  plaintiff, effectively causing Delaware to set the precedent for the Supreme
                  Court's final ruling in Brown v. Board of Education.
                </div>
              </div>
            </div>
          </article>

          {/* 1954 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1954</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <div className="text-3xl leading-relaxed">
                  US Supreme Court overturns Plessy v. Ferguson, declaring school segregation
                  unconstitutional.
                </div>
              </div>

              <div className="ml-12 w-1/2">
                <img
                  src="/assets/images/our-history/supreme-court-brown.jpg"
                  alt="Supreme Court Brown"
                />
              </div>
            </div>
          </article>

          {/* 1959 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">1959</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12">
                <div className="text-3xl leading-relaxed">
                  Hockessin Colored School #107 officially closes.
                </div>
              </div>
            </div>
          </article>

          {/* 2012 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">2012</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <div className="text-3xl leading-relaxed">
                  The Friends of Hockessin Colored School #107, Inc. (“FOHCS”) save the property
                  from a sheriff’s sale.
                </div>
              </div>

              <div className="ml-12 w-1/2">
                <aside className="bg-accent-200 p-4 text-gray-600 text-base rounded-lg mt-8">
                  <p>
                    “We could no more let HCS #107 be torn down or lost to commercial development,
                    than we could allow another promising student of color to drop out of high
                    school based on some artificial barrier of geography, income or perceived
                    cultural deficiency.{' '}
                    <strong>
                      Our history and our future are inextricably linked, as we – all of us – are
                      beholden to both of them.”
                    </strong>
                  </p>
                  <cite>Judge Leonard Williams, Founding Chairman of The FOHCS</cite>
                </aside>
              </div>
            </div>
          </article>

          {/* 2020 */}
          <article className="my-12">
            <h3 className="mb-4 text-primary-600 text-4xl">2020</h3>
            <div className="border-l border-gray-500 ml-10 py-4 flex">
              <div className="mx-12 w-1/2">
                <figure>
                  <img src="/assets/images/our-history/HCS-Today.jpg" alt="HCS Today" />
                </figure>
                <div className="mt-8 text-3xl leading-relaxed">
                  The children’s book “Ride, Shirley, Ride” by Dr. L Richelle is published, sharing
                  Shirley’s story with the world.
                </div>
              </div>

              <div className="ml-12 w-1/2 text-right">
                <h3 className="mt-16 mb-4 text-primary-600 text-2xl">August</h3>
                <div className="text-3xl leading-relaxed">
                  Hockessin Colored School #107 enters into partnership with New Castle County (NCC)
                  to become the 250th park in the NCC system.
                </div>
                <figure className="text-left mt-8">
                  <img
                    src="/assets/images/our-history/ride-shirley-ride.jpg"
                    alt="Ride Shirley Ride"
                  />
                </figure>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Banner
        title="So what’s next for HCS #107?"
        action="Learn about our vision for the future"
        link="#"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

export default Index;
