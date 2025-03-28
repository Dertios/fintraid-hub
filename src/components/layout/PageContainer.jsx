
import React from 'react';

const PageContainer = ({ children, className = '' }) => {
  return (
    <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
