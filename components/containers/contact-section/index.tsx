'use client';
import React from 'react';
import { contactSection } from '@/app/api/response.json';
import UnderscoreLink from '@/components/common/underscore-link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Sorry, invalid format here')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactSection = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = ({ name, email, message }: FormValues) => {
    alert(`Your message has been received ❤️\n\n${name}\n${email}\n${message}`);
  };

  return (
    <section className='bg-darkGrey'>
      <div className='container flex flex-col items-center py-[60px] px-4'>
        <div className='w-full md:w-1/2 text-center mb-[50px]'>
          <h5 className='font-bold text-[40px] leading-[40px] mb-5'>
            {contactSection.title}
          </h5>
          <p className='text-base leading-[26px] text-grey'>
            {contactSection.text}
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='w-full flex flex-col'
        >
          <div className='mb-8'>
            <input
              className={`${
                errors.name?.message
                  ? 'border-red'
                  : 'border-white focus:border-green'
              } w-full bg-transparent border-b-[1px] mb-2 pl-6 py-6 outline-none placeholder:font-medium placeholder:text-base placeholder:leading-[16px] placeholder:uppercase`}
              placeholder='Name'
              type='text'
              autoComplete='off'
              {...register('name')}
            />
            <p className='text-red font-medium text-[13px] leading-[16px]'>
              {errors.name?.message}
            </p>
          </div>
          <div className='mb-8'>
            <input
              className={`${
                errors.email?.message
                  ? 'border-red'
                  : 'border-white focus:border-green'
              } w-full bg-transparent border-b-[1px] mb-2 pl-6 py-6 outline-none placeholder:font-medium placeholder:text-base placeholder:leading-[16px] placeholder:uppercase`}
              placeholder='Email'
              type='email'
              autoComplete='off'
              {...register('email')}
            />
            <p className='text-red font-medium text-[13px] leading-[16px]'>
              {errors.email?.message}
            </p>
          </div>
          <div className='mb-8'>
            <textarea
              className={`${
                errors.message?.message
                  ? 'border-red'
                  : 'border-white focus:border-green'
              } w-full resize-none bg-transparent border-b-[1px] border-white mb-2 pl-6 py-6 outline-none font-medium text-base leading-[16px] placeholder:uppercase`}
              placeholder='MESSAGE'
              rows={6}
              {...register('message')}
            ></textarea>
            <p className='text-red font-medium text-[13px] leading-[16px]'>
              {errors.message?.message}
            </p>
          </div>

          <div className='w-full flex justify-end'>
            <UnderscoreLink title='Send message' type='submit' url='' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
