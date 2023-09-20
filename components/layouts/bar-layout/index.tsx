import React from 'react';

const BarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container'>
      <div className='w-full flex flex-wrap justify-center md:justify-between'>
        {children}
      </div>
    </div>
  );
};

export default BarLayout;
