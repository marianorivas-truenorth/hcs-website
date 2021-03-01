import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Banner from '@/components/Banner';

function Index(props) {
  const { config } = props;

  return (
    <Layout config={config}>
      <Head>
        <title>Our History | {config.title}</title>
      </Head>
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
      <section className="px-4 md:p-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 1920 */}
          <Timeline>
            <TimelineTitle>1920</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <TimelineBodyText>
                  HCS #107 is built as a one-room schoolhouse to serve black children who were not
                  allowed to attend school with white children.
                </TimelineBodyText>
                <div className="lg:flex mt-12">
                  <aside className="bg-primary-200 p-4 text-gray-600 text-base rounded-lg lg:w-1/2">
                    <p>
                      <strong>“Our books and things..we would get the cast-offs.</strong> Some of
                      them didn’t have pages, some of them didn’t have backs, they were all written
                      in and tore up. So it was kind of like we were the hand-me-downs..not ‘kind
                      of’, we were.”
                    </p>
                    <cite>Lois Johnson, Former student</cite>
                  </aside>
                  <figure className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
                    <img
                      src="/assets/images/our-history/history-1920-school.jpg"
                      alt="Original schoolhouse"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </figure>
                </div>
              </TimelineBodyLeft>
              <TimelineBodyRight>
                <figure className="w-full mb-8">
                  <img
                    src="/assets/images/our-history/history-1920-students.jpg"
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
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 1950 */}
          <Timeline>
            <TimelineTitle>1950</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <img src="/assets/images/our-history/shirley-bulah.jpg" alt="Shirley Bulah" />
              </TimelineBodyLeft>
              <TimelineBodyRight>
                <TimelineBodyText>
                  Parents Fred and Sarah Bulah write Delaware Governor Carvel asking the state to
                  provide their daughter Shirley with transportation to school. They are rejected.
                </TimelineBodyText>
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 1951 */}
          <Timeline>
            <TimelineTitle>1951</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <TimelineBodyText>
                  Mrs. Bulah seeks the advice of the lawyer, Louis Redding. Redding files the
                  Delaware court case, Bulah v. Gebhart on behalf of Shirley Bulah.
                </TimelineBodyText>
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
              </TimelineBodyLeft>
              <TimelineBodyRight>
                <img
                  src="/assets/images/our-history/history-1951-redding.jpg"
                  alt="Louis Redding"
                />
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 1952 */}
          <Timeline>
            <TimelineTitle>1952</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <h3 className="mb-4 text-primary-600 text-2xl">April</h3>
                <TimelineBodyText>
                  Delaware Chancellor Collins J. Seitz issues the declaration that the disparity
                  between white and African-American students is in violation of the U.S.
                  Constitution.
                </TimelineBodyText>
                <h3 className="mt-8 mb-4 text-primary-600 text-2xl">September</h3>
                <TimelineBodyText>
                  “Colored” students are admitted into Hockessin School #29, located 1 mile away
                  from HCS #107.
                </TimelineBodyText>
                <figure className="text-base text-gray-700 font-serif mt-8">
                  <img
                    src="/assets/images/our-history/history-1952-team.jpg"
                    alt="Brown v. Board legal team"
                    className="w-2/3 rounded-lg shadow-lg mb-2"
                  />
                  <figcaption>Brown v. Board legal team: Names</figcaption>
                </figure>
              </TimelineBodyLeft>

              <TimelineBodyRight className="text-right">
                <figure className="text-base text-gray-700 font-serif">
                  <img
                    src="/assets/images/our-history/history-1952-seitz-shirley.jpg"
                    alt="Chancellor Collins J. Seitz"
                  />
                  <figcaption className="pr-5">
                    Chancellor Collins J. Seitz | Shirley Bulah riding the bus
                  </figcaption>
                </figure>
                <h3 className="mt-16 mb-4 text-primary-600 text-2xl">October</h3>
                <TimelineBodyText>
                  Bulah v. Gebhart was the only case in which the lower court ruled in favor of the
                  plaintiff, effectively causing Delaware to set the precedent for the Supreme
                  Court's final ruling in Brown v. Board of Education.
                </TimelineBodyText>
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 1954 */}
          <Timeline>
            <TimelineTitle>1954</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <TimelineBodyText>
                  US Supreme Court overturns Plessy v. Ferguson, declaring school segregation
                  unconstitutional.
                </TimelineBodyText>
              </TimelineBodyLeft>

              <TimelineBodyRight>
                <img
                  src="/assets/images/our-history/history-1954-supremecourt.jpg"
                  alt="Supreme Court Brown"
                  className="w-full rounded-lg shadow-lg"
                />
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 1959 */}
          <Timeline>
            <TimelineTitle>1959</TimelineTitle>
            <TimelineBody>
              <div className="mx-12">
                <TimelineBodyText>
                  Hockessin Colored School #107 officially closes.
                </TimelineBodyText>
              </div>
            </TimelineBody>
          </Timeline>

          {/* 2012 */}
          <Timeline>
            <TimelineTitle>2012</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <TimelineBodyText>
                  The Friends of Hockessin Colored School #107, Inc. (“FOHCS”) save the property
                  from a sheriff’s sale.
                </TimelineBodyText>
              </TimelineBodyLeft>

              <TimelineBodyRight>
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
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>

          {/* 2020 */}
          <Timeline>
            <TimelineTitle>2020</TimelineTitle>
            <TimelineBody>
              <TimelineBodyLeft>
                <figure className="mb-4">
                  <img
                    src="/assets/images/our-history/history-2020-school.jpg"
                    alt="HCS Today"
                    className="rounded-lg shadow-lg"
                  />
                </figure>
                <TimelineBodyText>
                  The children’s book “Ride, Shirley, Ride” by Dr. L Richelle is published, sharing
                  Shirley’s story with the world.
                </TimelineBodyText>
              </TimelineBodyLeft>

              <TimelineBodyRight className="text-right">
                <h3 className="mt-16 mb-4 text-primary-600 text-2xl">August</h3>
                <TimelineBodyText>
                  Hockessin Colored School #107 enters into partnership with New Castle County (NCC)
                  to become the 250th park in the NCC system.
                </TimelineBodyText>
                <figure className="text-left mt-8">
                  <img
                    src="/assets/images/our-history/history-2020-book.jpg"
                    alt="Ride Shirley Ride"
                    className="w-56 rounded-lg shadow-lg"
                  />
                </figure>
              </TimelineBodyRight>
            </TimelineBody>
          </Timeline>
        </div>
      </section>

      <Banner
        title="So what’s next for HCS #107?"
        action="Learn about our vision for the future"
        link="/about/vision"
        icon="/assets/images/illustration-humans.svg"
      />
    </Layout>
  );
}

const Timeline = ({ children }) => (
  <article className="my-8 md:my-16 border-l border-gray-400 md:border-transparent">
    {children}
  </article>
);

const TimelineTitle = ({ children }) => (
  <h3 className="ml-4 md:ml-0 mb-4 text-primary-600 text-2xl md:text-4xl">{children}</h3>
);

const TimelineBody = ({ children }) => (
  <div className="ml-2 md:ml-10 py-4 md:flex md:border-l md:border-gray-500 ">{children}</div>
);

const TimelineBodyLeft = ({ children, className }) => (
  <div className={`mx-4 md:mx-12 md:w-1/2 ${className}`}>{children}</div>
);

const TimelineBodyRight = ({ children, className }) => (
  <div className={`mx-4 md:ml-12 md:w-1/2 ${className}`}>{children}</div>
);

const TimelineBodyText = ({ children, className }) => (
  <div className={`text-2xl lg:text-3xl md:leading-relaxed ${className}`}>{children}</div>
);

export default Index;
