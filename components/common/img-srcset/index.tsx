import Image from 'next/image';
import React from 'react';

type ImgSrcsetProps = { wrapper: string; img: string; alt: string };

const ImgSrcset = ({ wrapper, img, alt }: ImgSrcsetProps) => {
  return (
    <div className={wrapper}>
      <Image
        src={img}
        alt={alt}
        fill
        sizes='100%'
        className='w-full h-full absolute top-0 left-0'
      />
    </div>
  );
};

export default ImgSrcset;
