import React from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const builder = imageUrlBuilder(client);

const CardEvent = (props) => {
  const { _id, title = '', summary, date, slug = '', mainImage } = props.data;
  return (
    <Link href="/event/[slug]" as={`/event/${slug.current}`} key={_id}>
      <article className="bg-white rounded-md shadow-lg cursor-pointer hover:shadow-xl transition-shadow ease-in-out duration-300">
        {mainImage?.asset ? (
          <figure>
            <img
              src={builder.image(mainImage.asset).auto('format').width(480).url()}
              className="object-cover h-48 w-full rounded-t-md"
              alt={title}
            />
          </figure>
        ) : null}
        <div className="p-4">
          <Link href="/event/[slug]" as={`/event/${slug.current}`}>
            <a className="text-2xl text-primary-600 leading-tight mb-2">{title}</a>
          </Link>
          {summary ? <div className="text-base">{summary}</div> : null}
          {date ? <div className="text-base font-bold">{new Date(date).toDateString()}</div> : null}
        </div>
      </article>
    </Link>
  );
};

export default CardEvent;
