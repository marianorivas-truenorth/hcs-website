import React from 'react';

const FormTextarea = ({ name, label, placeholder, register, errors }) => (
  <>
    <label htmlFor={label} className="mb-2 block">
      {label}
    </label>
    <div className="relative">
      <textarea
        name={name}
        placeholder={placeholder || label}
        className={`placeholder-gray-400 block w-full rounded-md border bg-white px-2 py-1 text-gray-700 outline-none focus:outline-none ${
          errors ? 'border-red-400' : 'border-gray-400 focus:border-gray-500'
        }`}
        ref={register}
      />
      {errors ? (
        <svg
          className="w-6 h-6 absolute text-red-400 fill-current"
          style={{ top: 8, right: 8 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z" />
        </svg>
      ) : null}
    </div>
  </>
);

export default FormTextarea;
