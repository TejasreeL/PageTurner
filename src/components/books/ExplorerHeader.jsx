import { useState } from 'react';
import { FiBook, FiSearch, FiFilter } from 'react-icons/fi';

const ExplorerHeader = ({ filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const genres = ["Fiction", "Non-Fiction", "Mystery", "Romance", "Sci-Fi", "Fantasy", "Horror", "Biography", "History"];
  const languages = ["English", "Spanish", "French", "German", "Italian", "Japanese"];
  const sortOptions = [
    { value: "trending", label: "Trending Now" },
    { value: "rating", label: "Highest Rated" },
    { value: "date", label: "Recently Published" },
    { value: "popular", label: "Most Popular" }
  ];

  return (
    <div className="bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header and Search Section */}
        <div className="space-y-6">
          {/* Title and Filter Toggle */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-pageturner-dark flex items-center gap-3">
              <FiBook className="text-pageturner-brown text-3xl" />
              <span>Explore Books</span>
            </h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-pageturner-light text-pageturner-dark hover:bg-pageturner-beige transition-colors duration-300"
            >
              <FiFilter />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pageturner-brown text-xl" />
            <input
              type="text"
              placeholder="Search by title, author, or genre..."
              className="w-full pl-12 pr-4 py-3 border-2 border-pageturner-beige rounded-full focus:outline-none focus:ring-2 focus:ring-pageturner-brown focus:border-transparent transition-all duration-300 text-pageturner-dark placeholder-pageturner-brown/50"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showFilters ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Genre Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-pageturner-dark">Genres</label>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => {
                      const newGenres = filters.genres.includes(genre)
                        ? filters.genres.filter(g => g !== genre)
                        : [...filters.genres, genre];
                      setFilters({ ...filters, genres: newGenres });
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                      filters.genres.includes(genre)
                        ? 'bg-pageturner-brown text-white'
                        : 'bg-pageturner-light text-pageturner-dark hover:bg-pageturner-beige'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-pageturner-dark">Language</label>
              <select
                className="w-full px-4 py-2 border-2 border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown bg-white transition-all duration-200"
                value={filters.language}
                onChange={(e) => setFilters({ ...filters, language: e.target.value })}
              >
                <option value="all">All Languages</option>
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-pageturner-dark">Sort By</label>
              <select
                className="w-full px-4 py-2 border-2 border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown bg-white transition-all duration-200"
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerHeader; 