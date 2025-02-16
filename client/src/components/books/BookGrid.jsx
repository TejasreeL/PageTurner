import { Link } from 'react-router-dom';
import { FiStar, FiBookmark, FiHeart } from 'react-icons/fi';
import { sampleBooks } from '../../data/sampleBooks';

const BookGrid = () => {
  const shelves = ["Want to Read", "Currently Reading", "Read"];

  return (
    <div className="py-8">
      {/* Featured Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-pageturner-dark mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBooks.slice(0, 3).map((book) => (
            <FeaturedBookCard key={book.id} book={book} shelves={shelves} />
          ))}
        </div>
      </div>

      {/* Regular Grid */}
      <div>
        <h2 className="text-2xl font-bold text-pageturner-dark mb-6">All Books</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sampleBooks.map((book) => (
            <BookCard key={book.id} book={book} shelves={shelves} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedBookCard = ({ book, shelves }) => (
  <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex flex-col h-full">
      <Link to={`/book/${book.id}`} className="relative block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <Link to={`/book/${book.id}`}>
            <h3 className="text-xl font-semibold text-pageturner-dark hover:text-pageturner-brown transition-colors duration-200">
              {book.title}
            </h3>
          </Link>

          <Link to={`/author/${book.author}`}>
            <p className="mt-2 text-pageturner-brown hover:text-pageturner-dark transition-colors duration-200">
              {book.author}
            </p>
          </Link>

          <div className="flex flex-wrap gap-2 mt-3">
            {book.genre.map((g) => (
              <span
                key={g}
                className="text-xs px-3 py-1 bg-pageturner-light text-pageturner-dark rounded-full hover:bg-pageturner-beige transition-colors duration-200 cursor-pointer"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center text-pageturner-brown">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(book.rating) ? "fill-current" : ""}`}
                />
              ))}
            </div>
            <span className="text-sm text-pageturner-brown">({book.rating})</span>
          </div>
        </div>

        <div className="mt-4">
          <select
            className="w-full px-4 py-2 border-2 border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown transition-all duration-200 text-pageturner-dark cursor-pointer"
            onChange={(e) => console.log(`Add ${book.title} to ${e.target.value}`)}
          >
            <option value="">Add to Shelf</option>
            {shelves.map((shelf) => (
              <option key={shelf} value={shelf}>{shelf}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

const BookCard = ({ book, shelves }) => (
  <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Link to={`/book/${book.id}`} className="relative block">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>

    <div className="p-4">
      <Link to={`/book/${book.id}`}>
        <h3 className="font-medium text-pageturner-dark hover:text-pageturner-brown transition-colors duration-200 line-clamp-1">
          {book.title}
        </h3>
      </Link>

      <Link to={`/author/${book.author}`}>
        <p className="text-sm text-pageturner-brown hover:text-pageturner-dark transition-colors duration-200 mt-1">
          {book.author}
        </p>
      </Link>

      <div className="flex items-center gap-1 mt-2">
        <div className="flex items-center text-pageturner-brown">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`w-4 h-4 ${i < Math.floor(book.rating) ? "fill-current" : ""}`}
            />
          ))}
        </div>
        <span className="text-xs text-pageturner-brown ml-1">({book.rating})</span>
      </div>

      <select
        className="w-full mt-3 px-3 py-1.5 text-sm border-2 border-pageturner-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-pageturner-brown transition-all duration-200 text-pageturner-dark cursor-pointer"
        onChange={(e) => console.log(`Add ${book.title} to ${e.target.value}`)}
      >
        <option value="">Add to Shelf</option>
        {shelves.map((shelf) => (
          <option key={shelf} value={shelf}>{shelf}</option>
        ))}
      </select>
    </div>
  </div>
);

export default BookGrid; 