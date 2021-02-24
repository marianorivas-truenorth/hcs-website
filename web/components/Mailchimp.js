import PropTypes from 'prop-types';
import React from 'react';
import MailchimpForm from './MailchimpForm';

export default function Mailchimp(props) {
  const { heading, subtitle, actionUrl, buttonClassName } = props;

  return (
    <section className="">
      <div className="">
        <h2 className="">{heading}</h2>
        <p className="">{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'FNAME',
                label: 'Name',
                placeholder: 'Jane Doe',
                type: 'text',
                className:
                  'placeholder-gray-400 block w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700 outline-none focus:outline-none',
                required: true,
              },
              {
                name: 'EMAIL',
                label: 'Email',
                placeholder: 'jane.doe@email.com',
                type: 'email',
                className:
                  'placeholder-gray-400 block w-full rounded-md border border-gray-400 bg-white px-2 py-1 text-gray-700 outline-none focus:outline-none',
                required: true,
              },
            ]}
            buttonClassName={buttonClassName || 'button'}
            styles={{
              sendingMsg: {
                color: '#0652DD',
              },
              successMsg: {
                color: '#009432',
              },
              duplicateMsg: {
                color: '#EE5A24',
              },
              errorMsg: {
                color: 'red',
              },
            }}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Already subscribed',
              button: 'Sign Up',
            }}
            className=""
          />
        )}
      </div>
    </section>
  );
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
  buttonClassName: PropTypes.string,
};
