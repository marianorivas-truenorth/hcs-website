import React from 'react';
import { useForm } from 'react-hook-form';
import { Email } from '../lib/smtp';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonSubmit from './ButtonSubmit';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import * as yup from 'yup';
import appConfig from '../config';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const SectionContent = ({ className = '', ...otherProps }) => {
  const { register, handleSubmit, formState, setValue, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { isSubmitSuccessful, isSubmitting } = formState;
  const [dropdown, setDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    let msgBody = 'Name: ' + data.name + '<br />';
    msgBody += 'Email: ' + data.email + '<br />';
    msgBody += 'Message: ' + data.message;

    await Email.send({
      SecureToken: appConfig.twilioSecureToken,
      From: appConfig.twilioFrom,
      To: appConfig.volunteerTo,
      Subject: 'New web volunteer',
      Body: msgBody,
    }).then((message) => console.log(message));

    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-4">
        <FormInput
          name="name"
          label="Name"
          placeholder="Jane Doe"
          register={register}
          errors={errors.name}
        />
        {errors.name && (
          <span className="text-red-400 mt-1 text-sm block">Please, enter your name</span>
        )}
      </div>

      <div className="mb-4">
        <FormInput
          name="email"
          label="Email"
          placeholder="jane.doe@gmail.com"
          register={register}
          errors={errors.email}
        />
        {errors.email && (
          <span className="text-red-400 mt-1 text-sm block">
            {errors.email?.type === 'required' && 'Please, enter your email'}
            {errors.email?.type === 'email' && 'Please, enter a valid email address'}
          </span>
        )}
      </div>

      <div className="mb-4">
        <FormTextarea
          name="message"
          label="What are you interested in doing?"
          placeholder="What type of programs interest you?"
          register={register}
          errors={errors.message}
        />
      </div>

      {isSubmitSuccessful && (
        <div className="text-gray-800 text-lg" role="success">
          Thanks for writing us! We’ll get back to you soon.
        </div>
      )}

      <div className="w-full lg:w-auto my-8">
        <ButtonSubmit isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default SectionContent;
