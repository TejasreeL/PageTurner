import { useState } from 'react';
import { FiSearch, FiGlobe, FiStar } from 'react-icons/fi';
import WorldMap from '../components/worlds/WorldMap';
import WorldSidebar from '../components/worlds/WorldSidebar';
import FeaturedWorlds from '../components/worlds/FeaturedWorlds';
import HarryPotterMap from '../components/worlds/HarryPotterMap';

const WorldsExplorerPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleMarkerClick = (world) => {
    setSelectedWorld(world);
    setSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-pageturner-light">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-pageturner-dark flex items-center gap-2">
              <span>Explore Fictional Worlds</span>
              <span role="img" aria-label="map">🗺️✨</span>
            </h1>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <select
                value={selectedGenre}
                onChange={handleGenreChange}
                className="px-4 py-2 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
              >
                <option value="all">All Genres</option>
                <option value="fantasy">Fantasy</option>
                <option value="scifi">Sci-Fi</option>
              </select>

              <form onSubmit={handleSearch} className="flex-1 md:w-64">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search worlds..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pageturner-brown" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Map Section */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-4 h-[600px]">
              <HarryPotterMap onMarkerClick={handleMarkerClick} />
            </div>
          </div>

          {/* Sidebar */}
          {sidebarOpen && (
            <WorldSidebar
              world={selectedWorld}
              onClose={() => setSidebarOpen(false)}
            />
          )}
        </div>

        {/* Featured Worlds Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-pageturner-dark mb-4">Featured Worlds</h2>
          <FeaturedWorlds selectedGenre={selectedGenre} />
        </section>
      </main>
    </div>
  );
};

export default WorldsExplorerPage; 