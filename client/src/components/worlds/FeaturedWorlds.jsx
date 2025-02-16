import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FeaturedWorlds = ({ selectedGenre }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Example featured worlds data - replace with your actual data
  const featuredWorlds = [
    {
      id: 1,
      name: "Middle-earth",
      image: "/worlds/middle-earth.jpg",
      genre: "fantasy",
      books: ["The Lord of the Rings", "The Hobbit"],
    },
    {
      id: 2,
      name: "Arrakis",
      image: "/worlds/arrakis.jpg",
      genre: "scifi",
      books: ["Dune"],
    },
    // Add more worlds
  ];

  const filteredWorlds = selectedGenre === 'all'
    ? featuredWorlds
    : featuredWorlds.filter(world => world.genre === selectedGenre);

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-pageturner-beige transition-colors"
        >
          <FiChevronLeft className="text-pageturner-brown" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 py-4 px-8 hide-scrollbar"
      >
        {filteredWorlds.map((world) => (
          <div
            key={world.id}
            className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={world.image}
              alt={world.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-pageturner-dark">{world.name}</h3>
              <p className="text-sm text-pageturner-brown capitalize">{world.genre}</p>
              <div className="mt-2">
                <p className="text-xs font-semibold text-pageturner-dark">Featured in:</p>
                <ul className="text-xs text-pageturner-brown">
                  {world.books.map((book, index) => (
                    <li key={index}>{book}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-pageturner-beige transition-colors"
        >
          <FiChevronRight className="text-pageturner-brown" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedWorlds; 