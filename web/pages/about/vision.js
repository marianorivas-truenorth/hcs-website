import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Banner, PageHeader } from '../../components/sections';

function Index(props) {
  // console.log(events);

  return (
    <Layout>
      <PageHeader page="About Us" title="Our vision for the future of HCS #107" />

      {/* Intro */}
      <section className="bg-primary-500 border-t-8 border-primary-300">
        <div className="max-w-screen-md mx-auto text-center text-white text-2xl px-8 py-16">
          Our mission is to transform the historic Hockessin school that ended segregation into a
          Center for Diversity, Inclusion, and Social Equity.
        </div>
      </section>

      {/* Body */}
      <section className="px-8 py-16">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <h4 className="text-gray-500 mb-4">Programming & Impact</h4>
            <h2 className="text-primary-900 text-3xl">
              We are reimagining the school as a place for:
            </h2>
          </div>

          <article className="my-16 flex items-center">
            <div className="w-1/2">
              <figure className="w-full">
                <img
                  src="/assets/images/our-history/HCS-floorplan.jpg"
                  alt="Floorplan"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
            <div className="w-1/2">
              <div className="ml-20">
                <div className="text-primary-600">Educational Enrichment</div>
                <h4 className="my-4">
                  Living history of HCS #107 for educational enrichment of K-12 students.
                </h4>
                <ul>
                  <li>
                    <span className="text-primary-600">–</span> Active School Programs
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Reading & Math Tutoring (ESL)
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Executive Functioning Skills
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Outdoor Nature Learning
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="my-16 flex items-center">
            <div className="w-1/2">
              <div className="mr-20">
                <div className="text-primary-600">Diversity Training</div>
                <h4 className="my-4">
                  DEI workshops focused on promoting inclusion & social equity awareness.
                </h4>

                <h4 className="mt-8 mb-2">Targeting audiences such as:</h4>
                <ul className="text-base">
                  <li>
                    <span className="text-primary-600">–</span> Public & Private Schools, Colleges,
                    Universities
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> County, City, State, Local Depts.
                    (Police, Fire, etc.)
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Public & Private Enterprises
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Small Businesses
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Healthcare Systems & Medical-Dental
                    Providers
                  </li>
                </ul>

                <h4 className="mt-8 mb-2">With topics including:</h4>
                <ul className="text-base">
                  <li>
                    <span className="text-primary-600">–</span> Ethnicities
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Gender Identity and Genetics
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Public Safety and Social Justice
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Social Determinants of Health
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Harassment and Cyber Bullying
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <figure className="w-full">
                <img
                  src="/assets/images/our-history/HCS-floorplan.jpg"
                  alt="Floorplan"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </article>

          <article className="my-16 flex items-center">
            <div className="w-1/2">
              <figure className="w-full">
                <img
                  src="/assets/images/our-history/HCS-floorplan.jpg"
                  alt="Floorplan"
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            </div>
            <div className="w-1/2">
              <div className="ml-20">
                <div className="text-primary-600">Developing Social Infrastructure Strategies</div>
                <h4 className="my-4">
                  A space for innovation and collaboration in service to our community.
                </h4>
                <ul>
                  <li>
                    <span className="text-primary-600">–</span> Healthcare
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Education
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Affordable housing
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Social justice
                  </li>
                  <li>
                    <span className="text-primary-600">–</span> Inclusive economic deveopment
                  </li>
                </ul>
              </div>
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
                  <ul>
                    <li>– Walking Trails</li>
                    <li>– Picnic Areas</li>
                    <li>– Tent Area for Larger Events</li>
                    <li>– Ample Parking</li>
                  </ul>
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
                  <ul>
                    <li>– Meeting & Conference Space</li>
                    <li>– Multimedia Exhibits</li>
                    <li>– Coworking Space</li>
                    <li>– Special Events</li>
                    <li>– Broadcast Studio</li>
                  </ul>
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
                  <ul>
                    <li>– Community Garden</li>
                    <li>– Outdoor Amphitheater</li>
                    <li>– Underground Railroad Commemorative</li>
                    <li>– Solar Panel Array</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
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
