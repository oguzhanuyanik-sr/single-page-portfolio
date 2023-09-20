import Link from 'next/link';
import React from 'react';
import { LogoProps } from './types';

const Logo = ({ title }: LogoProps) => {
  return (
    <Link
      className='text-heading-m md:text-[32px] font-bold lowercase w-full md:w-auto text-center mb-5 md:text-start'
      href='/'
    >
      {title}
    </Link>
  );
};

export default Logo;
