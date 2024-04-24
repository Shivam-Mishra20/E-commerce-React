import React from 'react';
import { useSelector,   } from 'react-redux';

const Footer = ( ) => {
  const darkmode = useSelector((state) => state.darkMode)
  return (
    <footer className={`" bg-gray-800  text-white ${darkmode && "bg-black text-white"} text-gray-300"`}>
      <div className="container mx-auto py-8 my-2 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">

            <span className=' text-xl sm:text-2xl text-[#FFA22F] '><span className={` text-black  font-extrabold ${darkmode && "text-white"}   `}>E</span >mitra</span>




            <ul>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Categories</h4>
            <ul>
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Books</li>
              <li>Home & Garden</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div className="mb-4 ">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 mt-4 text-center">
          <p>&copy; 2024 Emitra's Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
