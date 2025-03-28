
import React from 'react';
import Navbar from './Navbar';
import PageContainer from './PageContainer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageContainer>
        {children}
      </PageContainer>
    </div>
  );
};

export default MainLayout;
