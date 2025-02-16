import React, { useState } from 'react';
import { BiLibrary, BiSearch, BiChevronDown } from 'react-icons/bi';

const LibraryHeader = ({ onSearch, onFilter, onSort }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    language: '',
    genre: '',
    author: ''
  });

  const languages = ['English', 'Spanish', 'French', 'German'];
  const genres = ['Mystery', 'Fantasy', 'Sci-Fi', 'Romance', 'Horror'];
  const sortOptions = ['Trending', 'Highly Rated', 'Recently Added'];

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5">
        {/* Header Title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BiLibrary className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Book Library</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch(e.target.value);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {/* Language Filter */}
            <div className="relative">
              <select
                onChange={(e) => handleFilterChange('language', e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Language</option>
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <BiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <select
                onChange={(e) => handleFilterChange('genre', e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Genre</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              <BiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                onChange={(e) => onSort(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <BiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeader; 