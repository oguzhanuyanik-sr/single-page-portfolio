'use client';
import React from 'react';
import { heroSection } from '@/app/api/response.json';
import UnderscoreLink from '@/components/common/underscore-link';
import ImgSrcset from '@/components/common/img-srcset';
import { motion } from 'framer-motion';

const imgData = [
  {
    wrapper: 'md:hidden relative h-[383px] w-[174px]',
    img: heroSection.img.mobile,
    alt: 'Profile photo',
  },
  {
    wrapper: 'hidden md:block lg:hidden relative h-[600px] w-[322px]',
    img: heroSection.img.tablet,
    alt: 'Profile photo',
  },
  {
    wrapper: 'hidden lg:block relative h-[720px] w-[445px]',
    img: heroSection.img.desktop,
    alt: 'Profile photo',
  },
];

const HeroSection = () => {
  return (
    <div className='container'>
      <div className='w-full flex flex-col-reverse md:flex-row md:justify-between'>
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          className='md:max-w-[60%]'
        >
          <h1 className='font-bold text-[40px] md:text-[72px] leading-[1.3] md:leading-[1.2] my-10 md:mt-[100px] md:mb-[60px] text-center md:text-start'>
            {heroSection.heading}{' '}
            <span className='border-b-4 border-green whitespace-nowrap'>
              {heroSection.headingBold}
            </span>
            .
          </h1>
          <p className='text-grey font-medium text-[16px] leading-[18px] md:body-l text-center mb-6 md:mb-[34px] md:text-start md:leading-[1.5]'>
            {heroSection.text}
          </p>
          <div className='w-full flex justify-center md:justify-start'>
            <UnderscoreLink url='/' title='Contact Me' type='link' />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full flex justify-center md:justify-end relative -z-10 -mt-[80px]'
        >
          {imgData.map((item, index) => {
            return <ImgSrcset key={index} {...item} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
