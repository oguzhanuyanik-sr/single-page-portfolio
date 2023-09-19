import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SocialsProps = {
  data: {
    url: string;
    icon: string;
  }[];
};

const Socials = ({ data }: SocialsProps) => {
  return (
    <div className='flex items-center justify-center gap-5 w-full md:w-auto md:pr-5'>
      {data.map(({ url, icon }, index) => (
        <Link key={index} href={url}>
          <Image
            src={icon}
            alt='Link Icon'
            height={20}
            width={20}
            sizes='100%'
            className='md:h-6 md:w-6'
            aria-hidden='true'
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
