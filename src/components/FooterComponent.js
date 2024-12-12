import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-200 md:mt-20 mt-0 text-black font-bold py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h4 className="text-lg font-semibold mb-2">Stock Management</h4>
            <p className="text-sm text-gray-600">
              Providing real-time stock management solutions.
            </p>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul>
              <li>
                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <button className="w-full bg-gray-600 text-white font-bold py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            &copy; 2024 Stock Management. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
