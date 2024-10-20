import React from 'react';
import gymImage from './images/sport.webp';
import run from './images/run.webp';
import CardsHome from './CardsHome';
import Footer from './Footer';
import MainHome from './MainHome';
import { FaDumbbell, FaSmileBeam, FaBolt } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css';  // Make sure this includes the animation CSS
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${gymImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
            <h1 className="text-6xl font-bold mb-4">IT DOESN'T GET EASIER.</h1>
            <h1 className="text-6xl font-bold mb-4">YOU GET BETTER.</h1>
            <button className="bg-transparent hover:bg-white text-white font-semibold py-2 px-6 border border-white rounded opacity-75 hover:text-black transition duration-300">
            <Link to='/list'>View All Challenges</Link>
          </button>
          </ScrollAnimation>
        </div>
      </div>

      <CardsHome />

      <div className="flex space-y-28 gap-24  md:flex-row" style={{ backgroundColor: 'rgb(247,247,247)' }}>
        <img src={run} alt="Running athlete" className="w-1/2" />
        <div className="w-52 text-left">
          <h4 className="font-bold">__ My Story __</h4>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <button className="mt-4 border border-white text-white bg-orange-600 hover:bg-black text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-52">
            Read More
          </button>
        </div>
      </div>

      <MainHome />

      <main className="p-8">
        <h1 className="text-center text-3xl font-bold mb-8">BENEFITS OF WORKING OUT</h1>

        <ScrollAnimation animateIn="custom-slide-in-left" duration={0.6}>
          <div className="mb-8">
            <FaDumbbell className="text-4xl text-orange-500 mb-2" />
            <h2 className="text-2xl font-bold mb-2">Build Confidence</h2>
            <p className="text-gray-600">I'm a paragraph. Click here to add your own text and edit me...</p>
            <hr className="border-orange-500 mt-4" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="custom-slide-in-left" duration={0.6} delay={200}>
          <div className="mb-8">
            <FaSmileBeam className="text-4xl text-orange-500 mb-2" />
            <h2 className="text-2xl font-bold mb-2">Boost Your Mood</h2>
            <p className="text-gray-600">I'm a paragraph. Click here to add your own text and edit me...</p>
            <hr className="border-orange-500 mt-4" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="custom-slide-in-left" duration={0.6} delay={400}>
          <div className="mb-8">
            <FaBolt className="text-4xl text-orange-500 mb-2" />
            <h2 className="text-2xl font-bold mb-2">Increase Energy Levels</h2>
            <p className="text-gray-600">I'm a paragraph. Click here to add your own text and edit me...</p>
            <hr className="border-orange-500 mt-4" />
          </div>
        </ScrollAnimation>
      </main>

     <div id="contact-section">
       <Contact/>
     </div>
      <Footer />
    </div>
  );
};

export default Home;
