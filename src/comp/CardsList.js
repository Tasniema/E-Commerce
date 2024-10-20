import React from 'react';
import { Link } from 'react-router-dom';
import CardsContent from './CardsContent';

const CardsList = () => {
  return (
    <div className="relative z-20 py-10" style={{ backgroundColor: 'rgb(247,247,247)' }}>
      <div className="flex flex-wrap justify-center gap-10">
        {CardsContent.map((card) => (
          <div key={card.id} className="shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 p-4 text-black border" style={{ backgroundColor: 'rgb(247,247,247)' }}>
            <img
              src={card.image}
              alt=''
              className="h-48 w-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-center py-4">
              <h3 className="font-bold text-xl mb-2 text-left">{card.description}</h3>
              <div className="text-left">
                <p className="mb-2">{card.title} Participant</p>
                <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold mb-4">Free</span>
              </div>
              <Link to={`/details/${card.id}`}>
                <button className="mt-2 bg-orange-600 hover:bg-black hover:text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
