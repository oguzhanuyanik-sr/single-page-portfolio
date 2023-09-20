import Logo from '@/components/common/logo';
import Socials from '@/components/common/socials';
import BarLayout from '@/components/layouts/bar-layout';
import React from 'react';
import { headerSection } from '@/app/api/response.json';

const HeaderSection = () => {
  return (
    <header>
      <BarLayout>
        <Logo title={headerSection.title} />
        <Socials data={headerSection.socials} />
      </BarLayout>
    </header>
  );
};

export default HeaderSection;
