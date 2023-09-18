import React from 'react';

const BarLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full flex justify-between'>{children}</div>;
};

export default BarLayout;
