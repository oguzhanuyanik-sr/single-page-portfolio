import Link from 'next/link';
import React from 'react';
import { UnderscoreLinkProps } from './types';

const UnderscoreLink = ({ url, title, type }: UnderscoreLinkProps) => {
  return (
    <>
      {type === 'link' ? (
        <Link
          className='font-bold text-[16px] leading-[26px] border-b-2 border-b-green pb-[10px] tracking-[2.3px] hover:text-green transition-all whitespace-nowrap uppercase'
          href={url}
        >
          {title}
        </Link>
      ) : (
        <button
          className='font-bold text-[16px] leading-[26px] border-b-2 border-b-green pb-[10px] tracking-[2.3px] hover:text-green transition-all whitespace-nowrap uppercase'
          type='submit'
        >
          {title}
        </button>
      )}
    </>
  );
};

export default UnderscoreLink;
