import React from 'react';
import Footer from './Footer';
import Aboutimg from './images/Aboutimg.jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: 'rgb(247,247,247)' }}>
       <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Aboutimg})` }}
      
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pl-8">
        <h1 className="text-8xl font-bold mb-4 w-1/2">THIS IS HOW
        I MADE IT</h1>
        <p className="text-2xl font-bold mb-4 w-1/2">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6  p-36">
      {/* Image Section */}
      <img
        src="https://static.wixstatic.com/media/c837a6_39934f7b85da43f3bffae040ba2aef11~mv2.jpg/v1/crop/x_0,y_366,w_6392,h_5367/fill/w_362,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1140544253.jpg"
        alt="Athlete"
        className="rounded-lg shadow-md w-full md:w-1/2  h-auto"
      />

      {/* Text and Button Section */}
      <div className="text-center md:text-left">
        <p className="text-lg text-gray-700 mb-4">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
          Join My Programs
        </button>
      </div>
    </div>

    <div className='bg-orange-600 text-white p-36 text-4xl text-center'>
      <h1 className='font-bold p-7 leading-relaxed'>“WE ARE WHAT WE REPEATEDLY DO. EXCELLENCE THEN IS NOT AN ACT BUT A HABIT.”</h1>
      <span>— Aristotle</span>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
