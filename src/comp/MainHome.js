import React from 'react';
import { FaHome, FaUser, FaComments , FaGooglePlay} from 'react-icons/fa';

const MainHome = () => {
  return (
    <div>
        <main className="bg-orange-500 h-auto w-5/6 md:w-3/4 lg:w-2/3 p-10 mx-auto my-20 rounded-lg flex justify-center items-center shadow-lg">
  <div className="flex flex-col md:flex-row items-center">
  <div className="bg-white md:w-80 h-auto shadow-lg rounded-lg border-4 border-orange-300 text-center relative">
  <img
    src="https://static.wixstatic.com/media/c837a6_25f64eb6dc7c40ed8e4fad42007d085e~mv2.jpg/v1/crop/x_4,y_179,w_2571,h_1061/c837a6_25f64eb6dc7c40ed8e4fad42007d085e~mv2.jpg"
    alt=""
    className="w-full h-36 object-cover rounded-lg "
  />
  <h2 className="text-lg font-bold ">Roy Pratt Training</h2>
  <p className="text-gray-600 ">Members</p>
  <button className="bg-white text-orange-600 border-2 border-orange-600 w-20 rounded-xl mb-4">
    Invite
  </button>

  <div className="bg-gray-100 rounded-lg p-4 ">
  <h3 className="text-lg font-semibold mb-2">Comments</h3>
  
  <div className="flex items-start space-x-2 mb-2">
    <FaUser className="text-gray-600 w-4 h-4 mt-1" />
    <p className="text-gray-600 text-sm">Great! ...</p>
  </div>
  
  <div className="flex items-start space-x-2 ">
    <FaUser className="text-gray-600 w-4 h-4 mt-1" />
    <p className="text-gray-600 text-sm">Can do so....</p>
  </div>
  
  <input
    type="text"
    placeholder="Add a comment..."
    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
  />
</div>

  <div className="absolute bottom-0 left-0 right-0 bg-gray-200 flex justify-around py-2 rounded-b-lg">
    <FaHome className="text-orange-600 w-6 h-6" />
    <FaUser className="text-orange-600 w-6 h-6" />
    <FaComments className="text-orange-600 w-6 h-6" />
  </div>
</div>

    <div className="ml-8 text-white">
      <h1 className="text-2xl font-bold mb-4">JOIN US ON MOBILE!</h1>
      <p className="mb-4">
        Download the Spaces by Wix app and join “Roy Pratt Training Club” to
        easily stay updated on the go.
      </p>
      <div>
  <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-orange-600 transition flex items-center space-x-2">
    <FaGooglePlay className="w-5 h-5" />
    <span>Get on Google Play</span>
  </button>
</div>
    </div>
  </div>
</main>

    </div>
  );
}

export default MainHome;
