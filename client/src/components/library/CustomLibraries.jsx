import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiPlus, BiEdit, BiTrash, BiChevronRight } from 'react-icons/bi';

const CustomLibraries = ({ libraries, onCreateLibrary, onEditLibrary, onDeleteLibrary }) => {
  const [newLibraryName, setNewLibraryName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    if (newLibraryName.trim()) {
      onCreateLibrary(newLibraryName);
      setNewLibraryName('');
      setIsCreating(false);
    }
  };

  return (
    <div className="bg-[#f5f0e5] rounded-lg shadow-md p-4 border border-[#4a3827]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">My Libraries</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700"
        >
          <BiPlus className="w-5 h-5" />
          <span>New Library</span>
        </button>
      </div>

      {/* Create New Library Form */}
      {isCreating && (
        <div className="mb-4 p-4 border border-gray-200 rounded-lg">
          <input
            type="text"
            value={newLibraryName}
            onChange={(e) => setNewLibraryName(e.target.value)}
            placeholder="Library name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-2"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleCreate}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Create
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Libraries List */}
      <div className="space-y-2">
        {libraries.map(library => (
          <Link
            key={library.id}
            to={`/library/${library.id}`}
            className="block group"
          >
            <div className="flex items-center justify-between p-3 bg-[#e8e1d1] 
                          rounded-lg hover:bg-[#d4c5a7] transition-colors duration-300">
              <div>
                <h3 className="font-cinzel text-[#4a3827]">{library.name}</h3>
                <p className="text-sm font-crimson text-[#4a3827]">
                  {library.bookCount} books
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onEditLibrary(library);
                  }}
                  className="p-2 text-[#4a3827] hover:bg-[#c4b597] rounded-full 
                           transition-colors duration-300"
                >
                  <BiEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteLibrary(library.id);
                  }}
                  className="p-2 text-[#4a3827] hover:bg-[#c4b597] rounded-full 
                           transition-colors duration-300"
                >
                  <BiTrash className="w-5 h-5" />
                </button>
                <BiChevronRight className="w-5 h-5 text-[#4a3827] 
                                       group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomLibraries; 