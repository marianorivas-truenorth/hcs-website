import React from 'react';
import config from '../config';

const ButtonDonate = ({ className = 'button', label = 'Donate', ...otherProps }) => {
  return (
    <a className={className} href={config.donateLink} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default ButtonDonate;
