import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import Tag from '@/components/Tag';

const builder = imageUrlBuilder(client);

const CardPress = (props) => {
  const { _id, title = '', publishedAt, author, tags, link = '#', mainImage } = props.data;
  return (
    <a href={link} target="_blank" rel="noopener nofollow">
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
          <div className="text-2xl text-primary-600 leading-tight mb-2">{title}</div>
          {author ? <div className="text-base my-2 font-bold">{author}</div> : null}
          {publishedAt ? (
            <div className="text-base">{new Date(publishedAt).toDateString()}</div>
          ) : null}
          <div className="mt-8">
            <ul className="flex">
              {tags?.length > 0 ? (
                tags.map((tag) => {
                  if (tag !== '')
                    return (
                      <li className="mr-2" key={tag}>
                        <Tag label={tag} />
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
    </a>
  );
};

export default CardPress;
