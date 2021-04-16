import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import HeaderLink from './HeaderLink';
import ButtonDonate from '@/components/ButtonDonate';

const Header = (props) => {
  const router = useRouter();
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  const isHomepage = router.pathname === '/';
  let className = 'fixed w-full z-50';
  if (isHomepage) {
    className = `${className} md:absolute top-0 left-0 right-0 text-white bg-black md:bg-transparent`;
  } else {
    className = `${className} md:relative text-primary-900 bg-white shadow`;
  }

  const toggleMenu = () => {
    setNavIsOpen((prevState) => !prevState);
  };

  return (
    // <header className="text-white fixed top-0 left-0 right-0 z-50 p-4">
    <header className={`${className}`}>
      <div className="max-w-screen-xl mx-auto py-4 md:px-4 2xl:px-0">
        <div className="flex w-full flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between w-full lg:w-1/4 px-4 md:px-0">
            <Link href="/">
              <div className="whitespace-no-wrap cursor-pointer">
                <span className="hidden md:inline-block">Hockessin Colored School #107</span>
                <span className="md:hidden text-xs font-bold leading-3 block">
                  Hockessin Colored
                  <br /> School #107
                </span>
              </div>
            </Link>
            <div className="lg:hidden flex items-center">
              <button type="button" className="ml-8" onClick={toggleMenu}>
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
              </button>
            </div>
          </div>

          <nav
            className={`text-lg lg:flex flex-col md:flex-row md:items-center md:w-auto pt-4 md:pt-0 ${
              navIsOpen ? 'flex w-full' : 'hidden'
            }`}
          >
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/">
                <a>Home</a>
              </HeaderLink>
            </div>
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/our-history">
                <a>Our History</a>
              </HeaderLink>
            </div>
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/our-vision">
                <a>Our Vision</a>
              </HeaderLink>
            </div>
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/our-team">
                <a>Our Team</a>
              </HeaderLink>
            </div>
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/get-involved">
                <a>Get Involved</a>
              </HeaderLink>
            </div>
            <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <HeaderLink href="/events-and-media">
                <a>Events &amp; Media</a>
              </HeaderLink>
            </div>
            {/* <div className="p-3 md:px-0 md:mx-2 xl:mx-3 border-b border-gray-400 md:border-transparent">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="focus:outline-none">
                      <HeaderLink parent="/about">
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
                      <Menu.Items className="absolute left-0 right-0 z-50 lg:mt-5 w-full origin-top-center outline-none">
                        <AboutMenu />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div> */}
            <div className="my-3 md:my-0 ml-4 lg:inline-block">
              <ButtonDonate className={`button ${isHomepage ? 'button-white' : 'button-accent'}`} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const AboutMenu = () => (
  <nav className="md:min-w-max">
    <div className="max-w-screen-xl mx-auto py-4 lg:pt-8 lg:pb-10 bg-white border-t-4 border-gray-300 lg:shadow-lg lg:rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-4 text-gray-800 px-4 lg:px-10">
        <div className="hidden lg:block">
          <h4 className="w-48 text-gray-900">Learn more about HCS #107</h4>
        </div>
        <div>
          <Link href="/out-vision">
            <div className="group cursor-pointer text-base text-center md:text-left">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                Vision for the Future
              </div>
              <div className="hidden lg:block leading-tight">
                Learn about our plans to restore the school and initiate a center for community
                programming.
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/out-team">
            <div className="group cursor-pointer text-base text-center md:text-left">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                Our Board Members
              </div>
              <div className="hidden lg:block leading-tight">
                Meet the members of our community that make our efforts possible.
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/events-and-media">
            <div className="group cursor-pointer text-base text-center md:text-left">
              <div className="text-secondary-600 group-hover:underline font-bold mb-1">
                In the Press
              </div>
              <div className="hidden lg:block leading-tight">
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
