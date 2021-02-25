import React from 'react';
import appConfig from '../config';

const ButtonDonate = ({ className = 'button', label = 'Donate', ...otherProps }) => {
  return (
    <a className={className} href={appConfig.donateLink} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default ButtonDonate;
