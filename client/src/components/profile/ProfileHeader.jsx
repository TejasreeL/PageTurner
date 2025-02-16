import { useState } from 'react';

const ProfileHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const favoriteBook = {
    title: "Harry Potter and the Philosopher's Stone",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    author: "J.K. Rowling"
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src="/default-avatar.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover border-4 border-pageturner-brown"
          />
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <h1 className="text-2xl font-bold text-pageturner-dark">Srujana</h1>
            <span className="text-pageturner-brown text-sm">(she/her)</span>
          </div>
          
          <p className={`mt-2 text-pageturner-dark ${!isExpanded && 'line-clamp-3'}`}>
            Book enthusiast and aspiring writer. Love exploring magical worlds and getting lost in stories.
          </p>
          
          {/* Show More Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-pageturner-brown hover:text-pageturner-dark mt-1"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>

        {/* Follow Button */}
        <button className="bg-pageturner-brown text-white px-6 py-2 rounded-full hover:bg-pageturner-beige transition-colors">
          Follow
        </button>
      </div>

      {/* Favorite Book */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-pageturner-dark mb-3">Favorite Book</h2>
        <div className="flex gap-4">
          <div className="relative group">
            <img
              src={favoriteBook.cover}
              alt={favoriteBook.title}
              className="w-24 h-36 object-cover rounded-md shadow-md"
            />
            <div className="absolute inset-0 bg-pageturner-dark bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-md flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 text-sm text-center px-2">
                <div className="font-bold">{favoriteBook.title}</div>
                <div className="text-xs">{favoriteBook.author}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader; 