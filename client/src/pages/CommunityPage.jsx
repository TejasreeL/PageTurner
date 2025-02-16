import { useState } from 'react';
import { FiUsers, FiMessageCircle, FiBarChart2, FiAward } from 'react-icons/fi';
import DiscussionSection from '../components/community/DiscussionSection';
import ReadingChallenges from '../components/community/ReadingChallenges';
import CommunitySidebar from '../components/community/CommunitySidebar';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: FiMessageCircle },
    { id: 'challenges', label: 'Reading Challenges', icon: FiAward },
  ];

  return (
    <div className="min-h-screen bg-pageturner-light pb-12">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <FiUsers className="text-3xl text-pageturner-brown" />
            <h1 className="text-3xl font-bold text-pageturner-dark">Book Club Community</h1>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 border-b border-pageturner-beige">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 -mb-px text-sm font-medium transition-colors duration-200
                  ${activeTab === tab.id
                    ? 'text-pageturner-brown border-b-2 border-pageturner-brown'
                    : 'text-pageturner-dark hover:text-pageturner-brown'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'discussions' && <DiscussionSection />}
            {activeTab === 'challenges' && <ReadingChallenges />}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <CommunitySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 