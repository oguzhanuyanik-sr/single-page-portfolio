import Logo from '@/components/common/logo';
import Socials from '@/components/common/socials';
import BarLayout from '@/components/layouts/bar-layout';
import React from 'react';
import { headerSection } from '@/app/api/response.json';

const FooterSection = () => {
  return (
    <footer className='py-10'>
      <BarLayout>
        <Logo title={headerSection.title} />
        <Socials data={headerSection.socials} />
      </BarLayout>
    </footer>
  );
};

export default FooterSection;
