import { useState } from 'react';
import { FiAward, FiCalendar, FiBook, FiUsers, FiClock } from 'react-icons/fi';

const ReadingChallenges = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const challenges = [
    {
      id: 1,
      title: "2024 Reading Challenge",
      description: "Read 50 books in 2024",
      type: "yearly",
      participants: 1234,
      progress: 15,
      goal: 50,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      isJoined: true,
      books: [
        {
          id: 1,
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
          title: "Project Hail Mary"
        },
        // More books...
      ]
    },
    {
      id: 2,
      title: "Fantasy February",
      description: "Read 4 fantasy books this month",
      type: "monthly",
      participants: 456,
      progress: 2,
      goal: 4,
      startDate: "2024-02-01",
      endDate: "2024-02-29",
      isJoined: true
    },
    {
      id: 3,
      title: "Classics Club",
      description: "Read 12 classic novels in 12 months",
      type: "ongoing",
      participants: 789,
      progress: 3,
      goal: 12,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      isJoined: false
    }
  ];

  const ChallengeCard = ({ challenge }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-pageturner-dark">{challenge.title}</h3>
          <p className="text-pageturner-brown mt-1">{challenge.description}</p>
        </div>
        <div className="flex items-center gap-2 text-pageturner-brown">
          <FiUsers className="w-4 h-4" />
          <span>{challenge.participants} participants</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm text-pageturner-brown">
          <span>{challenge.progress} of {challenge.goal} completed</span>
          <span>{Math.round((challenge.progress / challenge.goal) * 100)}%</span>
        </div>
        <div className="h-2 bg-pageturner-light rounded-full overflow-hidden">
          <div
            className="h-full bg-pageturner-brown transition-all duration-300"
            style={{ width: `${(challenge.progress / challenge.goal) * 100}%` }}
          />
        </div>
      </div>

      {/* Challenge Details */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-pageturner-brown">
          <FiCalendar className="w-4 h-4" />
          <span>Ends {new Date(challenge.endDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-pageturner-brown">
          <FiBook className="w-4 h-4" />
          <span>{challenge.goal} books goal</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`w-full px-4 py-2 rounded-lg transition-colors duration-200 ${
          challenge.isJoined
            ? 'bg-pageturner-light text-pageturner-dark hover:bg-pageturner-beige'
            : 'bg-pageturner-brown text-white hover:bg-pageturner-dark'
        }`}
      >
        {challenge.isJoined ? 'View Progress' : 'Join Challenge'}
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-pageturner-beige">
        {['ongoing', 'completed', 'upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 -mb-px text-sm font-medium capitalize transition-colors duration-200
              ${activeTab === tab
                ? 'text-pageturner-brown border-b-2 border-pageturner-brown'
                : 'text-pageturner-dark hover:text-pageturner-brown'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default ReadingChallenges; 