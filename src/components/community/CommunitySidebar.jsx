import { Link } from 'react-router-dom';
import { FiTrendingUp, FiClock, FiAward } from 'react-icons/fi';

const CommunitySidebar = () => {
  const trendingDiscussions = [
    {
      id: 1,
      title: "Best Fantasy Books of 2024 So Far",
      comments: 45,
      likes: 123
    },
    {
      id: 2,
      title: "Most Anticipated March Releases",
      comments: 32,
      likes: 98
    }
  ];

  const activeReaders = [
    {
      id: 1,
      name: "Srujana",
      avatar: "",
      booksRead: 25,
      reviews: 42
    }
  ];

  return (
    <div className="space-y-8">
      {/* Trending Discussions */}
      {/* <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiTrendingUp className="text-pageturner-brown" />
          <h3 className="font-semibold text-pageturner-dark">Trending Discussions</h3>
        </div>
        <div className="space-y-4">
          {trendingDiscussions.map((discussion) => (
            <Link
              key={discussion.id}
              to={`/discussion/${discussion.id}`}
              className="block group"
            >
              <h4 className="text-pageturner-dark group-hover:text-pageturner-brown transition-colors duration-200">
                {discussion.title}
              </h4>
              <div className="flex items-center gap-4 mt-1 text-sm text-pageturner-brown">
                <span>{discussion.comments} comments</span>
                <span>{discussion.likes} likes</span>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      {/* Active Readers */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiAward className="text-pageturner-brown" />
          <h3 className="font-semibold text-pageturner-dark">Active Readers</h3>
        </div>
        <div className="space-y-4">
          {activeReaders.map((reader) => (
            <Link
              key={reader.id}
              to={`/profile/${reader.id}`}
              className="flex items-center gap-3 group"
            >
              <img
                src={reader.avatar}
                alt={reader.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-pageturner-dark group-hover:text-pageturner-brown transition-colors duration-200">
                  {reader.name}
                </h4>
                <div className="text-sm text-pageturner-brown">
                  {reader.booksRead} books · {reader.reviews} reviews
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-pageturner-dark mb-4">Community Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-pageturner-brown">5</div>
            <div className="text-sm text-pageturner-dark">Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pageturner-brown">2</div>
            <div className="text-sm text-pageturner-dark">Discussions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pageturner-brown">6</div>
            <div className="text-sm text-pageturner-dark">Books Read</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pageturner-brown">3</div>
            <div className="text-sm text-pageturner-dark">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar; 