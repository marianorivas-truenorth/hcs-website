import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const builder = imageUrlBuilder(client);

function Figure({ props }) {
  const { alt, caption, asset, width = 2000 } = props;
  if (!asset) {
    return undefined;
  }
  return (
    <figure className="w-full">
      <img src={builder.image(asset).auto('format').width(width).url()} className="" alt={alt} />
      {caption && (
        <figcaption>
          <div className="">
            <div className="">
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}

Figure.propTypes = {
  props: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default Figure;
