import { useState } from 'react';

const BookDescription = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-pageturner-dark mb-4">About the Book</h2>
      
      <div className="relative">
        <div
          className={`prose text-pageturner-dark ${
            !isExpanded && 'line-clamp-4'
          }`}
        >
          {book.description}
        </div>
        
        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-pageturner-brown hover:text-pageturner-dark transition-colors duration-200"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BookDescription; 