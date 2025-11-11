import { useState } from 'react';
import { FiStar, FiThumbsUp, FiMessageSquare, FiFlag, FiEdit2, FiTrash2 } from 'react-icons/fi';

const ReviewSection = ({ book }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [newReview, setNewReview] = useState({ rating: 0, content: '' });
  const [hoveredStar, setHoveredStar] = useState(0);

  const reviews = [
    {
      id: 1,
      user: {
        id: 1,
        name: "Srujana",
        avatar: "",
        isVerifiedReader: true
      },
      rating: 5,
      date: "2024-01-15",
      content: "This book was absolutely amazing!",
      likes: 24,
      replies: [],
      isEdited: false,
      readingStatus: "Finished",
      pagesRead: "384/384"
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Bhavani",
        avatar: "",
        isVerifiedReader: true
      },
      rating: 4,
      date: "2024-01-20",
      content: "A great read overall.",
      likes: 15,
      replies: [],
      isEdited: true,
      readingStatus: "Currently Reading",
      pagesRead: "156/384"
    }
  ];

  const ReviewModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h3 className="text-xl font-bold text-pageturner-dark mb-4">Write a Review</h3>
        
        {/* Rating Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-pageturner-dark mb-2">
            Your Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setNewReview({ ...newReview, rating: star })}
                className="text-2xl"
              >
                <FiStar
                  className={`w-8 h-8 transition-colors duration-200 ${
                    star <= (hoveredStar || newReview.rating)
                      ? "fill-current text-pageturner-brown"
                      : "text-pageturner-beige"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-pageturner-dark mb-2">
            Your Review
          </label>
          <textarea
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            className="w-full h-40 px-4 py-3 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
            placeholder="Share your thoughts about the book..."
          />
        </div>

        {/* Reading Status */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-pageturner-dark mb-2">
            Reading Status
          </label>
          <select className="w-full px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown">
            <option value="finished">Finished Reading</option>
            <option value="reading">Currently Reading</option>
            <option value="dnf">Did Not Finish</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowReviewModal(false)}
            className="flex-1 px-4 py-2 bg-pageturner-light text-pageturner-dark rounded-lg hover:bg-pageturner-beige transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle review submission
              setShowReviewModal(false);
            }}
            className="flex-1 px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );

  const ReviewCard = ({ review }) => (
    <div className="border-b border-pageturner-beige pb-6 last:border-0">
      <div className="flex items-start gap-4">
        <img
          src={review.user.avatar}
          alt={review.user.name}
          className="w-12 h-12 rounded-full"
        />
        
        <div className="flex-1">
          {/* Review Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-pageturner-dark">{review.user.name}</h3>
                {review.user.isVerifiedReader && (
                  <span className="px-2 py-0.5 bg-pageturner-brown/10 text-pageturner-brown text-xs rounded-full">
                    Verified Reader
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-current text-pageturner-brown" : "text-pageturner-beige"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-pageturner-brown">
                  • {review.readingStatus}
                </span>
                <span className="text-sm text-pageturner-brown">
                  • {review.pagesRead}
                </span>
              </div>
            </div>
            <div className="text-sm text-pageturner-brown">
              {new Date(review.date).toLocaleDateString()}
              {review.isEdited && " (edited)"}
            </div>
          </div>

          {/* Review Content */}
          <p className="mt-3 text-pageturner-dark">{review.content}</p>

          {/* Review Actions */}
          <div className="flex items-center gap-6 mt-4">
            <button className="flex items-center gap-2 text-sm text-pageturner-brown hover:text-pageturner-dark">
              <FiThumbsUp className="w-4 h-4" />
              <span>{review.likes} Helpful</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-pageturner-brown hover:text-pageturner-dark">
              <FiMessageSquare className="w-4 h-4" />
              <span>{review.replies.length} Replies</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-pageturner-brown hover:text-pageturner-dark">
              <FiFlag className="w-4 h-4" />
              <span>Report</span>
            </button>
          </div>

          {/* Replies */}
          {review.replies.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-pageturner-beige space-y-4">
              {review.replies.map((reply) => (
                <div key={reply.id} className="flex items-start gap-3">
                  <img
                    src={reply.user.avatar}
                    alt={reply.user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-pageturner-dark">{reply.user.name}</h4>
                      <span className="text-xs text-pageturner-brown">
                        {new Date(reply.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-pageturner-dark">{reply.content}</p>
                    <button className="mt-2 flex items-center gap-2 text-xs text-pageturner-brown hover:text-pageturner-dark">
                      <FiThumbsUp className="w-3 h-3" />
                      <span>{reply.likes} Helpful</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-pageturner-dark">Reviews</h2>
          <p className="text-sm text-pageturner-brown mt-1">Based on 245 reviews</p>
        </div>
        <button
          onClick={() => setShowReviewModal(true)}
          className="px-4 py-2 bg-pageturner-brown text-white rounded-lg hover:bg-pageturner-dark transition-colors duration-200"
        >
          Write a Review
        </button>
      </div>

      {/* Rating Statistics */}
      <div className="bg-pageturner-light/50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Average Rating */}
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-pageturner-dark">4.5</div>
            <div>
              <div className="flex text-pageturner-brown mb-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={`w-5 h-5 ${i < 4 ? "fill-current" : ""}`} />
                ))}
              </div>
              <div className="text-sm text-pageturner-brown">Average Rating</div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm text-pageturner-dark">{rating}</span>
                  <FiStar className="w-4 h-4 fill-current text-pageturner-brown" />
                </div>
                <div className="flex-1 h-2 bg-pageturner-beige rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pageturner-brown"
                    style={{ width: `${rating * 20}%` }}
                  />
                </div>
                <span className="text-sm text-pageturner-brown w-12">
                  {rating * 20}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-pageturner-brown">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1 border border-pageturner-beige rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
        >
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rated</option>
          <option value="helpful">Most Helpful</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Review Modal */}
      {showReviewModal && <ReviewModal />}
    </div>
  );
};

export default ReviewSection; 