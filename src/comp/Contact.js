import React, { useEffect, useState } from 'react';
import footballImage from './images/football.png';

const Contact = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateX = Math.sin(scrollPos / 100) * 40;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 items-center bg-white  md:p-12" >
  {/* Contact Form */}
  <div className="md:w-1/2 mb-40 p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">GET IN TOUCH</h1>
    <p className="text-gray-600 mb-6">Got Questions? Just Contact Me Below</p>

    <form className="space-y-4">
      {/* First Name and Last Name */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Email and Subject */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {/* Submit Button */}
      <div>
        <input
          type="submit"
          value="Submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
        />
      </div>
    </form>
  </div>

  {/* Image */}
  <div className="relative md:w-1/2 p-4">
      <img
        src={footballImage}
        alt="Profile"
        className="w-full h-1/4 transition-transform duration-300 relative bottom-28"
        style={{ transform: `translateX(${translateX}px)` }}
      />
      {/* Overlay with specified color and height */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgb(42,42,42 , 0.7)',
          height: '73%',
          top: '14%',
        }}
      />
    </div>

</div>
  );
}

export default Contact;

