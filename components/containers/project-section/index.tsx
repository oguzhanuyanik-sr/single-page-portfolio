import UnderscoreLink from '@/components/common/underscore-link';
import React from 'react';
import { projectSection } from '@/app/api/response.json';
import Image from 'next/image';
import ProjectCard from '@/components/common/project-card';

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <section className='flex flex-col items-center'>
      <div className='mt-14 mb-10 w-full flex justify-between items-center'>
        <h4 className='font-bold text-[40px] leading-[40px] md:text-[72px] md:leading-[72px]'>
          {projectSection.header.title}
        </h4>
        <div>
          <UnderscoreLink title='Contact Me' url='/' />
        </div>
      </div>

      <div className='max-w-[343px] md:max-w-full'>
        <div className='w-full flex flex-col justify-center md:flex-row md:flex-wrap md:justify-between'>
          {projectSection.portfolio.map((data, index) => (
            <ProjectCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
