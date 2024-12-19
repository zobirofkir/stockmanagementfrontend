"use client";

import GetStocksComponent from '@/components/stocks/GetStocksComponent'
import ProtectedRoute from '@/protected/protectedRoute'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <div>
          <GetStocksComponent />
      </div>
    </ProtectedRoute>
  )
}

export default page