"use client";

import React from 'react'
import CreateStockComponent from '@/components/stocks/CreateStockComponent';
import ProtectedRoute from '@/protected/protectedRoute';

const Page = () => {
  return (
    <ProtectedRoute>
      <div>
        <CreateStockComponent />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
