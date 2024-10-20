import { useState } from 'react';
import { Link } from 'react-router-dom';
import CommunityContent from './CommunityContent';

const CommunityCards = () => {
  // State to track active tab and selected sort option
  const [activeTab, setActiveTab] = useState('all');
  const [sortOption, setSortOption] = useState('Recent-Activity');

  const myGroups = [];

  // Sort content based on the selected sort option
  const getSortedContent = () => {
    let sortedContent = [...CommunityContent];

    if (sortOption === 'A-Z') {
      sortedContent.sort((a, b) => a.description.toUpperCase().localeCompare(b.description.toUpperCase()));
    } else if (sortOption === 'Member-Count') {
      sortedContent.sort((a, b) => a.title - b.title); // Assuming memberCount is a property of the group
    }

    return sortedContent;
  };
  // Function to render content based on the selected tab and sort option
  const renderContent = () => {
    const content = getSortedContent();

    if (activeTab === 'all' || activeTab === 'suggested') {
      return content.map((card) => (
        <div key={card.id} className="shadow-lg overflow-hidden w-full sm:w-1/3 md:w-1/4 p-7 text-black border" style={{ backgroundColor: 'rgb(247,247,247)' }}>
          <img
            src={card.image}
            alt=''
            className="h-48 w-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="text-center py-4">
            <h3 className="font-bold text-xl mb-2 text-left">{card.description}</h3>
            <div className="text-left">
              <p className="mb-2">Public '{card.title}' Member</p>
            </div>
            <Link to={`/details/${card.id}`}>
              <button className=" bg-orange-600 mt-10 hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 w-3/4">
                Join
              </button>
            </Link>
          </div>
        </div>
      ));
    } else if (activeTab === 'myGroups') {
      if (myGroups.length === 0) {
        return <h1 className='font-bold text-2xl p-20 '>No groups to show yet. Once you join groups, they’ll appear here.</h1>;
      }
    }
  };

  return (
    <div className="" style={{ backgroundColor: 'rgb(247,247,247)' }}>
      <div className="mb-4 pl-36 pt-10 flex justify-between items-center">
        <p>Sort by:
          <select
            className="ml-2 p-2 border border-gray-300 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Recent-Activity">Recent Activity</option>
            <option value="A-Z">A - Z</option>
            <option value="Member-Count">Member Count</option>
          </select>
        </p>

      </div>

      <div className="relative z-20 py-10">
        {/* Tabs */}
        <div className="flex pl-36  space-x-6 mb-6">
          <ul className="flex space-x-4 text-orange-600 font-semibold">
            <li
              className={`cursor-pointer hover:underline ${activeTab === 'all' ? 'text-black' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All (3)
            </li>
            <li
              className={`cursor-pointer hover:underline ${activeTab === 'myGroups' ? 'text-black' : ''}`}
              onClick={() => setActiveTab('myGroups')}
            >
              My Groups
            </li>
            <li
              className={`cursor-pointer hover:underline ${activeTab === 'suggested' ? 'text-black' : ''}`}
              onClick={() => setActiveTab('suggested')}
            >
              Suggested Groups
            </li>
          </ul>
        </div>
        <hr className="mb-6" />

        {/* Content based on selected tab */}
        <div className="flex flex-wrap justify-center gap-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CommunityCards;
