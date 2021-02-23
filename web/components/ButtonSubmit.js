import React from 'react';
import Link from 'next/link';

const ButtonSubmit = ({
  className = '',
  label = 'Send',
  showArrow = false,
  isSubmitting = false,
  href = '/',
  ...otherProps
}) => {
  return (
    <button type="submit" className="button w-full lg:w-auto">
      {isSubmitting ? (
        <div>
          <svg
            className="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <div>
          <span>{label}</span>
          {showArrow ? (
            <span className="ml-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M1.33337 8.50024H14.6667"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M10 3.8335L14.6667 8.50016L10 13.1668"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.500244)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          ) : null}
        </div>
      )}
    </button>
  );
};

export default ButtonSubmit;
