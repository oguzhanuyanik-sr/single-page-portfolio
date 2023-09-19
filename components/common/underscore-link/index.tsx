import Link from 'next/link';
import React from 'react';

type UnderscoreLinkProps = {
  url: string;
  title: string;
};

const UnderscoreLink = ({ url, title }: UnderscoreLinkProps) => {
  return (
    <Link
      className='font-bold text-[16px] leading-[26px] border-b-2 border-b-green pb-[10px] tracking-[2.3px] hover:text-green transition-all whitespace-nowrap'
      href={url}
    >
      {title}
    </Link>
  );
};

export default UnderscoreLink;
