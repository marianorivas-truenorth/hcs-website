import React from 'react';

const Tag = ({ label = 'Label' }) => {
  return (
    <span className="inline-block bg-accent-200 text-accent-900 text-xs font-bold px-4 py-1 rounded-full uppercase">
      {label}
    </span>
  );
};

export default Tag;
