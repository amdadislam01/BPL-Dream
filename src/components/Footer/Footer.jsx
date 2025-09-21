import React from 'react'
import logoFooter from '../../assets/logo-footer.png';
const Footer = () => {
  return (
    <footer className="bg-[#0b0d17] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={logoFooter}
            alt="Cricket Logo"
            className="h-20 mb-2"
          />
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered rounded-md px-4 py-2 w-full"
            />
            <button className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-pink-400 to-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-6">
        ©2025 BPL-Dream All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
