import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Stock Management, All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
