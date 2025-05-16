import React from 'react';
import Sidebar from '@/components/sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#F9F9F9] h-screen w-screen">
      <Sidebar />
      <>{children}</>
    </div> 
  );
};

export default DashboardLayout;