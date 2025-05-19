import React from 'react';
import Sidebar from '@/components/sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#F9F9F9] h-screen w-screen">
      <Sidebar />
      <div className='pl-[41px] pr-[48px] pt-[58px] h-screen w-[calc(100vw-280px)]'>{children}</div>
    </div> 
  );
};

export default DashboardLayout;