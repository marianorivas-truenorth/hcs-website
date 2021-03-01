import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderLink = ({ href = '#', children, parent }) => {
  const router = useRouter();

  let className =
    children.props.className ||
    'p-1 md:px-0 font-bold relative no-underline border-b-4 transition duration-200 ease-in-out cursor-pointer';

  // Homepage variation
  if (router.pathname === '/') {
    className = `${className} text-white`;
  } else {
    className = `${className} text-primary-900`;
  }

  // Subpage active
  const isActiveParent = router.pathname.includes(parent);

  // Active
  if (router.pathname === href || isActiveParent) {
    className = `${className} border-b-4 active`;
  } else {
    className = `${className} border-transparent hover:border-accent-500`;
  }

  if (parent) {
    return <div>{React.cloneElement(children, { className })}</div>;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default HeaderLink;
