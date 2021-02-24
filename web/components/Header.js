import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import HeaderLink from './HeaderLink';
import ButtonDonate from '@/components/ButtonDonate';

const Header = (props) => {
  const router = useRouter();

  const isHomepage = router.pathname === '/';
  let className = 'z-50';
  if (isHomepage) {
    className = `${className} absolute top-0 left-0 right-0 text-white bg-transparent`;
  } else {
    className = `${className} relative text-black bg-white shadow`;
  }

  return (
    // <header className="text-white fixed top-0 left-0 right-0 z-50 p-4">
    <header className={`${className}`}>
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="flex w-full flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between w-full lg:w-1/4">
            <Link href="/">
              <div className="whitespace-no-wrap cursor-pointer">Hockessin Colored School #107</div>
            </Link>
            <div className="lg:hidden flex items-center">
              <ButtonDonate className="button text-base" />
              <div className="ml-8">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <nav className="flex flex-col lg:flex-row text-lg items-center">
            <div className="lg:mx-4">
              <HeaderLink href="/">
                <a>Home</a>
              </HeaderLink>
            </div>
            <div className="lg:mx-4">
              <HeaderLink href="/our-history">
                <a>Our History</a>
              </HeaderLink>
            </div>
            <div className="lg:mx-4">
              <HeaderLink href="/get-involved">
                <a>Get Involved</a>
              </HeaderLink>
            </div>
            <div className="lg:mx-4">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="focus:outline-none">
                      <HeaderLink href="#" parent="/about">
                        <a>About Us +</a>
                      </HeaderLink>
                    </Menu.Button>

                    <Transition
                      appear={false}
                      show={open}
                      enter="transition-opacity duration-150"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-75"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Menu.Items className="absolute left-0 right-0 mt-5 w-full origin-top-center outline-none">
                        <AboutMenu />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
            <div className="lg:mx-4">
              <HeaderLink href="/events-and-media">
                <a>Events &amp; Media</a>
              </HeaderLink>
            </div>
            <div className="lg:mx-4">
              <HeaderLink href="/contact">
                <a>Contact</a>
              </HeaderLink>
            </div>
            <div className="hidden ml-4 lg:inline-block">
              <ButtonDonate className={`button ${isHomepage ? 'button-white' : 'button-accent'}`} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const AboutMenu = () => (
  <nav className="min-w-max">
    <div className="max-w-screen-xl mx-auto pt-8 pb-10 bg-white border-t-4 border-gray-300 shadow-lg rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-gray-800 px-10">
        <div>
          <h4 className="w-48 text-gray-900">Learn more about HCS #107</h4>
        </div>
        <div>
          <Link href="/about/vision">
            <div className="group cursor-pointer text-base">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                Vision for the Future
              </div>
              <div className="leading-tight">
                Learn about our plans to restore the school and initiate a center for community
                programming.
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/about/board-members">
            <div className="group cursor-pointer text-base">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                Our Board Members
              </div>
              <div className="leading-tight">
                Meet the members of our community that make our efforts possible.
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/about/press">
            <div className="group cursor-pointer text-base">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                In the Press
              </div>
              <div className="leading-tight">
                Learn even more about the HCS #107 story, as told by others!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
