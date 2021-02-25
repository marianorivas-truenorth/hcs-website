import React from 'react';
import Link from 'next/link';

const PageHeader = ({ title, page }) => {
  return (
    <section
      className="bg-gray-300 bg-center bg-no-repeat bg-contain px-8 py-20"
      style={{ backgroundImage: 'url(/assets/images/bg-shapes.svg)' }}
    >
      <div className="max-w-screen-lg mx-auto text-center text-white text-lg">
        {page ? <h6 className="text-lg text-gray-500 font-semibold mb-4">{page}</h6> : null}
        {title ? <h1 className="text-5xl text-primary-900">{title}</h1> : null}
      </div>
    </section>
  );
};

export default PageHeader;
