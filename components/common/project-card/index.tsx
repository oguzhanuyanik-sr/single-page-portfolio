'use client';
import Image from 'next/image';
import React from 'react';
import UnderscoreLink from '../underscore-link';
import { motion } from 'framer-motion';

type Props = {};

const ProjectCard = ({ img, title, tags, buttons }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        type: 'spring',
      }}
      viewport={{ once: false }}
      className='md:w-[48%] flex flex-col'
      key={title}
    >
      <div className='w-full flex justify-center'>
        <Image
          src={img}
          alt={title}
          height={253}
          width={343}
          sizes='100%'
          className='md:w-full'
        />
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='mb-5 w-full'>
          <h5 className='text-heading-m mt-5 mb-3'>{title}</h5>
          <div className='flex gap-4'>
            {tags.map((item) => (
              <span className='text-body-l text-grey' key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className='mb-12 flex gap-8 w-full'>
          <UnderscoreLink title='View Project' url={buttons[0]} />
          <UnderscoreLink title='View Code' url={buttons[1]} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
