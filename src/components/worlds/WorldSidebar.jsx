import { FiX, FiHeart } from 'react-icons/fi';

const WorldSidebar = ({ world, onClose }) => {
  const handleFavorite = () => {
    // Implement favorite functionality
    console.log('Favorited:', world.name);
  };

  return (
    <div className="w-full lg:w-80 bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-pageturner-dark">{world.name}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFavorite}
            className="p-2 hover:bg-pageturner-beige rounded-full transition-colors"
          >
            <FiHeart className="text-pageturner-brown" />
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pageturner-beige rounded-full transition-colors"
          >
            <FiX className="text-pageturner-brown" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-pageturner-dark">World</h3>
          <p>{world.world}</p>
        </div>

        <div>
          <h3 className="font-semibold text-pageturner-dark">Description</h3>
          <p className="text-sm">{world.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-pageturner-dark">Related Books</h3>
          <ul className="text-sm space-y-1">
            {/* Add related books list */}
            <li>
              <a href="#" className="text-pageturner-brown hover:underline">
                Example Book 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorldSidebar; 