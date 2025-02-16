import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiHeart, FiShare2, FiFilter, FiPlus } from 'react-icons/fi';
import CreateDiscussionModal from './CreateDiscussionModal';

const DiscussionSection = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [sortBy, setSortBy] = useState('latest');

  const discussions = [
    {
      id: 1,
      user: {
        id: 1,
        name: "Tejasree",
        avatar: "",
      },
      title: "Thoughts on the ending of 'Project Hail Mary'?",
      content: "Just finished reading...",
      tags: ["Science Fiction", "Project Hail Mary", "Book Discussion"],
      likes: 42,
      comments: 18,
      timestamp: "2024-02-20T10:30:00",
      book: {
        id: 5,
        title: "Project Hail Mary",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg"
      }
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Shivangi",
        avatar: "",
      },
      title: "Best Fantasy Series for Beginners?",
      content: "I'm new to the fantasy genre",
      tags: ["Fantasy", "Recommendations", "Book Discussion"],
      likes: 35,
      comments: 24,
      timestamp: "2024-02-19T15:45:00"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown text-pageturner-dark"
          >
            <option value="latest">Latest</option>
            <option value="trending">Trending</option>
            <option value="most_liked">Most Liked</option>
          </select>

          <button className="flex items-center gap-2 px-3 py-2 text-pageturner-brown hover:text-pageturner-dark">
            <FiFilter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        <Link
          to="/discussion/create"
          className="flex items-center gap-2 px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
        >
          <FiPlus className="w-4 h-4" />
          <span>Start Discussion</span>
        </Link>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Link
            key={discussion.id}
            to={`/discussion/${discussion.id}`}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={discussion.user.avatar}
                alt={discussion.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-pageturner-dark">{discussion.user.name}</h3>
                <p className="text-sm text-pageturner-brown">
                  {new Date(discussion.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Discussion Content */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-pageturner-dark hover:text-pageturner-brown transition-colors duration-200">
                {discussion.title}
              </h2>
              
              <p className="text-pageturner-dark">{discussion.content}</p>

              {/* Related Book (if any) */}
              {discussion.book && (
                <div className="flex items-center gap-3 p-3 bg-pageturner-light rounded-lg">
                  <img
                    src={discussion.book.cover}
                    alt={discussion.book.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm text-pageturner-brown">Related Book</p>
                    <p className="font-medium text-pageturner-dark">{discussion.book.title}</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {discussion.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-pageturner-light text-pageturner-dark text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-pageturner-beige">
              <div className="flex items-center gap-2 text-pageturner-brown">
                <FiHeart className="w-5 h-5" />
                <span>{discussion.likes}</span>
              </div>
              <div className="flex items-center gap-2 text-pageturner-brown">
                <FiMessageCircle className="w-5 h-5" />
                <span>{discussion.comments}</span>
              </div>
              <div className="flex items-center gap-2 text-pageturner-brown">
                <FiShare2 className="w-5 h-5" />
                <span>Share</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Create Discussion Modal */}
      {showCreateModal && (
        <CreateDiscussionModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default DiscussionSection; 