import Link from 'next/link';
import React from 'react';

type LogoProps = {
  title: string;
};

const Logo = ({ title }: LogoProps) => {
  return (
    <Link
      className='text-[24px] leading-[32px] md:text-[32px] font-bold lowercase'
      href='/'
    >
      {title}
    </Link>
  );
};

export default Logo;
