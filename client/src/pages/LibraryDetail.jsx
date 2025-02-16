import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiEdit, BiTrash, BiArrowBack } from 'react-icons/bi';
import Navbar from '../components/Navbar';
import BookCard from '../components/library/BookCard';

const LibraryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // This would typically come from your global state or API
  const [library, setLibrary] = useState({
    id: 1,
    name: "Hogwarts Required Reading",
    description: "Essential books for every young wizard",
    books: [
      {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
        rating: 4.8,
        reviewsCount: 12847,
        genres: ["Fantasy", "Young Adult", "Magic"]
      },
      // ... other books
    ]
  });

  const handleEditLibrary = () => {
    setIsEditing(true);
  };

  const handleSaveLibrary = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save changes to backend
  };

  const handleDeleteLibrary = () => {
    if (window.confirm('Are you sure you want to delete this library?')) {
      // Delete logic here
      navigate('/library');
    }
  };

  const handleRemoveBook = (bookId) => {
    if (window.confirm('Remove this book from the library?')) {
      setLibrary(prev => ({
        ...prev,
        books: prev.books.filter(book => book.id !== bookId)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-pageturner-light">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/library')}
            className="flex items-center text-pageturner-dark hover:text-pageturner-brown mb-4"
          >
            <BiArrowBack className="w-5 h-5 mr-2" />
            Back to Libraries
          </button>

          <div className="bg-pageturner-beige border border-pageturner-brown rounded-lg p-6 shadow-md">
            {isEditing ? (
              <form onSubmit={handleSaveLibrary}>
                <input
                  type="text"
                  value={library.name}
                  onChange={(e) => setLibrary(prev => ({ ...prev, name: e.target.value }))}
                  className="text-2xl font-cinzel w-full bg-pageturner-light border 
                           border-pageturner-brown rounded px-3 py-2 mb-3 
                           focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                />
                <textarea
                  value={library.description}
                  onChange={(e) => setLibrary(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full font-crimson bg-pageturner-light border 
                           border-pageturner-brown rounded px-3 py-2 mb-3 
                           focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                  rows="3"
                />
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-pageturner-light text-pageturner-dark 
                             rounded-lg hover:bg-pageturner-beige transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pageturner-brown text-pageturner-light 
                             rounded-lg hover:bg-pageturner-dark transition-colors duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-cinzel text-pageturner-dark mb-2">{library.name}</h1>
                  <p className="font-crimson text-pageturner-dark">{library.description}</p>
                  <p className="font-crimson text-pageturner-dark mt-2">
                    {library.books.length} books
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleEditLibrary}
                    className="p-2 text-pageturner-dark hover:bg-pageturner-light 
                             rounded-lg transition-colors duration-300"
                  >
                    <BiEdit className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleDeleteLibrary}
                    className="p-2 text-pageturner-dark hover:bg-pageturner-rose 
                             rounded-lg transition-colors duration-300"
                  >
                    <BiTrash className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {library.books.map(book => (
            <div key={book.id} className="relative group">
              <BookCard
                book={book}
                onAddToLibrary={() => {}}
                onClick={() => {/* Handle book click */}}
              />
              <button
                onClick={() => handleRemoveBook(book.id)}
                className="absolute top-2 right-2 p-2 bg-pageturner-dark 
                         text-pageturner-light rounded-full opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         hover:bg-pageturner-rose"
              >
                <BiTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {library.books.length === 0 && (
          <div className="text-center py-12">
            <p className="text-pageturner-dark font-crimson text-lg">
              This library is empty. Add some books to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryDetail; 