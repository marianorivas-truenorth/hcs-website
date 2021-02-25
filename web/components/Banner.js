import React from 'react';
import Link from 'next/link';

const Banner = ({ title, action, link = '#', icon }) => {
  return (
    <section className="bg-primary-900 px-8 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex items-center">
          <div className="text-white text-xl w-full md:w-2/3">
            {title ? <h3 className="text-4xl leading-tight mb-2">{title}</h3> : null}
            {action ? (
              <Link href={link}>
                <a className="group text-2xl text-accent-500">
                  {action}
                  <span className="inline-flex ml-2 transition ease-in-out duration-300 transform group-hover:translate-x-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                        fill="#DEBE15"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            ) : null}
          </div>
          {icon ? (
            <div className="w-full justify-end md:w-1/3">
              <figure className="text-center">
                <img src={icon} alt="Illustration" className="inline-block" />
              </figure>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Banner;
