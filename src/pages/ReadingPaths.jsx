import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
import { BiSearch, BiPlus, BiChevronDown, BiChevronRight } from 'react-icons/bi';
import CreatePathModal from '../components/readingPaths/CreatePathModal';

const ReadingPaths = () => {
  const [expandedPath, setExpandedPath] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const readingPaths = [
    {
      id: 1,
      title: "Classic Fantasy Journey",
      description: "Begin your journey through the foundational works of fantasy",
      genre: "Fantasy",
      creator: "Pageturner Staff",
      progress: 0,
      books: [
        {
          id: 1,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
          description: "A comfortable hobbit's unexpected journey...",
          isRead: false
        },
        {
          id: 2,
          title: "The Fellowship of the Ring",
          author: "J.R.R. Tolkien",
          cover: "https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg",
          description: "The first part of the epic Lord of the Rings trilogy...",
          isRead: false
        },
        {
          id: 3,
          title: "The Silmarillion",
          author: "J.R.R. Tolkien",
          cover: "https://m.media-amazon.com/images/I/81NcWJ-D1BL._AC_UF1000,1000_QL80_.jpg",
          description: "The ancient history of Middle-earth...",
          isRead: false
        }
      ]
    },
    // Add more reading paths...
  ];

  const handlePathClick = (pathId) => {
    setExpandedPath(expandedPath === pathId ? null : pathId);
  };

  const handleMarkAsRead = (pathId, bookId) => {
    // Update reading progress logic here
  };

  const handleCreatePath = (newPath) => {
    // Add the new path to your paths list
    console.log('New path:', newPath);
    // Implementation depends on your data management solution
  };

  return (
    <div className="min-h-screen bg-pageturner-light">
      {/* <Navbar /> */}
      
      {/* Header */}
      <div className="bg-gradient-to-b from-pageturner-beige to-pageturner-light">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-cinzel text-pageturner-navy mb-2">
            Reading Paths 📖
          </h1>
          <p className="text-lg font-crimson text-pageturner-dark mb-6">
            Follow curated reading paths based on genres, authors, or themes
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pageturner-brown" />
              <input
                type="text"
                placeholder="Search reading paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-pageturner-brown 
                         bg-white focus:outline-none focus:ring-2 
                         focus:ring-pageturner-sage"
              />
            </div>
            
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="px-4 py-2 bg-pageturner-navy text-pageturner-light rounded-lg 
                      hover:bg-pageturner-dark transition-colors duration-300 
                      flex items-center space-x-2 shadow-md"
            >
              <BiPlus className="w-5 h-5" />
              <span>Create New Path</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reading Paths List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {readingPaths.map(path => (
            <div key={path.id} className="bg-white rounded-lg shadow-md overflow-hidden 
                                      border border-pageturner-beige hover:shadow-lg 
                                      transition-shadow duration-300">
              {/* Path Header */}
              <div
                onClick={() => handlePathClick(path.id)}
                className={`p-4 cursor-pointer transition-colors duration-300
                          ${expandedPath === path.id 
                            ? 'bg-pageturner-navy text-pageturner-light'
                            : 'bg-pageturner-beige text-pageturner-dark hover:bg-pageturner-brown hover:text-pageturner-light'
                          }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-cinzel">{path.title}</h3>
                    <p className="text-sm font-crimson opacity-90">{path.description}</p>
                  </div>
                  {expandedPath === path.id ? (
                    <BiChevronDown className="w-6 h-6" />
                  ) : (
                    <BiChevronRight className="w-6 h-6" />
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pageturner-sage transition-all duration-300"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
              </div>

              {/* Expanded View */}
              {expandedPath === path.id && (
                <div className="p-6 bg-gradient-to-b from-white to-pageturner-light">
                  <div className="space-y-6">
                    {path.books.map((book, index) => (
                      <div key={book.id} className="flex gap-6">
                        {/* Step Number */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pageturner-sage 
                                    text-pageturner-navy flex items-center justify-center 
                                    font-bold shadow-md">
                          {index + 1}
                        </div>

                        {/* Book Details */}
                        <div className="flex-1">
                          <div className="flex gap-4">
                            <img
                              src={book.cover}
                              alt={book.title}
                              className="w-24 h-36 object-cover rounded-md shadow-md 
                                     hover:shadow-lg transition-shadow duration-300"
                            />
                            <div className="flex-1">
                              <h4 className="font-cinzel text-lg text-pageturner-navy">
                                {book.title}
                              </h4>
                              <p className="font-crimson text-pageturner-brown">
                                {book.author}
                              </p>
                              <p className="font-crimson text-pageturner-dark mt-2">
                                {book.description}
                              </p>
                              
                              {/* Mark as Read Checkbox */}
                              <label className="flex items-center space-x-2 mt-4 
                                            cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={book.isRead}
                                  onChange={() => handleMarkAsRead(path.id, book.id)}
                                  className="w-4 h-4 text-pageturner-sage rounded 
                                         focus:ring-2 focus:ring-pageturner-sage 
                                         focus:ring-offset-2"
                                />
                                <span className="font-crimson text-pageturner-dark 
                                             group-hover:text-pageturner-navy 
                                             transition-colors duration-300">
                                  Mark as Read
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <CreatePathModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreatePath={handleCreatePath}
      />
    </div>
  );
};

export default ReadingPaths; 