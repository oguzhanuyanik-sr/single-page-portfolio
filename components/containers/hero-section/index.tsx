import React from 'react';
import { heroSection } from '@/app/api/response.json';
import UnderscoreLink from '@/components/common/underscore-link';
import Image from 'next/image';
import ImgSrcset from '@/components/common/img-srcset';

type Props = {};

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

const HeroSection = (props: Props) => {
  return (
    <div>
      <div>
        {imgData.map((item, index) => {
          return <ImgSrcset key={index} {...item} />;
        })}
      </div>

      <h1>
        {heroSection.heading} <span>{heroSection.headingBold}</span>.
      </h1>
      <p>{heroSection.text}</p>
      <UnderscoreLink url='/' title='Contact Me' />
    </div>
  );
};

export default HeroSection;
