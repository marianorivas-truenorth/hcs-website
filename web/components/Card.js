import React from 'react';
import Link from 'next/link';

const Card = (props) => {
  const { children } = props;
  return (
    <article className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col">
      <figure>
        <img
          src="/assets/images/about/exterior-school.jpg"
          className="object-cover h-48 w-full"
          alt="Exterior of Existing School"
        />
      </figure>
      <div className="p-6 flex flex-col flex-grow">
        {children}
        <div className="text-primary-600 font-semibold">
          Saving Delaware School that Brought Down Segregation, Part 1
        </div>
        <div className="mt-2 text-base font-bold">NPR / Delmarva Public Media</div>
        <div className="mt-2 text-base flex-grow">May 20, 2019</div>
        <div className="mt-2">
          <ul className="flex">
            <li className="mr-2">
              <span className="inline-block bg-accent-200 text-accent-900 text-xs font-bold px-2 py-1 rounded uppercase">
                ARTICLE
              </span>
            </li>
            <li className="mr-2">
              <span className="inline-block bg-accent-200 text-accent-900 text-xs font-bold px-2 py-1 rounded uppercase">
                PODCAST
              </span>
            </li>
            <li className="mr-2">
              <span className="inline-block bg-accent-200 text-accent-900 text-xs font-bold px-2 py-1 rounded uppercase">
                VIDEO
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Card;
