import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';

const BookCard = ({ book, onAddToLibrary, onClick }) => {
  const { cover, title, author, rating, reviewsCount, genres } = book;

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Book Cover */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{author}</p>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({reviewsCount})
          </span>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-3">
          {genres.map(genre => (
            <span
              key={genre}
              className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Add to Library Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToLibrary(book);
          }}
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          <BiBookAdd className="w-5 h-5" />
          <span>Add to Library</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard; 