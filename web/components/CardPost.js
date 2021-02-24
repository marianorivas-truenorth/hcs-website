import React from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import Tag from '@/components/Tag';

const builder = imageUrlBuilder(client);

const CardPost = (props) => {
  const { _id, title = '', publishedAt, tags, slug = '', mainImage } = props.data;
  return (
    <Link href="/post/[slug]" as={`/post/${slug.current}`} key={_id}>
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
          <Link href="/post/[slug]" as={`/post/${slug.current}`}>
            <a className="text-2xl text-primary-600 leading-tight mb-2">{title}</a>
          </Link>
          {publishedAt ? (
            <div className="text-base font-bold">{new Date(publishedAt).toDateString()}</div>
          ) : null}
          <div className="mt-2">
            <ul className="flex">
              {tags?.length > 0 ? (
                tags.map((tag) => {
                  if (tag !== '')
                    return (
                      <li className="mr-2">
                        <Tag label={tag} key={tag} />
                      </li>
                    );
                })
              ) : (
                <li>
                  <Tag label="Media" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardPost;
