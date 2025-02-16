import React, { useState } from 'react';
import { BiX, BiPlus, BiMinus } from 'react-icons/bi';

const CreatePathModal = ({ isOpen, onClose, onCreatePath }) => {
  const [pathData, setPathData] = useState({
    title: '',
    description: '',
    genre: '',
    books: [{ id: 1, title: '', author: '', description: '' }]
  });

  const handleAddBook = () => {
    setPathData(prev => ({
      ...prev,
      books: [...prev.books, { 
        id: prev.books.length + 1, 
        title: '', 
        author: '', 
        description: '' 
      }]
    }));
  };

  const handleRemoveBook = (index) => {
    setPathData(prev => ({
      ...prev,
      books: prev.books.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePath(pathData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-pageturner-dark/50 flex items-center justify-center z-50">
      <div className="bg-pageturner-light rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto mx-4">
        {/* Modal Header */}
        <div className="bg-pageturner-beige p-4 sticky top-0 z-10 rounded-t-lg 
                     border-b border-pageturner-brown flex justify-between items-center">
          <h2 className="text-2xl font-cinzel text-pageturner-navy">Create New Reading Path</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-pageturner-brown/20 rounded-full transition-colors"
          >
            <BiX className="w-6 h-6 text-pageturner-navy" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block font-cinzel text-pageturner-dark mb-2">
                Path Title
              </label>
              <input
                type="text"
                value={pathData.title}
                onChange={(e) => setPathData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                         bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                placeholder="e.g., Classic Fantasy Journey"
                required
              />
            </div>

            <div>
              <label className="block font-cinzel text-pageturner-dark mb-2">
                Description
              </label>
              <textarea
                value={pathData.description}
                onChange={(e) => setPathData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                         bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                rows="3"
                placeholder="Describe your reading path..."
                required
              />
            </div>

            <div>
              <label className="block font-cinzel text-pageturner-dark mb-2">
                Genre
              </label>
              <select
                value={pathData.genre}
                onChange={(e) => setPathData(prev => ({ ...prev, genre: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                         bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                required
              >
                <option value="">Select a genre</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Classic Literature">Classic Literature</option>
                <option value="Historical Fiction">Historical Fiction</option>
              </select>
            </div>
          </div>

          {/* Books List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-cinzel text-lg text-pageturner-dark">Books in Path</h3>
              <button
                type="button"
                onClick={handleAddBook}
                className="px-3 py-1.5 bg-pageturner-sage text-pageturner-dark rounded-lg 
                         hover:bg-pageturner-sage/80 transition-colors duration-300 
                         flex items-center space-x-2"
              >
                <BiPlus className="w-5 h-5" />
                <span>Add Book</span>
              </button>
            </div>

            {pathData.books.map((book, index) => (
              <div 
                key={book.id} 
                className="p-4 bg-white rounded-lg border border-pageturner-beige shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="w-8 h-8 rounded-full bg-pageturner-sage 
                                text-pageturner-dark flex items-center justify-center 
                                font-bold">
                    {index + 1}
                  </span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveBook(index)}
                      className="p-1.5 text-pageturner-rose hover:bg-pageturner-rose/10 
                               rounded-full transition-colors"
                    >
                      <BiMinus className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    value={book.title}
                    onChange={(e) => {
                      const newBooks = [...pathData.books];
                      newBooks[index].title = e.target.value;
                      setPathData(prev => ({ ...prev, books: newBooks }));
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                             bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                    placeholder="Book Title"
                    required
                  />
                  
                  <input
                    type="text"
                    value={book.author}
                    onChange={(e) => {
                      const newBooks = [...pathData.books];
                      newBooks[index].author = e.target.value;
                      setPathData(prev => ({ ...prev, books: newBooks }));
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                             bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                    placeholder="Author"
                    required
                  />

                  <textarea
                    value={book.description}
                    onChange={(e) => {
                      const newBooks = [...pathData.books];
                      newBooks[index].description = e.target.value;
                      setPathData(prev => ({ ...prev, books: newBooks }));
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-pageturner-brown 
                             bg-white focus:outline-none focus:ring-2 focus:ring-pageturner-sage"
                    rows="2"
                    placeholder="Brief description of the book..."
                    required
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-pageturner-beige">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-pageturner-light text-pageturner-dark rounded-lg 
                       hover:bg-pageturner-beige transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pageturner-navy text-pageturner-light rounded-lg 
                       hover:bg-pageturner-dark transition-colors duration-300"
            >
              Create Path
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePathModal; 