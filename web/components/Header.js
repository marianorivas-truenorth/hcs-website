import React from 'react';
import Link from 'next/link';

const Header = (props) => {
  return (
    // <header className="text-white fixed top-0 left-0 right-0 z-50 p-4">
    <header className="text-white bg-black z-50 p-4">
      <div className="container mx-auto">
        <div className="flex w-full flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between w-full lg:w-1/4">
            <div className="whitespace-no-wrap">Hockessin Colored School #107</div>
            <div className="lg:hidden flex items-center">
              <a href="/donate" className="button text-base">
                Donate
              </a>
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
              <a
                href="/home"
                className="py-1 text-white font-bold relative no-underline border-b-4 active"
              >
                Home
              </a>
            </div>
            <div className="lg:mx-4">
              <a
                href="/our-history"
                className="py-1 text-white font-bold relative no-underline border-b-4 border-transparent hover:border-accent-500"
              >
                Our History
              </a>
            </div>
            <div className="lg:mx-4">
              <a
                href="/get-involved"
                className="py-1 text-white font-bold relative no-underline border-b-4 border-transparent hover:border-accent-500"
              >
                Get Involved
              </a>
            </div>
            <div className="lg:mx-4">
              <a
                href="/about-us"
                className="py-1 text-white font-bold relative no-underline border-b-4 border-transparent hover:border-accent-500"
              >
                About Us +
              </a>
            </div>
            <div className="lg:mx-4">
              <a
                href="/news"
                className="py-1 text-white font-bold relative no-underline border-b-4 border-transparent hover:border-accent-500"
              >
                Events &amp; Media
              </a>
            </div>
            <div className="lg:mx-4">
              <a
                href="/contact"
                className="py-1 text-white font-bold relative no-underline border-b-4 border-transparent hover:border-accent-500"
              >
                Contact
              </a>
            </div>
            <div className="hidden ml-4 lg:inline-block">
              <a href="/donate" className="button button-white">
                Donate
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
