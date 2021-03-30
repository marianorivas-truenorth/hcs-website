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
        <title>Our Vision | {config.title}</title>
      </Head>

      <PageHeader page="Our Vision" title="Our vision for the future of HCS #107" />

      {/* Intro */}
      <section className="bg-primary-500 border-t-8 border-primary-300">
        <div className="max-w-screen-md mx-auto text-center text-white text-2xl px-8 py-16">
          Our mission is to transform the historic Hockessin school that ended segregation into a
          Center for Diversity, Inclusion, and Social Equity.
        </div>
      </section>

      {/* Body */}
      <section className="px-8 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <h4 className="text-gray-500 mb-4">Programming & Impact</h4>
            <h2 className="text-primary-900 text-3xl">
              We are reimagining the school as a place for:
            </h2>
          </div>

          <article className="mt-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="md:ml-20">
                <div className="text-primary-600">Educational Enrichment</div>
                <h4 className="my-4">
                  Living history of HCS #107 for educational enrichment of K-12 students.
                </h4>
                <List
                  items={[
                    'Active School Programs',
                    'Reading & Math Tutoring (ESL)',
                    'Executive Functioning Skills',
                    'Outdoor Nature Learning',
                  ]}
                />
              </div>
            </div>
            <div className="md:w-1/2 md:order-first">
              <figure className="w-full mt-8 md:mt-0">
                <img
                  src="/assets/images/about/vision-education.jpg"
                  alt="Educational Enrichment"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </article>

          <article className="mt-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="mr-20">
                <div className="text-primary-600">Diversity Training</div>
                <h4 className="my-4">
                  DEI workshops focused on promoting inclusion & social equity awareness.
                </h4>

                <h4 className="mt-8 mb-2">Targeting audiences such as:</h4>
                <List
                  className="text-base"
                  items={[
                    'Public & Private Schools, Colleges, Universities',
                    'County, City, State, Local Depts. (Police, Fire, etc.)',
                    'Public & Private Enterprises',
                    'Small Businesses',
                    'Healthcare Systems & Medical-Dental Providers',
                  ]}
                />

                <h4 className="mt-8 mb-2">With topics including:</h4>
                <List
                  className="text-base"
                  items={[
                    'Ethnicities',
                    'Gender Identity and Genetics',
                    'Public Safety and Social Justice',
                    'Social Determinants of Health',
                    'Harassment and Cyber Bullying',
                  ]}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <figure className="w-full mt-8 md:mt-0">
                <img
                  src="/assets/images/about/vision-diversity.jpg"
                  alt="Diversity Training"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </article>

          <article className="mt-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="md:ml-20">
                <div className="text-primary-600">Developing Social Infrastructure Strategies</div>
                <h4 className="my-4">
                  A space for innovation and collaboration in service to our community.
                </h4>
                <List
                  items={[
                    'Healthcare',
                    'Education',
                    'Affordable housing',
                    'Social justice',
                    'Inclusive economic deveopment',
                  ]}
                />
              </div>
            </div>
            <div className="md:w-1/2 md:order-first">
              <figure className="w-full mt-8 md:mt-0">
                <img
                  src="/assets/images/about/vision-infrastructure.jpg"
                  alt="Social Infrastructure"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </article>
        </div>
      </section>

      {/* Restoration */}
      <section className="bg-gray-200 px-8 py-16">
        <div className="max-w-screen-sm mx-auto text-center">
          <h4 className="text-gray-500 mb-4">Restoration</h4>
          <h2 className="text-primary-900 text-3xl">
            Our plans to reimagine the school & surrounding lands
          </h2>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 mb-24">
            <article className="bg-primary-600 rounded-md overflow-hidden shadow-lg">
              <figure>
                <img
                  src="/assets/images/about/exterior-school.jpg"
                  className="object-cover h-48 w-full"
                  alt="Exterior of Existing School"
                />
              </figure>
              <div className="p-6">
                <div className="text-accent-300 font-semibold">Exterior of Existing School</div>
                <div className="text-white mt-2">
                  <List
                    items={[
                      'Walking Trails',
                      'Picnic Areas',
                      'Tent Area for Larger Events',
                      'Ample Parking',
                    ]}
                    bulletColor="text-accent-300"
                  />
                </div>
              </div>
            </article>
            <article className="bg-primary-600 rounded-md overflow-hidden shadow-lg">
              <figure>
                <img
                  src="/assets/images/about/interior-school.jpg"
                  className="object-cover h-48 w-full"
                  alt="Interior of Existing School"
                />
              </figure>
              <div className="p-6">
                <div className="text-accent-300 font-semibold">Interior of Existing School</div>
                <div className="text-white mt-2">
                  <List
                    items={[
                      'Meeting & Conference Space',
                      'Multimedia Exhibits',
                      'Coworking Space',
                      'Special Events',
                      'Broadcast Studio',
                    ]}
                    bulletColor="text-accent-300"
                  />
                </div>
              </div>
            </article>
            <article className="bg-primary-600 rounded-md overflow-hidden shadow-lg">
              <figure>
                <img
                  src="/assets/images/about/garden-school.jpg"
                  className="object-cover h-48 w-full"
                  alt="Garden & Event Space"
                />
              </figure>
              <div className="p-6">
                <div className="text-accent-300 font-semibold">Garden & Event Space</div>
                <div className="text-white mt-2">
                  <List
                    items={[
                      'Community Garden',
                      'Outdoor Amphitheater',
                      'Underground Railroad Commemorative',
                      'Solar Panel Array',
                    ]}
                    bulletColor="text-accent-300"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Banner
        title="Learn how you can get involved"
        action="There are so many ways to contribute"
        link="/get-involved"
        icon="/assets/images/illustration-skate.svg"
      />
    </Layout>
  );
}

const List = ({ items = [], bulletColor = 'text-primary-600', className = '' }) => {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>
          <span className={bulletColor}>–</span> {item}
        </li>
      ))}
    </ul>
  );
};

export default Index;
