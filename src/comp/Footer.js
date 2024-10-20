import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-black py-12 px-4" style={{ backgroundColor: 'rgb(247,247,247)' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">ROY PRATT —</h1>
        <h1 className="text-2xl font-semibold text-center mb-4">CERTIFIED FITNESS TRAINER</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <hr className="border-t border-gray-300 my-8" />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

          <div>
            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <ul>
              <li className="mb-2 hover:text-gray-700"><a href="/"> &gt;  Home</a></li>
              <li className="mb-2 hover:text-gray-700"><a href="/"> &gt;  About</a></li>
              <li className="mb-2 hover:text-gray-700"><a href="/"> &gt;  Program List</a></li>
              <li className="mb-2 hover:text-gray-700"><a href="/"> &gt;  Community</a></li>
              <li className="mb-2 hover:text-gray-700"><a href="/"> &gt;  Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Stay Tuned</h2>
            <p className="mb-4">Subscribe Now and Get Access to Exclusive Workouts and Tips</p>
            <form className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 w-full rounded-md bg-gray-200 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className='ml-12'>
            <h2 className="text-lg font-bold mb-4 ">Follow Me</h2>
            <ul>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-700">
                <FaInstagram />
                <a href="https://www.instagram.com/tasnem_salim/">Instagram</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-700">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/tasneem-salim-1b1480287/">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-700">
                <FaGithub />
                <a href="https://github.com/Tasniema">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>&copy; 2024 Tasneem Salim. All rights reserved.</p>
      </div>
    </div>

  );
}

export default Footer;
