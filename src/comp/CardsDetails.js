import React from 'react';
import { useParams } from 'react-router-dom';
import CardsContent from './CardsContent';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from './Footer';

const CardsDetails = () => {
  const { id } = useParams();
  const card = CardsContent.find((card) => card.id === parseInt(id));

  return (
    <div className="" style={{ backgroundColor: 'rgb(247,247,247)' }}>
      {/* Flex container for Image and Title */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-52 mx-auto p-6 bg-orange-600 h-80">

        <div className='flex justify-center absolute mt-60 '>
          <div className="w-full md:w-1/2 h-80  ">
            <img src={card.image} alt={card.title} className=" w-full object-cover shadow-lg h-80" />
          </div>

          <div className="w-full md:w-1/2 p-4 bg-white flex items-center ">
            <h1 className="text-4xl font-bold text-gray-800">{card.description}</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8 w-3/4 mx-auto text-left">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood and makes them more likely to go ahead and join.
        </p>
        <hr className="border-gray-300 mb-6" />

        {/* Instructors */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Instructors</h2>
        <p className="text-gray-600 text-sm mb-4">Admin</p>
        <hr className="border-gray-300 mb-6" />

        {/* Price */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Price</h2>
        <p className="text-gray-600 text-sm mb-4">Free</p>
        <hr className="border-gray-300 mb-6" />

        {/* Social Sharing */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Share</h1>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/tasnem_salim/" className="text-gray-600 hover:text-gray-800 text-3xl"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/tasneem-salim-1b1480287/" className="text-gray-600 hover:text-gray-800 text-3xl"><FaLinkedin /></a>
          <a href="https://github.com/Tasniema" className="text-gray-600 hover:text-gray-800 text-3xl"><FaGithub /></a>
        </div>

        {/* Join Button */}
        <div className="text-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 font-semibold">
            Join
          </button>
        </div>
      </div>
      <Footer />
    </div>


  );
};

export default CardsDetails;
