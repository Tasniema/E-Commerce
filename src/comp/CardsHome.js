import React from 'react';

const CardsHome = () => {
  return (
    <div className="relative z-20  py-10" style={{ backgroundColor: 'rgb(247,247,247)' }}>
        <h2 className="text-center text-2xl font-bold text-gray-600 mb-6">JOIN THE ROY PRATT TRAINING CLUB</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 p-4 text-white" style={{ backgroundColor: 'rgba(20, 25, 31, 0.8)' }}>
            <img src="https://static.wixstatic.com/media/c837a6_25f64eb6dc7c40ed8e4fad42007d085e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp" alt="" className="h-48 w-full object-cover" />

            <div className="text-center px-4 py-2">
              <h3 className="font-bold text-xl mb-2">Core & Abs Challenge</h3>
              <div className="text-left">
                <p className="mb-2">3 Participants</p>
                <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold mb-4">Free</span>
              </div>
              <div>
                <button className="mt-4  bg-orange-600  hover:bg-white hover:text-gray-600 text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-52">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 p-4 text-white" style={{ backgroundColor: 'rgba(20, 25, 31, 0.8)' }}>
            <img src="https://static.wixstatic.com/media/c837a6_be3f2b7431d748059fa9104b595c91ab~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp" alt="" className="h-48 w-full object-cover" />
            <div className="text-center px-4 py-2">
              <h3 className="font-bold text-xl mb-2">Upper Challenge</h3>
              <div className="text-left">
                <p className="mb-2">1 Participant</p>
                <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold mb-4">Free</span>
              </div>
              <div>
                <button className="mt-4  bg-orange-600  hover:bg-white hover:text-gray-600 text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-52">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 p-4 text-white" style={{ backgroundColor: 'rgba(20, 25, 31, 0.8)' }}>
            <img src="https://static.wixstatic.com/media/c837a6_0f4c434b9b8c4a159c8a67c2307aea48~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp" alt="" className="h-48 w-full object-cover" />
            <div className="text-center px-4 py-2">
              <h3 className="font-bold text-xl mb-2">Movement Challenge</h3>
              <div className="text-left">
                <p className="mb-2">1 Participant</p>
                <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold mb-4">Free</span>
              </div>
              <div>
                <button className="mt-4  bg-orange-600  hover:bg-white hover:text-gray-600 text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-52">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CardsHome;
