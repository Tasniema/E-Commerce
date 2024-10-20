import React from 'react';
import program from'./images/program.jpg';
import CardsList from './CardsList';
import Footer from './Footer';

const Program = () => {
  return (
    <div>
    <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${program})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white pl-8">
        <h1 className="text-5xl font-bold mb-4 w-60">CHALLENGE YOURSELF</h1>
        <p className="text-2xl font-bold mb-4 w-96">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
    </div>

    <CardsList/>
    <Footer/>
  </div>
  
  );
}

export default Program;
