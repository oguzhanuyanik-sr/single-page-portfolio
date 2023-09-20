'use client';
import React from 'react';
import { skillSection } from '@/app/api/response.json';
import { motion } from 'framer-motion';

type Props = {};

const SkillSection = (props: Props) => {
  return (
    <div className='container'>
      <section className='border-y-2 md:border-b-0 border-grey mt-20 py-10 flex flex-col md:flex-row md:justify-between md:flex-wrap w-full items-center gap-6 md:gap-[52px] md:gap-[56px]'>
        {skillSection.map(({ title, experience }) => (
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
            className='w-full text-center md:w-[45%] lg:w-[30%]'
            key={title}
          >
            <h3 className='font-bold text-[32px] leading-[40px] md:text-heading-l md:text-start'>
              {title}
            </h3>
            <p className='text-grey text-base leading-[26px] font-medium mt-[2px] md:text-body-l md:text-start'>
              {experience} Years Experience
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default SkillSection;
