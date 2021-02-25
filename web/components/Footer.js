import React from 'react';
import Link from 'next/link';
import Mailchimp from './Mailchimp';

function Footer(props) {
  const { twitterUrl, facebookUrl, linkedinUrl } = props;

  return (
    <footer className="bg-gray-300 px-8 py-16 text-gray-700 text-base">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid gris-cols-1 md:grid-cols-3 gap-20">
          <aside>
            <h4 className="mb-4 text-2xl">Contact us</h4>
            <p>
              Hockessin Colored School #107
              <br />
              <a
                href="https://www.google.com/maps/place/4266+Millcreek+Rd,+Hockessin,+DE+19707,+%C3%89tats-Unis/@39.7846109,-75.7005831,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6ff9dbd981419:0xd121638817db8b5f!8m2!3d39.7846109!4d-75.6983944?hl=fr"
                target="_blank"
                className="text-gray-700 hover:underline"
              >
                4266 Millcreek Road, Hockessin, Delaware 19707
              </a>
            </p>
            <p>
              <a
                className="text-gray-700 hover:underline"
                href="mailto:hockessincoloredschool107@gmail.com"
              >
                hockessincoloredschool107@gmail.com
              </a>
              <br />
              <a className="text-gray-700 hover:underline" href="tel:302-540-5959">
                302-540-5959
              </a>
            </p>
          </aside>

          <aside>
            <h4 className="mb-4 text-2xl">Follow us</h4>
            <nav>
              {facebookUrl ? (
                <a href={facebookUrl} rel="noopener nofollow" className="inline-block mr-4">
                  <img src="/assets/images/icon-facebook.svg" alt="facebook" />
                </a>
              ) : null}
              {linkedinUrl ? (
                <a href={linkedinUrl} rel="noopener nofollow" className="inline-block mr-4">
                  <img src="/assets/images/icon-linkedin.svg" alt="linkedin" />
                </a>
              ) : null}
              {twitterUrl ? (
                <a href={twitterUrl} rel="noopener nofollow" className="inline-block mr-4">
                  <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
                </a>
              ) : null}
            </nav>
          </aside>

          <aside>
            <h4 className="mb-4 text-2xl">Sign up for our Newsletter</h4>
            <Mailchimp
              buttonClassName="button button-accent"
              actionUrl="https://hockessincoloredschool107.us1.list-manage.com/subscribe/post?u=178f276496ca736dd75a3afd5&amp;id=e314cd856b"
            />
          </aside>
        </div>

        <div className="text-gray-500 text-sm mt-8">
          <p>Copyright 2021 Hockessin Colored School #107</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
