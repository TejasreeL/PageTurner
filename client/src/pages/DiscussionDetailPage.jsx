import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiHeart, FiShare2, FiMoreVertical, FiFlag, FiEdit2, FiTrash2 } from 'react-icons/fi';

const DiscussionDetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  // Mock discussion data
  const discussion = {
    id: 1,
    user: {
      id: 1,
      name: "Tejasree",
      avatar: "",
    },
    title: "Thoughts on the ending of 'Project Hail Mary'?",
    content: "Just finished reading this book.",
    tags: ["Science Fiction", "Project Hail Mary", "Book Discussion"],
    likes: 42,
    comments: [
      {
        id: 1,
        user: {
          name: "Harshitha",
          avatar: "",
        },
        content: "The ending was perfect! The way Andy Weir balanced the emotional and scientific aspects was masterful.",
        likes: 15,
        timestamp: "2024-02-19T15:45:00",
        replies: []
      },
      {
        id: 2,
        user: {
          name: "Srujana",
          avatar: "",
        },
        content: "I had mixed feelings about Grace's final decision, but it made sense for his character arc.",
        likes: 8,
        timestamp: "2024-02-19T16:30:00",
        replies: []
      }
    ],
    timestamp: "2024-02-19T14:30:00",
    book: {
      id: 5,
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg"
    }
  };

  return (
    <div className="min-h-screen bg-pageturner-light pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Discussion */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={discussion.user.avatar}
                alt={discussion.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-pageturner-dark">{discussion.user.name}</h3>
                <p className="text-sm text-pageturner-brown">
                  {new Date(discussion.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="p-2 text-pageturner-brown hover:text-pageturner-dark rounded-full hover:bg-pageturner-light"
              >
                <FiMoreVertical className="w-5 h-5" />
              </button>
              
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <button className="w-full px-4 py-2 text-left flex items-center gap-2 text-pageturner-brown hover:bg-pageturner-light">
                    <FiFlag className="w-4 h-4" />
                    <span>Report</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left flex items-center gap-2 text-pageturner-brown hover:bg-pageturner-light">
                    <FiEdit2 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left flex items-center gap-2 text-red-500 hover:bg-red-50">
                    <FiTrash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl font-bold text-pageturner-dark mb-4">{discussion.title}</h1>
          <p className="text-pageturner-dark mb-6">{discussion.content}</p>

          {/* Related Book */}
          {discussion.book && (
            <div className="flex items-center gap-4 p-4 bg-pageturner-light rounded-lg mb-6">
              <img
                src={discussion.book.cover}
                alt={discussion.book.title}
                className="w-16 h-24 object-cover rounded"
              />
              <div>
                <p className="text-sm text-pageturner-brown">Related Book</p>
                <h3 className="font-medium text-pageturner-dark">{discussion.book.title}</h3>
                <p className="text-pageturner-brown">{discussion.book.author}</p>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {discussion.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-pageturner-light text-pageturner-dark text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 pt-4 border-t border-pageturner-beige">
            <button className="flex items-center gap-2 text-pageturner-brown hover:text-pageturner-dark">
              <FiHeart className="w-5 h-5" />
              <span>{discussion.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-pageturner-brown hover:text-pageturner-dark">
              <FiShare2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-6">
          {/* Add Comment */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-pageturner-dark mb-4">Add a Comment</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full h-32 px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
              placeholder="Share your thoughts..."
            />
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200">
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          {discussion.comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-pageturner-dark">{comment.user.name}</h4>
                    <span className="text-sm text-pageturner-brown">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-pageturner-dark">{comment.content}</p>
                  
                  {/* Comment Actions */}
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 text-sm text-pageturner-brown hover:text-pageturner-dark">
                      <FiHeart className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-sm text-pageturner-brown hover:text-pageturner-dark">
                      Reply
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-4 pl-4 border-l-2 border-pageturner-beige space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <img
                            src={reply.user.avatar}
                            alt={reply.user.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-pageturner-dark">{reply.user.name}</h5>
                              <span className="text-xs text-pageturner-brown">
                                {new Date(reply.timestamp).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-pageturner-dark">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetailPage; 